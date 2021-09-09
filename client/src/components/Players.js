import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import PlayersFormNew from "./PlayerFormNew";

const Players  = (props) => {
  const [players, setPlayers] = useState([]);

  useEffect(() =>{
    getPlayers();
  }, []);

  const getPlayers = async () =>{
    try {
      let res = await axios.get("/api/players");
      console.log(res.data);
      setPlayers(res.data);
    } catch (error) {
      console.log(error);
    };
  };

  const addPlayers = async (player) =>{
    try {
      let res = await axios.post("/api/players", player)
      setPlayers([res.data,...players])
    } catch (error) {
      console.log(error)
    }
  }

  const editPlayers = async (player) =>{
    try {
      let res = await axios.put(`/api/players/${player.id}`, player);
      let newPlayers = players.map((p)=> (p.id === player.id) ? player : p);
      setPlayers(newPlayers)
    } catch (error) {
      
    }
  }

  const deletePlayer = async (id) => {
    try {
      let res = await axios.delete(`/api/players/${id}`);
      setPlayers(players.filter((p) => p.id !==id));
    } catch (error) {
    console.log(error)  
    };
  };

  const renderPlayers = () => {
    return players.map((p)=> {
      return(
        <div style={{margin:"10px", padding: "10px", backgroundColor: "lightblue"}} key={p.id}>
        <h3>Team: {p.team_id}</h3>
        <p>{p.name}</p>
        <p>Player Number {p.number}</p>
        <p>Player Position {p.position}</p>
        <p>League Player ID: {p.id}</p>
        <Link to={{pathname: `/players/${p.id}`,
          props:p}}>
          <button>show</button>  
        </Link>
        <button onClick={() => deletePlayer(p.id)}> delete player</button>
        <Link to={{pathname:`/players/${p.id}/edit`,
        props:p,editPlayers}}>
          <button>edit</button>  
        </Link>
        </div>
      )
    });
  };

  return (
    <div>

      <PlayersFormNew
      addPlayers={addPlayers}/>
      <h1>Players Page</h1>
      {renderPlayers()}
    </div>
  )

};

export default Players