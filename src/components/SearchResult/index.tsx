import React, { useEffect, useState } from 'react';
import { ItemToBin } from '../../types/itemToBin';
import { useGetBinMappings } from '../../helpers/mappings';
import { useParams } from 'react-router-dom';
//TODO: This should be memoized and should only run once when the app loads
export const SearchResult = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemToBin | undefined>(undefined);
  const mappings = useGetBinMappings();

  useEffect(() => {
    if (!mappings) return;
    setItem(mappings.get(Number(id)));
  }, [mappings]);

  if (!item) {
    return <h1>Loading...</h1>;
  }
  return <pre>{JSON.stringify(item, null, 2)}</pre>;
};
