import GetPokemon from "../../api/GetPokemon";
import GetPokemonDescription from "../../api/GetPokemonDescription";

export default function Button({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  const buttonCallback = () => {
    if (pokemon === "") {
      alert("wallah écrit le nom d'un pokemon");
    }
    GetPokemon(pokemon).then((responseJson) => {
      setPokemonInfo(responseJson);
    });
    GetPokemonDescription(pokemon).then((responseJson) => {
      setPokemonDescription(responseJson);
    });
  };
  return (
    <div>
      <button onClick={buttonCallback}>search</button>
    </div>
  );
}
