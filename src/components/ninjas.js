import React from "react";

function Ninja({ name, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image}></img>
    </div>
  );
}

export default Ninja;
