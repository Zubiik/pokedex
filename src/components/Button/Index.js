import getPokemon from "../../api/GetPokemon";

export default function Button({ pokemon, pokemonInfo, setPokemonInfo }) {
  const buttonCallback = () => {
    if (pokemon === "") {
      alert("wallah écrit le nom d'un pokemon");
    }
    getPokemon(pokemon).then((responseJson) => {
      setPokemonInfo(responseJson);
    });
  };
  return (
    <div>
      <button onClick={buttonCallback}>search</button>
    </div>
  );
}
