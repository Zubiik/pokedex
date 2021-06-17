import GetEvolution from "../../api/GetEvolution";

export default function Evolution({
  pokemonInfo,
  setPokemonInfo,
  pokemonEvolution,
  setPokemonEvolution,
}) {
  GetEvolution(pokemonInfo).then((responseJson) => {
    console.log(responseJson.chain.evolves_to[0].species.url);
  });

  return <div></div>;
}
