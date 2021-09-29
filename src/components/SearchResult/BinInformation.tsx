import React from 'react';

interface BinInformationProps {
  name: string;
  bin: string;
  image: string;
  notes: string;
}
export const BinInformation = ({
  name,
  bin,
  image,
  notes,
}: BinInformationProps) => {
  return (
    <>
      <h2>{name}</h2>
      <img
        src={image}
        height={300} // should change
        width={'auto'}
        alt={notes}
      />
      {bin !== 'Cannot throw in community' && <h3>Your Bin: {bin}</h3>}
      {bin === 'Cannot throw in community' && <h3>{bin}</h3>}
    </>
  );
};
