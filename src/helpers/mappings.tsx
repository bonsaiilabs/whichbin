import React, { useEffect, useState } from 'react';
import { ItemToBin, Location } from '../types/shared';
import { itemToBins } from '../data/bins';
import { LOCATIONS } from '../data/locations';

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

export const useGetLocationMappings = () => {
  const [locations, setLocations] = useState<
    Map<string, Location> | undefined
  >();

  useEffect(() => {
    const keyTolocations = LOCATIONS.reduce(
      (acc: Map<string, Location>, location) => {
        acc.set(location.key, location);
        return acc;
      },
      new Map<string, Location>()
    );
    setLocations(keyTolocations);
  }, []);
  return locations;
};
