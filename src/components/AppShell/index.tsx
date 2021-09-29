import React from 'react';
import SearchContainer from '../../containers/SearchContainer';

export type AppShellProps = {
  children: React.ReactNode;
};
export const AppShell = ({ children }: AppShellProps) => {
  /*const [mappings, setMappings] = useState<
    Map<number, ItemToBin> | undefined
  >();
  const fetchMappings = useGetBinMappings();

  useEffect(() => {
    if (!fetchMappings) return;
    setMappings(fetchMappings);
  }, [fetchMappings]);*/

  return (
    <>
      <SearchContainer />
      {children}
    </>
  );
};
