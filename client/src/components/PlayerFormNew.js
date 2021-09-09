import React, {useState} from "react";

const PlayersFormNew  = (props) => {
  const[name, setName] = useState("");
  const[number, setNumber] = useState("");
  const[position, setPosition] = useState("");

  const handleSubmit =(e) =>{
    props.addPlayers({number,position,name})
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
    <button>Add New Player</button>
    </form>
    </div>
  )
}

export default PlayersFormNew