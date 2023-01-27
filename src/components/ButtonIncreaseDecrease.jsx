import React from 'react';
import PokemonsPaginatedButton from './PokemonsPaginatedButton';
import { Pagination } from '@mui/material'

const ButtonIncrementDecrease = ({ setPage,totalPages, setPokemonsPerPage }) => {

  const pokemonsPaginatedButton = <PokemonsPaginatedButton
    numberPage={2}
    functionSet={setPokemonsPerPage}
  />

  // Functipon Goes to the page number
  const pagesOfNumber = (event,value) => {
    setPage(Number(value));
  }

  return (
    <div className='div--paginated'>
     
      {/* PokemonsPerPage */}
      {pokemonsPaginatedButton}

     {/* Paginated */}
      <Pagination count={totalPages}   onChange={pagesOfNumber} variant="outlined" shape="rounded" 
      color="primary"
      
      />

    </div>

  );
};

export default ButtonIncrementDecrease;