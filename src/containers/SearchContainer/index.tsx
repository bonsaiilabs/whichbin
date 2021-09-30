import React from 'react';
import { Autocomplete } from '../../components/Autocomplete';
import styles from './search.module.css';
import '@algolia/autocomplete-theme-classic';
import { useHistory } from 'react-router-dom';

function SearchContainer() {
  const history = useHistory();
  return (
    <div className={styles.search}>
      <Autocomplete placeholder='Search' openOnFocus={true} debug={true} />
    </div>
  );
}

export default SearchContainer;
