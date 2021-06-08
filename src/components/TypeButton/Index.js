import {
  ButtonCustom,
  TextCustom,
  TypeContainer,
  ButtonContainer,
} from "./styled.js";
export default function TypeButton({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <TypeContainer>
      {pokemonInfo.types.map((type, index) => {
        return (
          <ButtonContainer>
            <ButtonCustom type={type.type.name} key={index}>
              <TextCustom>{type.type.name}</TextCustom>
            </ButtonCustom>
          </ButtonContainer>
        );
      })}
    </TypeContainer>
  );
}
