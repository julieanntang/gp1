import React from "react";
import { useHistory } from "react-router";
import { Button, Card } from "semantic-ui-react";


const League = ({id, name, description, country, deleteLeague}) => {

  const history = useHistory();

  return (
    <Card style={{margin:'20px'}}>
      <h1>{name}</h1>
      <h2>{country}</h2>
      <p>{description}</p>
      <Button onClick={() => history.push(`/leagues/${id}/teams`)}>View Teams</Button>
      <Button onClick={() => history.push(`/leagues/${id}/edit`)}>Update</Button>
      <Button onClick={() => deleteLeague(id)}>Delete</Button>
    </Card>
  );
};

export default League;