export default function Button({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <div>
      {pokemonInfo.types.map((type, index) => {
        console.log(type.type.name);
        console.log(pokemonInfo);
        return (
          <p key={index}>
            hey
            {type.type.name}
          </p>
        );
      })}
    </div>
  );
}
