import {
  InfoContainerCustom,
  TextContainer,
  TextInfoBox,
  DescriptionText,
  TextLabel,
  AbilitiesContainer,
  InfoRequestCustom,
  HandlerContainer,
  AbilityName,
} from "./styled";

export default function Info({
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <HandlerContainer>
      <InfoContainerCustom>
        <TextContainer>
          <TextInfoBox>
            <TextLabel>Weight</TextLabel>
            <InfoRequestCustom>{pokemonInfo.weight} kg</InfoRequestCustom>
          </TextInfoBox>
          <TextInfoBox>
            <TextLabel>Height</TextLabel>
            <InfoRequestCustom>{pokemonInfo.height} m</InfoRequestCustom>
          </TextInfoBox>
          <TextInfoBox>
            <TextLabel>Abilities</TextLabel>
            <AbilitiesContainer>
              {pokemonInfo.abilities.map((ability, index) => {
                return <AbilityName>{ability.ability.name}</AbilityName>;
              })}
            </AbilitiesContainer>
          </TextInfoBox>
          <TextInfoBox>
            <DescriptionText>
              <TextLabel>Description</TextLabel>
              {pokemonDescription.flavor_text_entries &&
                pokemonDescription.flavor_text_entries.map(
                  (description, index) => {
                    return (
                      index === 0 && (
                        <p key={index}>{description.flavor_text}</p>
                      )
                    );
                  }
                )}
            </DescriptionText>
          </TextInfoBox>
        </TextContainer>
      </InfoContainerCustom>
    </HandlerContainer>
  );
}
