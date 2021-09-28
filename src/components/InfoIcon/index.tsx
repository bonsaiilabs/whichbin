import React from 'react';
import Website from '../../assets/links/website.svg';
import Phone from '../../assets/links/phone.svg';
import Directions from '../../assets/links/directions.svg';
import styles from './infoicon.module.css';

interface InfoIconProps {
  name: string;
}

export const InfoIcon = ({ name }: InfoIconProps) => {
  const getImage =
    name === 'Website' ? Website : name === 'Phone' ? Phone : Directions;
  return (
    <div className={styles.iconContainer}>
      {name === 'Website' && <Website />}
      {name === 'Phone' && <Phone />}
      {name === 'Directions' && <Directions />}
      <p>{name}</p>
    </div>
  );
};
