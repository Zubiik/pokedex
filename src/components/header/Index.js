export default function HeaderTitle({ pokemonInfo }) {
  return (
    <div>
      <p>{pokemonInfo.name}</p>
      <p>#{pokemonInfo.id}</p>
    </div>
  );
}
