import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import PlayersForm from "./PlayersForm";
import Player from "./Player";
import { useHistory } from "react-router";
import { Button } from "semantic-ui-react";

const Players  = (props) => {
  const history = useHistory()
  const [players, setPlayers] = useState([]);
  const [showform,setShowform]= useState(false)
  const [team, setTeam] = useState('')
  const league_id = props.match.params.league_id;
  const team_id = props.match.params.team_id

  useEffect(() =>{
    getPlayers();
  }, []);

  const getPlayers = async () =>{
    try {
      let res = await axios.get(`/api/leagues/${league_id}/teams/${team_id}/players`);
      setPlayers(res.data.player);
      setTeam(res.data.team)
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
      <h1>{team.name}</h1>
      <Button onClick={() => history.goBack()}>Back</Button><br></br>
      <Button onClick={() => setShowform(!showform)}> {showform?"Cancel Add Player":"Add Player"}</Button>
      <div className='container'>
    {showform && <PlayersForm
      addPlayers={addPlayers}
      />}
      </div>
      <div className='container'>
      {renderPlayers()}
      </div>
    </div>
  )

};

export default Players