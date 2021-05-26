import { useState } from "react";

export default function Input({ pokemon, setPokemon, inputCallback }) {
  return (
    <div>
      <input
        name={pokemon}
        onChange={(event) => {
          inputCallback(event, setPokemon);
        }}
      ></input>
    </div>
  );
}
