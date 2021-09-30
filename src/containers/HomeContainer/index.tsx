import React from 'react';
import styles from './home.module.css';
import SearchContainer from '../SearchContainer';
import WhichBinLogo from '../../assets/whicbin.svg';

export const HomeContainer = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.title}>
        <WhichBinLogo />
        <h1>Which Bin?</h1>
      </div>
      <p>Find where you should throw your trash</p>
      <div className={styles.homeSearchContainer}>
        <SearchContainer />
      </div>
    </div>
  );
};
