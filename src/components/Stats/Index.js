import {
  StatsContainer,
  EmptyStat,
  LonelyStat,
  Item,
  TextContainer,
  ArrayContainer,
  TextCustom,
} from "./styled";

export default function Stats({ pokemonInfo }) {
  const pokemonStats = (stat) => {
    const division = stat.base_stat / 10;
    const statResult = Math.round(division);
    var statArray = [];
    for (let i = 0; i < 15; i++) {
      if (i < 15 - statResult) {
        statArray.push(<EmptyStat />);
      } else {
        statArray.push(<LonelyStat />);
      }
    }

    return <Item>{statArray}</Item>;
  };
  return (
    <ArrayContainer>
      <TextContainer>
        <TextCustom>HP</TextCustom>
        <TextCustom>Attack</TextCustom>
        <TextCustom>Defense</TextCustom>
        <TextCustom>Spe A</TextCustom>
        <TextCustom>Spe D</TextCustom>
        <TextCustom>Speed</TextCustom>
      </TextContainer>
      <StatsContainer>
        {pokemonInfo.stats.map((stat, index) => {
          return pokemonStats(stat);
        })}
      </StatsContainer>
    </ArrayContainer>
  );
}
