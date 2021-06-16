import Info from "../../components/Info/Index";
import Stats from "../../components/Stats/Index";
import Sprite from "../../components/sprites/Index";
import { PokedexCustom } from "./styled";
import Evolution from "../../components/Evolution/Index";
export default function Pokedex({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
  pokemonEvolution,
  setPokemonEvolution,
}) {
  return (
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
      <Evolution
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
        pokemonEvolution={pokemonEvolution}
        setpokemonEvolution={setPokemonEvolution}
      />
    </PokedexCustom>
  );
}
