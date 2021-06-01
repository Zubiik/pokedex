import getPokemon from "../../api/GetPokemon";
import { RandomuttonCustom } from "./styled.js";
import Vector from "../../image/Vector.png";
export default function IconButton() {
  const buttonCallback = () => {
    const pokemonId = Math.round(Math.random() * (151 - 1) + 1);
    getPokemon(pokemonId);
  };
  //console.log(buttonCallback());

  return (
    <RandomuttonCustom>
      <div onClick={buttonCallback}>
        <img src={Vector} alt="arrow"></img>
      </div>
    </RandomuttonCustom>
  );
}
