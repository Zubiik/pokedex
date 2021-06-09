export default function Stats({ pokemonInfo }) {
  return (
    <div>
      {pokemonInfo.stats.map((stat, index) => {
        const division = stat.base_stat / 10;
        const statResult = Math.round(division);
        var toto = [];
        for (let i = 0; i < statResult; i++) {
          toto.push(<div>{i}</div>);
        }
        return toto.map((item) => item);
      })}
    </div>
  );
}
