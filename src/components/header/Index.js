import { HeaderCustom, TextCustom } from "./styled";
export default function HeaderTitle({ pokemonInfo }) {
  return (
    <HeaderCustom>
      <TextCustom>{pokemonInfo.name}</TextCustom>
      <TextCustom>#{pokemonInfo.id}</TextCustom>
    </HeaderCustom>
  );
}
