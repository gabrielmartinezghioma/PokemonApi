import React from 'react';

const PokemonsPaginatedButton = ({numberPage,functionSet}) => {
  return (
    <div>
      <button onClick={()=>functionSet(numberPage)}>{numberPage}</button>
      <button onClick={()=>functionSet(numberPage * 3)}>{numberPage * 3}</button>
      <button onClick={()=>functionSet(numberPage * 6)}>{numberPage * 6}</button>
      <button onClick={()=>functionSet(numberPage * 8)}>{numberPage * 8}</button>
      <button onClick={()=>functionSet(numberPage * 10)}>{numberPage * 10}</button>
    </div>
  );
};

export default PokemonsPaginatedButton;