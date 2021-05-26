import getPokemon from "../../api/GetPokemon";

export default function Button({ pokemon }) {
  const buttonCallback = () => {
    if (pokemon === "") {
      alert("wallah écrit le nom d'un pokemon");
    }
    getPokemon(pokemon);
  };
  return (
    <div>
      <button onClick={buttonCallback}>search</button>
    </div>
  );
}
