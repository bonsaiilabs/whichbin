import React, { useEffect, useState } from 'react';
import { ItemToBin, Location } from '../../types/itemToBin';
import {
  useGetBinMappings,
  useGetLocationMappings,
} from '../../helpers/mappings';
import SearchContainer from '../../containers/SearchContainer';

export type AppShellProps = {
  children: React.ReactNode;
};
export const AppShell = ({ children }: AppShellProps) => {
  const [mappings, setMappings] = useState<
    Map<number, ItemToBin> | undefined
  >();
  const [locations, setLocations] = useState<
    Map<string, Location> | undefined
  >();
  const fetchMappings = useGetBinMappings();
  const fetchLocations = useGetLocationMappings();

  useEffect(() => {
    if (!fetchMappings) return;
    setMappings(fetchMappings);
  }, [fetchMappings]);

  useEffect(() => {
    if (!fetchLocations) return;
    setLocations(fetchLocations);
  }, [fetchLocations]);

  return (
    <>
      <SearchContainer />
      {children}
    </>
  );
};
