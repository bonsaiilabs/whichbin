import React, { useEffect, useState } from 'react';
import { Autocomplete } from '../../components/Autocomplete';
import styles from './search.module.css';
import '@algolia/autocomplete-theme-classic';
import { itemToBins } from '../../data/bins';
import { ItemToBin } from '../../types/itemToBin';

function SearchContainer() {
  const [idsToBin, setIdsToBin] = useState<Map<number, ItemToBin> | undefined>(
    undefined
  );

  useEffect(() => {
    const itemIdsToBin = itemToBins.reduce(
      (acc: Map<number, ItemToBin>, item) => {
        acc.set(item.id, item);
        return acc;
      },
      new Map<number, ItemToBin>()
    );
    setIdsToBin(itemIdsToBin);
  }, []);

  return (
    <div className={styles.container}>
      <Autocomplete placeholder='Search' openOnFocus={true} debug={true} />
    </div>
  );
}

export default SearchContainer;
