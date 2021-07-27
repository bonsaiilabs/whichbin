import React from 'react';
import algoliasearch from 'algoliasearch';
import { Autocomplete } from '../../components/Autocomplete';
import './search.css';
import '@algolia/autocomplete-theme-classic';

const appId = 'latency';
const apiKey = '6be0576ff61c053d5f9a3225e2a90f76';
const searchClient = algoliasearch(appId, apiKey);

function SearchContainer() {
  return (
    <div className='container'>
      <Autocomplete placeholder='Search' openOnFocus={true} debug={true} />
    </div>
  );
}
export default SearchContainer;
