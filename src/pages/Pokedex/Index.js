import Info from "../../components/Info/Index";
import TypeButton from "../../components/TypeButton/Index";
import Stats from "../../components/Stats/Index";

export default function Pokedex({
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <div>
      <Stats pokemonInfo={pokemonInfo} />
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
