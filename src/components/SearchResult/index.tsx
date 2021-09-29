import React, { useEffect, useState } from 'react';
import { ItemToBin, Location } from '../../types/shared';
import { useGetBinMappings } from '../../helpers/mappings';
import { useParams } from 'react-router-dom';
import { AppShell } from '../AppShell';
import Returnable from '../../assets/bins/returnables.jpeg';
import Landfill from '../../assets/bins/landfill.jpeg';
import NoBin from '../../assets/bins/stop.jpeg';
import Organic from '../../assets/bins/organic.jpeg';
import Recycle from '../../assets/bins/recycle.jpeg';
import styles from './searchresult.module.css';
import { BinInformation } from './BinInformation';
import { AdditionalInfo } from '../AdditionalInfo';

const getBinToImage = (note: string) => {
  switch (note) {
    case 'Recycle':
      return Recycle;
    case 'Landfill':
      return Landfill;
    case 'Recycle-Returnables':
      return Returnable;
    case 'Organic Waste':
      return Organic;
    case 'Cannot throw in community':
      return NoBin;
  }
};

export const SearchResult = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<ItemToBin | undefined>(undefined);
  const [location, setLocation] = useState<Location | undefined>(undefined);
  const mappings = useGetBinMappings();

  useEffect(() => {
    if (!mappings) return;
    setItem(mappings.get(Number(id)));
  }, [mappings, id]);

  if (!item) {
    return <h1>Loading...</h1>;
  }
  return (
    <AppShell>
      <div className={styles.resultsContainer}>
        <BinInformation
          name={item.item}
          bin={item.bin}
          image={getBinToImage(item.bin)}
          notes={item.notes}
        />
        {item.notes.trim().length > 0 && <AdditionalInfo note={item.notes} />}
      </div>
    </AppShell>
  );
};
