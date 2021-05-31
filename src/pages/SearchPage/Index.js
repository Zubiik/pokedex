import { useState } from "react";
import Input from "../../components/Input/Index";
import Button from "../../components/Button/Index";
import IconButton from "../../components/IconButton/Index";
import { SearchPageCustom } from "./styled.js";

export default function SearchPage({
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  const [pokemon, setPokemon] = useState("");

  const inputCallback = (event, setterFunction) => {
    setterFunction(event.target.value);
  };
  return (
    <SearchPageCustom>
      <Input
        pokemon={pokemon}
        setPokemon={setPokemon}
        inputCallback={inputCallback}
      />
      <Button
        pokemon={pokemon}
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
        pokemonDescription={pokemonDescription}
        setPokemonDescription={setPokemonDescription}
      />
      <IconButton />
    </SearchPageCustom>
  );
}
