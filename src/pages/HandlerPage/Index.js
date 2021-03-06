import { useState } from "react";
import Pokedex from "../Pokedex/Index";
import SearchPage from "../SearchPage/Index";
import { HandlerCustom } from "./styled.js";
export default function HandlerPage() {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonDescription, setPokemonDescription] = useState({});
  const [pokemon, setPokemon] = useState("");

  const inputCallback = (event, setterFunction) => {
    setterFunction(event.target.value);
  };

  return (
    <HandlerCustom>
      {!pokemonInfo ? (
        <SearchPage
          pokemon={pokemon}
          setPokemon={setPokemon}
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
          pokemonDescription={pokemonDescription}
          setPokemonDescription={setPokemonDescription}
          inputCallback={inputCallback}
        />
      ) : (
        <Pokedex
          pokemon={pokemon}
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
          pokemonDescription={pokemonDescription}
          setPokemonDescription={setPokemonDescription}
        />
      )}
    </HandlerCustom>
  );
}
