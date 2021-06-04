import {
  InfoContainerCustom,
  TextContainer,
  TextInfoBox,
  DescriptionText,
  TextLabel,
  AbilitiesContainer,
  InfoRequestCustom,
  HandlerContainer,
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
                return <p>{ability.ability.name}</p>;
              })}
            </AbilitiesContainer>
          </TextInfoBox>
          <TextInfoBox>
            <DescriptionText>
              <TextLabel>Description</TextLabel>
              {pokemonDescription.flavor_text_entries.map(
                (description, index) => {
                  return (
                    <p>
                      {description.flavor_text === [0]
                        ? description.flavor_text
                        : null}
                    </p>
                  );
                }
              )}
              {pokemonDescription.flavor_text_entries &&
                pokemonDescription.flavor_text_entries[0].flavor_text}
            </DescriptionText>
          </TextInfoBox>
        </TextContainer>
      </InfoContainerCustom>
    </HandlerContainer>
  );
}
