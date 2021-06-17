import { HeaderCustom, TextCustom } from "./styled";
export default function HeaderTitle({ pokemonInfo }) {
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

  return (
    <HeaderCustom>
      <TextCustom>{pokemonInfo.name}</TextCustom>
      <TextCustom>#{pokemonNumber()}</TextCustom>
    </HeaderCustom>
  );
}
