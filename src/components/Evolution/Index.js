import GetEvolution from "../../api/GetEvolution";

export default function Evolution({
  pokemonInfo,
  setPokemonInfo,
  pokemonEvolution,
  setPokemonEvolution,
}) {
  GetEvolution(pokemonInfo).then((responseJson) => {
    console.log(responseJson.evolution_chain);
  });
  return <div></div>;
}
