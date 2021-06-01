import { useState } from "react";
import Pokedex from "../Pokedex/Index";
import SearchPage from "../SearchPage/Index";
import { HandlerCustom } from "./styled.js";

export default function HandlerPage() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonDescription, setPokemonDescription] = useState({});

  return (
    <HandlerCustom>
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
    </HandlerCustom>
  );
}
