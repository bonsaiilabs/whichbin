import React from 'react';
import Website from '../../assets/links/website.svg';
import Phone from '../../assets/links/phone.svg';
import Directions from '../../assets/links/directions.svg';
import styles from './infoicon.module.css';

interface InfoIconProps {
  name: string;
  url: string;
}

export const InfoIcon = ({ name, url }: InfoIconProps) => {
  return (
    <div
      className={styles.iconContainer}
      onClick={() => window.open(url, '_blank')}
    >
      {name === 'Website' && <Website />}
      {name === 'Phone' && <Phone />}
      {name === 'Directions' && <Directions />}
      <p>{name}</p>
    </div>
  );
};
