import GetPokemon from "../../api/GetPokemon";
import GetPokemonDescription from "../../api/GetPokemonDescription";
import { RandomButtonCustom } from "./styled.js";
import Vector from "../../image/Vector.png";

export default function IconButton({ setPokemonInfo, setPokemonDescription }) {
  const buttonCallback = () => {
    const pokemonId = Math.round(Math.random() * (151 - 1) + 1);

    GetPokemon(pokemonId).then((responseJson) => {
      setPokemonInfo(responseJson);
    });
    GetPokemonDescription(pokemonId).then((responseJson) => {
      setPokemonDescription(responseJson);
    });
  };

  return (
    <RandomButtonCustom>
      <div onClick={buttonCallback}>
        <img src={Vector} alt="arrow"></img>
      </div>
    </RandomButtonCustom>
  );
}
