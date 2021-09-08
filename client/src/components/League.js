import React from "react";


const League = ({id, name, description, country}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{country}</h2>
      <p>{description}</p>
    </div>
  );
};

export default League;