import React from 'react';
import { ItemToBin } from '../../types/itemToBin';

interface SearchResultProps {
  mappings: Map<string, ItemToBin>;
}
export const SearchResult = ({ mappings }: SearchResultProps) => {
  console.log(mappings);
  return <p>Coming soon!</p>;
};
