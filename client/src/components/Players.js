import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import PlayersForm from "./PlayersForm";
import Player from "./Player";

const Players  = (props) => {
  const [players, setPlayers] = useState([]);
  const [showform,setShowform]= useState(true)
  const league_id = 1; //Hard coded for now, needs to be passed down later
  const team_id = 2;

  useEffect(() =>{
    getPlayers();
  }, []);

  const getPlayers = async () =>{
    try {
      let res = await axios.get(`/api/leagues/${league_id}/teams/${team_id}/players`);
      setPlayers(res.data.player);
      console.log(res.data.player)
      console.log(res.data)
    } catch (error) {
      console.log(error);
    };
  };

  const addPlayers = async (player) =>{
    try {
      let res = await axios.post( `/api/leagues/${league_id}/teams/${team_id}/players`, player)
      setPlayers([res.data.player, ... players])
    } catch (error) {
      console.log(error)
    }
  }

  const editPlayers = async (player) =>{
    console.log(players)
    try {
      let res = await axios.put(`/api/leagues/${league_id}/teams/${team_id}/players/${player.id}`, player)
      let newPlayers = players.map((p)=> (p.id === player.id) ? player : p);
      setPlayers(newPlayers)
    } catch (error) {
      
    }
  }

  const deletePlayer = async (id) => {
    try {
      let res = await axios.delete(`/api/leagues/${league_id}/teams/${team_id}/players/${id}`);
      setPlayers(players.filter((p) => p.id !==id));
    } catch (error) {
    console.log(error)  
    };
  };

  const renderPlayers = () => {
    return players.map((players) => (
      <div>
      <Player
      deletePlayer={deletePlayer}
      editPlayers={editPlayers}
      {... players}/>
      </div>
    ));
  };

  return (
    <div>
      <h1>Players</h1>
      <button onClick={() => setShowform(!showform)}> {showform?"Cancel Add Player":"Add Player"}</button>
    {showform && <PlayersForm
      addPlayers={addPlayers}
      />}
      {renderPlayers()}
    </div>
  )

};

export default Players