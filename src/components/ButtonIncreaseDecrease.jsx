import React, { useState } from 'react';
import PokemonsPaginatedButton from './PokemonsPaginatedButton';

const ButtonIncrementDecrease = ({ setPage, textPrev, textNext, totalPages, pagesNumbers, setPokemonsPerPage }) => {

  const [numberPage, setNumberPage] = useState(1);

  // Function Decrease
  const functionPagesPrev = () => {
    setNumberPage(numberPage - 1);
    setPage(numberPage - 1);
  }

  // Function Increse
  const functionPagesNext = () => {
    setNumberPage(numberPage + 1);
    setPage(numberPage + 1);
  }

  // Functipon Goes to the page number
  const pagesOfNumber = (number) => {
    setNumberPage(number);
    setPage(number);
  }

  const pokemonsPaginatedButton = <PokemonsPaginatedButton
    numberPage={2}
    functionSet={setPokemonsPerPage}
  />

  return (
    <div className='div--paginated'>
      <div className='div__div--paginated'>
        {/* Decrease */}
        <button
          onClick={() => (functionPagesPrev())}
          disabled={numberPage === 1}
        >
          {textPrev}
        </button>

        {/* Increse */}
        <button
          onClick={() => (functionPagesNext())}
          disabled={totalPages === numberPage}
        >
          {textNext}
        </button>
      </div>
      {/* Goes to the page number */}
      {/* {pagesNumbers?.map((number, index) =>
        <button onClick={() => pagesOfNumber(number)} key={index}>
          {number}
        </button>)} */}

      {/* PokemonsPerPage */}
      {/* {pokemonsPaginatedButton} */}

    </div>

  );
};

export default ButtonIncrementDecrease;