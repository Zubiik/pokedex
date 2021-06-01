import GetPokemon from "../../api/GetPokemon";
import GetPokemonDescription from "../../api/GetPokemonDescription";
import { SearchButtonCustom, SearchTextCustom } from "./styled.js";
export default function Button({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  const buttonCallback = () => {
    if (pokemon === "") {
      alert("wallah écrit le nom d'un pokemon");
    }
    GetPokemon(pokemon).then((responseJson) => {
      setPokemonInfo(responseJson);
    });
    GetPokemonDescription(pokemon).then((responseJson) => {
      setPokemonDescription(responseJson);
    });
  };
  return (
    <SearchButtonCustom>
      <SearchTextCustom onClick={buttonCallback}>Search!</SearchTextCustom>
    </SearchButtonCustom>
  );
}
