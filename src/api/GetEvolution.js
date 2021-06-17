export default function GetEvolution(pokemonInfo) {
  let url = "https://pokeapi.co/api/v2/pokemon-species/" + pokemonInfo.id + "/";

  let request = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  };

  return fetch(url, request)
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson.evolution_chain.url;
    })
    .then((evolutionChainURL) => {
      let url = evolutionChainURL;
      let request = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      };
      return fetch(url, request).then((response) => {
        return response.json();
      });
    })
    .catch((error) => console.log(error));
}
