import React from "react";
import { useHistory } from "react-router";


const League = ({id, name, description, country, deleteLeague}) => {

  const history = useHistory();

  return (
    <div>
      <h1>{name}</h1>
      <h2>{country}</h2>
      <p>{description}</p>
      <button onClick={() => history.push(`/leagues/${id}/teams`)}>View Teams</button>
      <button onClick={() => history.push(`/leagues/${id}/edit`)}>Update</button>
      <button onClick={() => deleteLeague(id)}>Delete</button>
    </div>
  );
};

export default League;