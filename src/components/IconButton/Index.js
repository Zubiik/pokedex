import getPokemon from "../../api/GetPokemon";

export default function IconButton() {
  const buttonCallback = () => {
    const pokemonId = Math.round(Math.random() * (151 - 1) + 1);
    getPokemon(pokemonId);
  };

  //console.log(buttonCallback());

  return (
    <div>
      <button onClick={buttonCallback}>random</button>
    </div>
  );
}
