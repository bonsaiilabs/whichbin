import React from 'react';
import { Autocomplete } from '../../components/Autocomplete';
import styles from './search.module.css';
import '@algolia/autocomplete-theme-classic';

function SearchContainer() {
  return (
    <div className={styles.container}>
      <Autocomplete placeholder='Search' openOnFocus={true} debug={true} />
    </div>
  );
}
export default SearchContainer;
