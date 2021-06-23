import { React, useCallback } from "react";
import GetPokemon from "../../api/GetPokemon";
import GetPokemonDescription from "../../api/GetPokemonDescription";
import { SearchButtonCustom, SearchTextCustom } from "./styled.js";
export default function Button({
  pokemon,
  setPokemonInfo,
  setPokemonDescription,
}) {
  const buttonCallback = useCallback(() => {
    if (!pokemon) {
      alert("wallah écrit le nom d'un pokemon");
    } else {
      GetPokemon(pokemon).then((responseJson) => {
        setPokemonInfo(responseJson);
      });
      GetPokemonDescription(pokemon).then((responseJson) => {
        setPokemonDescription(responseJson);
      });
    }
  }, [pokemon]);

  return (
    <SearchButtonCustom onClick={buttonCallback}>
      <SearchTextCustom>Search !</SearchTextCustom>
    </SearchButtonCustom>
  );
}
