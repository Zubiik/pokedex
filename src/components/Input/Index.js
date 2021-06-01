import { InputContainerCustom, InputCustom, TextCustom } from "./styled.js";
export default function Input({ pokemon, setPokemon, inputCallback }) {
  return (
    <InputContainerCustom>
      <TextCustom>POKEMON NAME OR ID</TextCustom>
      <InputCustom
        name={pokemon}
        onChange={(event) => {
          inputCallback(event, setPokemon);
        }}
      ></InputCustom>
    </InputContainerCustom>
  );
}
