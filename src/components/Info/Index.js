export default function Info({
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  console.log(pokemonInfo);
  return (
    <div>
      <p>{pokemonInfo.weight}</p>
      <p>{pokemonInfo.height}</p>
      <p>{pokemonInfo.abilities && pokemonInfo.abilities[0].ability.name}</p>
      <p>{pokemonInfo.abilities && pokemonInfo.abilities[1].ability.name}</p>
      <p>
        {pokemonDescription.flavor_text_entries &&
          pokemonDescription.flavor_text_entries[0].flavor_text}
      </p>
    </div>
  );
}
