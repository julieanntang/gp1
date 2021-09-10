import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";

const PlayersForm  = (props) => {
  const[name, setName] = useState(props.name ? props.name : "");
  const[number, setNumber] = useState(props.number ? props.number : "");
  const[position, setPosition] = useState(props.position ? props.position: "");
  const[team_id, setTeam_id] = useState(props.team_id ? props.team_id: "");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (props.id) {
        props.editPlayers({id: props.id, name,position,number,team_id})
      }else{
      try {
        console.log(props)
        props.addPlayers({name,position,number})
      } catch (error) {
        console.log(error)
      }
    }
  }

  return(
    <Card>
    <h1>{props.name ? "Edit Player":"New Player"}</h1>
    <form onSubmit={handleSubmit}>
    <p>Player Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <p>Player Number</p>
    <input value={number}
    onChange = {(e) => {
      setNumber(e.target.value)}}
    />
    <p>Player Position</p>
    <input value={position}
    onChange = {(e) => {
      setPosition(e.target.value)}}
    />
    <p>Player Team</p>
    <input value={team_id}
    onChange = {(e) => {
      setTeam_id(e.target.value)}}
    /><br/><br/>
    <Button>Edit Player</Button>
    </form>
    </Card>
  )
}

export default PlayersForm