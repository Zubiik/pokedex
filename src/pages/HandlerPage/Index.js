import { useState } from "react";
import Pokedex from "../Pokedex/Index";
import SearchPage from "../SearchPage/Index";
import { HandlerCustom } from "./styled.js";

export default function HandlerPage() {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState({});

  return (
    <HandlerCustom>
      {!pokemonInfo ? (
        <SearchPage
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
          pokemonDescription={pokemonDescription}
          setPokemonDescription={setPokemonDescription}
        />
      ) : (
        <Pokedex
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
          pokemonDescription={pokemonDescription}
          setPokemonDescription={setPokemonDescription}
        />
      )}
    </HandlerCustom>
  );
}
