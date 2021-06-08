import { ButtonCustom, TextCustom } from "./styled.js";

export default function Button({
  pokemon,
  pokemonInfo,
  setPokemonInfo,
  pokemonDescription,
  setPokemonDescription,
}) {
  return (
    <div>
      {pokemonInfo.types.map((type, index) => {
        return (
          <div>
            <ButtonCustom type={type.type.name} key={index}>
              <TextCustom>{type.type.name}</TextCustom>
            </ButtonCustom>
          </div>
        );
      })}
    </div>
  );
}
