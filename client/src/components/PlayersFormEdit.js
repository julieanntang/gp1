import React, { useState } from "react";

const PlayersFormEdit  = (props) => {
  console.log(props)
  const[name, setName] = useState(props.location.props.name);
  const[number, setNumber] = useState(props.location.props.number);
  const[position, setPosition] = useState(props.location.props.position);
  
  const handleSubmit =(e) =>{
    props.updatePlayers({number,position,name})
    console.log(e)
  }

  return(
    <div>
    <h1>New Player Form</h1>
    <form onSubmit={handleSubmit}>
    <p>Player Name</p>
    <input value={name}
    onChange = {(e) => {
      setName(e.target.value)}}
    />
    <p>Player Position</p>
    <input value={position}
    onChange = {(e) => {
      setPosition(e.target.value)}}
    />
    <p>Player Number</p>
    <input value={number}
    onChange = {(e) => {
      setNumber(e.target.value)}}
    />
    <button>Edit Player</button>
    </form>
    </div>
  )
}

export default PlayersFormEdit