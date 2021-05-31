import getPokemon from "../../api/GetPokemon";
import { RandomuttonCustom } from "./styled.js";
export default function IconButton() {
  const buttonCallback = () => {
    const pokemonId = Math.round(Math.random() * (151 - 1) + 1);
    getPokemon(pokemonId);
  };

  //console.log(buttonCallback());

  return (
    <RandomuttonCustom>
      <button onClick={buttonCallback}>random</button>
    </RandomuttonCustom>
  );
}
