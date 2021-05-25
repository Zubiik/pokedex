import {useState} from 'react';

export default function PokemonInput({pokemon,setPokemon,inputCallback}) {

  return (
    <div>
    <input name={pokemon} onChange={(event) => {
      inputCallback(event,setPokemon)
    }
    }></input>
    </div>
  );
}

