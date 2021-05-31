import { useState } from "react";
import { InputCustom } from "./styled.js";
export default function Input({ pokemon, setPokemon, inputCallback }) {
  return (
    <InputCustom>
      <p>Pokemon name or id</p>
      <input
        name={pokemon}
        onChange={(event) => {
          inputCallback(event, setPokemon);
        }}
      ></input>
    </InputCustom>
  );
}
