import React, { useEffect, useState } from 'react';
import { ItemToBin, Location } from '../../types/shared';
import {
  useGetBinMappings,
  useGetLocationMappings,
} from '../../helpers/mappings';
import { useParams } from 'react-router-dom';
import { AppShell } from '../AppShell';

export const SearchResult = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemToBin | undefined>(undefined);
  const [location, setLocation] = useState<Location | undefined>(undefined);
  const mappings = useGetBinMappings();
  const locations = useGetLocationMappings();

  useEffect(() => {
    if (!mappings) return;
    setItem(mappings.get(Number(id)));
  }, [mappings, id]);

  useEffect(() => {
    if (!(locations && item)) return;
    const mappedItem = mappings.get(Number(id)) as ItemToBin;
    let aLocation: Location = locations.get(mappedItem.notes);
    setLocation(aLocation);
  }, [locations, item, id]);

  if (!item) {
    return <h1>Loading...</h1>;
  }
  return (
    <AppShell>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      {location && <pre>{JSON.stringify(location, null, 2)}</pre>}
    </AppShell>
  );
};
