import { useState } from "react";
import Pokedex from "../Pokedex/Index";
import SearchPage from "../SearchPage/Index";

export default function HandlerPage() {
  const [pokemonInfo, setPokemonInfo] = useState({});

  return (
    <div>
      <Pokedex pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} />
      <SearchPage pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} />
    </div>
  );
}
