export default async function GetPokemonDescription(pokemon) {
  let url = "https://pokeapi.co/api/v2/pokemon-species/" + pokemon;

  let request = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  return await fetch(url, request)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
}
