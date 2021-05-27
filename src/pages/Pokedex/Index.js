import { useState } from "react";
import Info from "../../components/Info/Index";

export default function Pokedex({ pokemonInfo, setPokemonInfo }) {
  return (
    <div>
      <Info pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} />
    </div>
  );
}
