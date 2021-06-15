import {
  StatsContainer,
  EmptyStat,
  LonelyStat,
  Item,
  TextToHide,
  TextContainer,
  ArrayContainer,
  TextCustom,
} from "./styled";

export default function Stats({ pokemonInfo }) {
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
          const division = stat.base_stat / 10;
          const statResult = Math.round(division);
          var toto = [];
          for (let i = 0; i < 15; i++) {
            if (i < statResult) {
              toto.push(<LonelyStat />);
            } else {
              toto.push(<EmptyStat />);
            }
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
    </ArrayContainer>
  );
}
