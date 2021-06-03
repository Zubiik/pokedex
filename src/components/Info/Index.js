import {
  InfoContainerCustom,
  TextContainer,
  TextInfoBox,
  DescriptionText,
  TextEspacement,
  AbilitiesContainer,
  InfoRequestCustom,
} from "./styled";

export default function Info({
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <InfoContainerCustom>
      <TextContainer>
        <TextInfoBox>
          <TextEspacement>Weight</TextEspacement>
          <InfoRequestCustom>{pokemonInfo.weight} kg</InfoRequestCustom>
        </TextInfoBox>
        <TextInfoBox>
          <TextEspacement>Height</TextEspacement>
          <InfoRequestCustom>{pokemonInfo.height} m</InfoRequestCustom>
        </TextInfoBox>
        <TextInfoBox>
          <TextEspacement>Abilities</TextEspacement>
          <AbilitiesContainer>
            <p>
              {pokemonInfo.abilities && pokemonInfo.abilities[0].ability.name}
            </p>
            <p>
              {pokemonInfo.abilities && pokemonInfo.abilities[1].ability.name}
            </p>
          </AbilitiesContainer>
        </TextInfoBox>
        <TextEspacement>Description</TextEspacement>
      </TextContainer>
      <DescriptionText>
        {pokemonDescription.flavor_text_entries &&
          pokemonDescription.flavor_text_entries[0].flavor_text}
      </DescriptionText>
    </InfoContainerCustom>
  );
}
