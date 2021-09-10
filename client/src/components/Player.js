import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";
import PlayersForm from "./PlayersForm";


const Player = (props) => {
  const {team_id,id,name,number,position,deletePlayer,editPlayers} = props;
  console.log(props)
  const [showform, setShowform] = useState(false)

  return(
    <Card style={{margin:'20px'}} key={id}>
    <h3>Team: {team_id}</h3>
    <p>{name}</p>
    <p>Player Number {number}</p>
    <p>Player Position {position}</p>
    <p>League Player ID: {id}</p>
    <Button onClick={() => deletePlayer(id)}> delete player</Button>
    <Button onClick={() => setShowform(!showform)}> {showform?"Cancel Edit Player":"Edit Player"}</Button>
    {showform && <PlayersForm
    id = {id}
    team_id = {team_id}
    name = {name}
    number = {number}
    position = {position}
    editPlayers = {editPlayers}
    />}
    </Card>
  )}

export default Player