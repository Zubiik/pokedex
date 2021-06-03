import Info from "../../components/Info/Index";

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
    </div>
  );
}
