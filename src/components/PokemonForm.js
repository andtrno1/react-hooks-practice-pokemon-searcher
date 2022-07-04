import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  // hp: 60
  // id: 102
  // name: "exeggcute"
  // sprites:
  //     back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  // front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  const [hp, setHp] = useState("");
  const [name, setName] = useState("");
  const [sprites, setSprites] = useState({ back: "", front: "" });

  function handleHp(e) {
    setHp(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleBack(e) {
    setSprites({ ...sprites, back: e.target.value });
  }

  function handleFront(e) {
    setSprites({ ...sprites, front: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const newPokemonObj = { hp, name, sprites };
    addPokemon(newPokemonObj);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          console.log("submitting form...");
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleName}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleHp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFront}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBack}
          />
        </Form.Group>
        <Form.Button onClick={onSubmit}>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
