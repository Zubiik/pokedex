import { ImageCustom, ContainerCustom } from "./styled";
import TypeButton from "../../components/TypeButton/Index";
export default function Sprites({
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <ContainerCustom>
      <ImageCustom
        alt="pokemon fanArt"
        src={
          pokemonInfo &&
          pokemonInfo.sprites.other["official-artwork"].front_default
        }
      />
      <TypeButton pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} />
    </ContainerCustom>
  );
}
