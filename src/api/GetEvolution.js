export default async function GetEvolution(pokemonInfo) {
  let url = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonInfo.id + "/";

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
    .then((responseJson) => {
      var evolve = responseJson.evolution_chain;
    })
    .then(async (evolve) => {
      let url = evolve;
      let request = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      };
      return await fetch(url, request).then((response) => {
        return response.json();
      });
    })
    .catch((error) => console.log(error));
}
