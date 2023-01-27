import { useEffect, useState } from "react";
function paginated(pokemons) {

  const [pokemonsPerPage, setPokemonsPerPage] = useState(10);
  const [page, setPage] = useState(1)
  let lastIndex = page * pokemonsPerPage;
  let firstIndex = lastIndex - pokemonsPerPage
  const pokemonsPaginated = pokemons?.slice(firstIndex, lastIndex);

  //Max Page

  let totalPages = 1;
  if (pokemons?.length) {
    totalPages = Math.ceil(pokemons?.length / pokemonsPerPage);
  }
 
    return {
    setPage,
    //array slice
    pokemonsPaginated,
    //totalPages
    totalPages,
    //PokemonsPerPage
    setPokemonsPerPage
  }
}

export default paginated;