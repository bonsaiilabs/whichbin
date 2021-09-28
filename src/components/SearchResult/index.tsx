import React, { useEffect, useState } from 'react';
import { ItemToBin, Location } from '../../types/shared';
import {
  useGetBinMappings,
  useGetLocationMappings,
} from '../../helpers/mappings';
import { useParams } from 'react-router-dom';
import { AppShell } from '../AppShell';
import Returnable from '../../assets/bins/returnables.jpeg';
import Landfill from '../../assets/bins/landfill.jpeg';
import NoBin from '../../assets/bins/noBin.jpeg';
import Organic from '../../assets/bins/organic.jpeg';
import Recycle from '../../assets/bins/recycle.jpeg';
import styles from './searchresult.module.css';

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
      <div className={styles.resultsContainer}>
        <h2>{item.item}</h2>
        <img
          src={getBinToImage(item.bin)}
          height={300} // should change
          width={'auto'}
          alt={item.notes}
        />
        {item.bin !== 'Cannot throw in community' && (
          <h3>Your Bin: {item.bin}</h3>
        )}
        {item.bin === 'Cannot throw in community' && <h3>{item.bin}</h3>}
        {/*<pre>{JSON.stringify(item, null, 2)}</pre>
        {location && <pre>{JSON.stringify(location, null, 2)}</pre>}*/}
      </div>
    </AppShell>
  );
};
