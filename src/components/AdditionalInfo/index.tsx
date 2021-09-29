import React from 'react';
import { InfoIcon } from '../InfoIcon';
import styles from './additionalinfo.module.css';
import { CONTACTS } from '../../data/contact';

interface AdditionalInfoProps {
  note: string;
}

export const AdditionalInfo = ({ note }: AdditionalInfoProps) => {
  const contactInfo = CONTACTS.filter(c => c.key === note)[0];
  const displayText =
    contactInfo.key === 'Thrift stores or the landfill'
      ? 'You may also drop it at nearby Thrift store'
      : `You must drop this item at ${contactInfo.display}`;
  return (
    <div className={styles.additionalInfoContainer}>
      <p>{displayText}</p>
      <div className={styles.additionalInfoIcons}>
        <InfoIcon name={'Website'} url={contactInfo.website} />
        <InfoIcon name={'Phone'} url={`tel:${contactInfo.phone}`} />
        {contactInfo.directions && (
          <InfoIcon name={'Directions'} url={contactInfo.directions} />
        )}
      </div>
    </div>
  );
};
