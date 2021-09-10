import React, { useState } from "react";
import PlayersForm from "./PlayersForm";


const Player = (props) => {
  const {team_id,id,name,number,position,deletePlayer,editPlayers} = props;
  console.log(props)
  const [showform, setShowform] = useState(false)

  return(
    <div style={{margin:"10px", padding: "10px", backgroundColor: "lightblue"}} key={id}>
    <h3>Team: {team_id}</h3>
    <p>{name}</p>
    <p>Player Number {number}</p>
    <p>Player Position {position}</p>
    <p>League Player ID: {id}</p>
    <button onClick={() => deletePlayer(id)}> delete player</button>
    <button onClick={() => setShowform(!showform)}> {showform?"Cancel Edit Player":"Edit Player"}</button>
    {showform && <PlayersForm
    id = {id}
    team_id = {team_id}
    name = {name}
    number = {number}
    position = {position}
    editPlayers = {editPlayers}
    />}
    </div>
  )}

export default Player