import React from 'react';
import { Header } from '../Header';

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
      <Header />
      {children}
    </>
  );
};
