import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({
  pokemonArray,
  displaySearchPokemon,
  deletePokemon
}) {
  const displayPokemonCard = pokemonArray.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        {...pokemon}
        deletePokemon={deletePokemon}
      />
    );
  });

  const displaySearchPokemonCard = displaySearchPokemon.map((pokemon) => {
    return (
      <PokemonCard
        key={pokemon.id}
        {...pokemon}
        deletePokemon={deletePokemon}
      />
    );
  });

  return (
    <Card.Group itemsPerRow={6}>
      {displaySearchPokemon ? displaySearchPokemonCard : displayPokemonCard}
    </Card.Group>
  );
}

export default PokemonCollection;
