import Info from "../../components/Info/Index";
import Stats from "../../components/Stats/Index";
import Sprite from "../../components/sprites/Index";
import { PokedexCustom } from "./styled";
import Header from "../../components/header/Index";
export default function Pokedex({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <div>
      <Header pokemonInfo={pokemonInfo} />
      <PokedexCustom>
        <Stats pokemonInfo={pokemonInfo} />
        <Sprite
          pokemon={pokemon}
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
        />
        <Info
          pokemonInfo={pokemonInfo}
          setPokemonInfo={setPokemonInfo}
          pokemonDescription={pokemonDescription}
          setPokemonDescription={setPokemonDescription}
        />
      </PokedexCustom>
    </div>
  );
}
