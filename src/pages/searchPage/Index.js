import { useState } from "react";
import Input from "../../components/Input/Index";
import Button from "../../components/Button/Index";
import IconButton from "../../components/IconButton/Index";

export default function SearchPage() {
  const [pokemon, setPokemon] = useState("");

  const inputCallback = (event, setterFunction) => {
    setterFunction(event.target.value);
  };
  return (
    <div>
      <Input
        pokemon={pokemon}
        setPokemon={setPokemon}
        inputCallback={inputCallback}
      />
      <Button pokemon={pokemon} />
      <IconButton />
    </div>
  );
}
