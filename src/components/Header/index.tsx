import React from 'react';
import styles from './header.module.css';
import WhichBinLogo from '../../assets/whicbin.svg';
import { Autocomplete } from '../Autocomplete';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const history = useHistory();
  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => history.push('/')}>
        <WhichBinLogo />
      </div>
      <div className={styles.search}>
        <Autocomplete placeholder='Search' openOnFocus={true} debug={true} />
      </div>
    </div>
  );
};
