export default async function getPokemon(pokemon) {
  let url = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

  let request = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  await fetch(url, request)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson;
    })
    .catch((error) => console.log(error));
}
