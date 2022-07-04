import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, sprites, deletePokemon }) {
  const [frontBack, setFrontBack] = useState(true);

  function handleFrontBackClick() {
    setFrontBack((prev) => !prev);
  }

  const showFront = (
    <img alt="oh no!" src={sprites.front} onClick={handleFrontBackClick} />
  );

  const showBack = (
    <img alt="oh no!" src={sprites.back} onClick={handleFrontBackClick} />
  );

  function handleDelete(e) {
    deletePokemon(e.target.id);
  }

  return (
    <Card>
      <div>
        <div className="image"></div>
        {frontBack ? showFront : showBack}
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
        <button onClick={handleDelete} id={id}>
          x
        </button>
      </div>
    </Card>
  );
}

export default PokemonCard;
