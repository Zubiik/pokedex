import getPokemon from "../../api/GetPokemon";

export default function Button({ pokemon }) {
  const buttonCallback = () => {
    getPokemon(pokemon);
  };
  return (
    <div>
      <button onClick={buttonCallback}>search</button>
    </div>
  );
}
