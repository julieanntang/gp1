import React, { useState } from "react";


const Player = (props) => {
  const {team_id,id,name,number,position,deletePlayer} = props.location.props;
  console.log(props)

  return(
    <div style={{margin:"10px", padding: "10px", backgroundColor: "lightblue"}} key={id}>
    <h3>Team: {team_id}</h3>
    <p>{name}</p>
    <p>Player Number {number}</p>
    <p>Player Position {position}</p>
    <p>League Player ID: {id}</p>
    <button onClick={() => deletePlayer(id)}> delete player</button>
    </div>
  )}

export default Player