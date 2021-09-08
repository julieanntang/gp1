import React, { useEffect, useState } from "react";
import axios from "axios"

const Players  = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() =>{
    getPlayers();
  }, []);

  const getPlayers = async () =>{
    try {
      let res = await axios.get("/api/players");
      console.log(res.data)
      setPlayers(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const renderPlayers = () => {
    return players.map((p)=> {
      return(
        <div style={{margin:"10px", padding: "10px", backgroundColor: "lightblue"}}>
        <h3>Team: {p.team_id}</h3>
        <p>{p.name}</p>
        <p>Player Number {p.number}</p>
        <p>Player Position {p.position}</p>
        <p>League Player ID: {p.id}</p>
        </div>
      )
    });
  };
  const deletePlayer = async (id) => {
    try {
      let res = await axios.delete(`/api/players/${id}`);
      setPlayers(players.filter((player) => player.id !==id));
    } catch (error) {
    console.log(error)  
    };
  };
  
  return (
    <div>
      <h1>Players Page</h1>
      {renderPlayers()}
    </div>
  )

};



export default Players