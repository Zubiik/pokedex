import { useState } from "react";
import Input from "../../components/Input/Index";
import Button from "../../components/Button/Index";
import IconButton from "../../components/IconButton/Index";
import {
  SearchPageCustom,
  ImgCustom,
  ImgUrl,
  ButtonContainer,
  ImgContainer,
} from "./styled.js";
import Pokeball from "../../image/pokeball 4.png";
export default function SearchPage({
  pokemon,
  setPokemon,
  inputCallback,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <SearchPageCustom>
      <ImgContainer>
        <ImgCustom>
          <ImgUrl alt="pokeball " src={Pokeball} />
        </ImgCustom>
        <Input
          pokemon={pokemon}
          setPokemon={setPokemon}
          inputCallback={inputCallback}
        />
      </ImgContainer>
      <ButtonContainer>
        <Button
          pokemon={pokemon}
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
          pokemonDescription={pokemonDescription}
          setPokemonDescription={setPokemonDescription}
        />
        <IconButton
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
          setPokemonDescription={setPokemonDescription}
        />
      </ButtonContainer>
    </SearchPageCustom>
  );
}
