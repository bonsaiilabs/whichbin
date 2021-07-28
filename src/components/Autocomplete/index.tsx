import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from '@algolia/autocomplete-core';
import React from 'react';

import { ClearIcon } from './ClearIcon';
import { SearchIcon } from './SearchIcon';
import { itemToBins } from '../../data/bins';
import { ItemToBin } from '../../types/itemToBin';

type AutocompleteItem = ItemToBin;

export function Autocomplete(
  props: Partial<AutocompleteOptions<AutocompleteItem>>
) {
  const [autocompleteState, setAutocompleteState] = React.useState<
    AutocompleteState<AutocompleteItem>
  >({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle',
  });
  const autocomplete = React.useMemo(
    () =>
      createAutocomplete<
        AutocompleteItem,
        React.BaseSyntheticEvent,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        getSources() {
          return [
            {
              sourceId: 'links',
              getItems({ query }) {
                return itemToBins.filter(({ item }) =>
                  item.toLowerCase().includes(query.toLowerCase())
                );
              },
              getItemUrl({ item }) {
                return item.id as unknown as string; // todo: make ids as string
              },
            },
          ];
        },
        ...props,
      }),
    [props]
  );
  const inputRef = React.useRef<HTMLInputElement>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const { getEnvironmentProps } = autocomplete;

  React.useEffect(() => {
    if (!formRef.current || !panelRef.current || !inputRef.current) {
      return undefined;
    }

    const { onTouchStart, onTouchMove } = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    });

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [getEnvironmentProps, formRef, inputRef, panelRef]);

  return (
    <div className='aa-Autocomplete' {...autocomplete.getRootProps({})}>
      <form
        ref={formRef}
        className='aa-Form'
        {...autocomplete.getFormProps({ inputElement: inputRef.current })}
      >
        <div className='aa-InputWrapperPrefix'>
          <label className='aa-Label' {...autocomplete.getLabelProps({})}>
            <button className='aa-SubmitButton' type='submit' title='Submit'>
              <SearchIcon />
            </button>
          </label>
        </div>
        <div className='aa-InputWrapper'>
          <input
            className='aa-Input'
            ref={inputRef}
            {...autocomplete.getInputProps({ inputElement: inputRef.current })}
          />
        </div>
        <div className='aa-InputWrapperSuffix'>
          <button className='aa-ClearButton' title='Clear' type='reset'>
            <ClearIcon />
          </button>
        </div>
      </form>

      {autocompleteState.isOpen && (
        <div
          ref={panelRef}
          className={[
            'aa-Panel',
            'aa-Panel--desktop',
            autocompleteState.status === 'stalled' && 'aa-Panel--stalled',
          ]
            .filter(Boolean)
            .join(' ')}
          {...autocomplete.getPanelProps({})}
        >
          <div className='aa-PanelLayout aa-Panel--scrollable'>
            {autocompleteState.collections.map((collection, index) => {
              const { source, items } = collection;

              return (
                <section key={`source-${index}`} className='aa-Source'>
                  {items.length > 0 && (
                    <ul className='aa-List' {...autocomplete.getListProps()}>
                      {items.map(item => {
                        return (
                          <li
                            key={item.item}
                            className='aa-Item'
                            {...autocomplete.getItemProps({ item, source })}
                          >
                            <div className='aa-ItemWrapper'>
                              <div className='aa-ItemContent'>
                                <div className='aa-ItemContentBody'>
                                  <div
                                    className='aa-ItemContentTitle'
                                    dangerouslySetInnerHTML={{
                                      __html: item.item,
                                    }}
                                  />
                                </div>
                              </div>
                              <div className='aa-ItemActions'>
                                <button
                                  className='aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly'
                                  type='button'
                                  title='Select'
                                  style={{ pointerEvents: 'none' }}
                                >
                                  <svg fill='currentColor' viewBox='0 0 24 24'>
                                    <path d='M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z' />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
