import Info from "../../components/Info/Index";
import TypeButton from "../../components/TypeButton/Index";
export default function Pokedex({
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <div>
      <Info
        pokemonInfo={pokemonInfo}
        setPokemonInfo={setPokemonInfo}
        pokemonDescription={pokemonDescription}
        setPokemonDescription={setPokemonDescription}
      />
      <TypeButton />
    </div>
  );
}
