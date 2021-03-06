import { useCallback } from "react";
import {
  HeaderCustom,
  TextCustom,
  HeaderContainer,
  ArrowContainer,
  ArrowImage,
} from "./styled";
import arrow from "../../image/arrow.png";
import React from "react";

export default function HeaderTitle({ pokemonInfo, setPokemonInfo }) {
  const pokemonId = pokemonInfo.id;

  const pokemonById = () => {
    if (pokemonId < 9) {
      return "00" + pokemonId;
    }
    if (pokemonId > 9 && pokemonId < 100) {
      return "0" + pokemonId;
    } else {
      return pokemonId;
    }
  };
  const arrowCallback = useCallback(() => {
    setPokemonInfo(null);
  }, []);

  return (
    <HeaderContainer>
      <ArrowContainer>
        <ArrowImage alt="arrow" src={arrow} onClick={arrowCallback} />
      </ArrowContainer>
      <HeaderCustom>
        <TextCustom>
          {pokemonInfo.name &&
            pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}
        </TextCustom>
        <TextCustom>#{pokemonById()}</TextCustom>
      </HeaderCustom>
    </HeaderContainer>
  );
}
