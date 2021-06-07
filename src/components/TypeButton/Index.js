import GetPokemon from "../../api/GetPokemon";
export default function Button({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  GetPokemon(pokemon).then((responseJson) => {
    //setPokemonInfo(responseJson);
  });
  return (
    <div>
      {
        //pokemonInfo.types.map((types, index) => {
        //return <p key={index}>{types.type}hey</p>;
      }
    </div>
  );
}
