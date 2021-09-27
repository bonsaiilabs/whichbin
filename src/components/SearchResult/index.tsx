import React, { useEffect, useState } from 'react';
import { ItemToBin, Location } from '../../types/itemToBin';
import {
  useGetBinMappings,
  useGetLocationMappings,
} from '../../helpers/mappings';
import { useParams } from 'react-router-dom';

export const SearchResult = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemToBin | undefined>(undefined);
  const [location, setLocation] = useState<Location | undefined>(undefined);
  const mappings = useGetBinMappings();
  const locations = useGetLocationMappings();

  useEffect(() => {
    if (!mappings) return;
    setItem(mappings.get(Number(id)));
  }, [mappings]);

  useEffect(() => {
    if (!(locations && item)) return;
    console.log(`setting up item location`);
    const mappedItem = mappings.get(Number(id)) as ItemToBin;
    let aLocation: Location = locations.get(mappedItem.notes);
    if (aLocation) {
      setLocation(aLocation);
    }
  }, [locations, item]);

  if (!item) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      {location && <pre>{JSON.stringify(location, null, 2)}</pre>}
    </>
  );
};
