import Info from "../../components/Info/Index";
import TypeButton from "../../components/TypeButton/Index";
import Stats from "../../components/Stats/Index";
import Sprite from "../../components/sprites/Index";

export default function Pokedex({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <div>
      <Stats pokemonInfo={pokemonInfo} />
      <Sprite pokemon={pokemon} />
      <Info
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
        pokemonDescription={pokemonDescription}
        setPokemonDescription={setPokemonDescription}
      />
      <TypeButton pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} />
    </div>
  );
}
