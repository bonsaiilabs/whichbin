import React from 'react';
import { InfoIcon } from '../InfoIcon';
import styles from './additionalinfo.module.css';

export const AdditionalInfo = () => {
  return (
    <div className={styles.additionalInfoContainer}>
      <p>This item can also be donated to nearby Thrift store.</p>
      <div className={styles.additionalInfoIcons}>
        <InfoIcon name={'Website'} />
        <InfoIcon name={'Phone'} />
        <InfoIcon name={'Directions'} />
      </div>
    </div>
  );
};
