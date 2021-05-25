import { useState,useEffect } from 'react';
import PokemonInput from '../../components/input/Index';

export default function SearchPage() {
const [pokemon, setPokemon] = useState("");


const inputCallback = (event,setterFunction) => {
setterFunction(event.target.value);
console.log(pokemon);
}



  return (
    <div>
     <PokemonInput 
      pokemon={pokemon}
      setPokemon={setPokemon} 
      inputCallback={inputCallback}
       />
    </div>
  );
}

