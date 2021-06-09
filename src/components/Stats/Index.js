import { StatsContainer, LonelyStat, Item, TextToHide } from "./styled";

export default function Stats({ pokemonInfo }) {
  return (
    <StatsContainer>
      {pokemonInfo.stats.map((stat, index) => {
        const division = stat.base_stat / 10;
        const statResult = Math.round(division);
        var toto = [];
        var fifteen = 15;
        for (let i = 0; i < statResult; i++) {
          toto.push(<LonelyStat>{i}</LonelyStat>);
          for (let i = 0; i < fifteen; i++);
        }
        return (
          <Item>
            {toto.map((item) => (
              <TextToHide>{item}</TextToHide>
            ))}
          </Item>
        );
      })}
    </StatsContainer>
  );
}
