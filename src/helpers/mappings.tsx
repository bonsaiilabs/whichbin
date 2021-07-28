import React, { useEffect, useState } from 'react';
import { ItemToBin } from '../types/itemToBin';
import { itemToBins } from '../data/bins';

export const useGetBinMappings = () => {
  const [mappings, setMappings] = useState<Map<number, ItemToBin> | undefined>(
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
    setMappings(itemIdsToBin);
  }, []);
  return mappings;
};
