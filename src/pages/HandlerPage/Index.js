import { useState } from "react";
import Pokedex from "../Pokedex/Index";
import SearchPage from "../SearchPage/Index";

export default function HandlerPage() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState({});

  return (
    <div>
      <Pokedex
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
        pokemonDescription={pokemonDescription}
        setPokemonDescription={setPokemonDescription}
      />
      <SearchPage
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
        pokemonDescription={pokemonDescription}
        setPokemonDescription={setPokemonDescription}
      />
    </div>
  );
}
