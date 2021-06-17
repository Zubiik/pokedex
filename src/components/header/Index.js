import {
  HeaderCustom,
  TextCustom,
  HeaderContainer,
  ArrowContainer,
} from "./styled";
import arrow from "../../image/arrow.png";

export default function HeaderTitle({ pokemonInfo, setPokemonInfo }) {
  const pokemonId = pokemonInfo.id;

  const pokemonNumber = () => {
    if (pokemonId < 9) {
      return "00" + pokemonId;
    }
    if (pokemonId > 9 && pokemonId < 100) {
      return "0" + pokemonId;
    } else {
      return pokemonId;
    }
  };

  const arrowCallback = () => {
    setPokemonInfo(null);
  };
  return (
    <HeaderContainer>
      <ArrowContainer>
        <img alt="arrow" src={arrow} onClick={arrowCallback} />
      </ArrowContainer>
      <HeaderCustom>
        <TextCustom>
          {pokemonInfo.name &&
            pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}
        </TextCustom>
        <TextCustom>#{pokemonNumber()}</TextCustom>
      </HeaderCustom>
    </HeaderContainer>
  );
}
