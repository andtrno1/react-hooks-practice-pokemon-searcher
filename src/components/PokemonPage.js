import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [add, setAddPokemon] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemonArray(data));
  }, [add]);

  function searchPokemon(poke) {
    setSearchValue(poke);
  }

  const displaySearchPokemon = pokemonArray.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addPokemon(newPokemonObj) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemonObj)
    });
    setAddPokemon(!add);
  }

  function deletePokemon(id) {
    fetch(`http://localhost:3001/pokemon/${id}`, {
      method: "DELETE"
    });
    setAddPokemon(!add);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search searchPokemon={searchPokemon} />
      <br />
      <PokemonCollection
        pokemonArray={pokemonArray}
        displaySearchPokemon={displaySearchPokemon}
        deletePokemon={deletePokemon}
      />
    </Container>
  );
}

export default PokemonPage;
