import React, { useEffect, useState } from "react";
import axios from "axios";
import League from "./League";


const Leagues = (props) => {

  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    getLeagues();
  }, []);

  const getLeagues = async () => {
    try {
      let res = await axios.get("/api/leagues");
      setLeagues(res.data);
      console.log(res.data);
    } catch (error) {
      alert("error retrieving leagues")
      console.log(error);
    };
  };

  const renderLeagues = () => {
    return leagues.map((l) => <League deleteLeague={deleteLeague} key={l.id} {...l} />);
  };

  const deleteLeague = async (id) => {
    try {
      let res = await axios.delete(`/api/leagues/${id}`);
      let filterLeagues = leagues.filter((l) => l.id !== id);
      setLeagues(filterLeagues);
    } catch (error) {
      alert(error);
      console.log("error");
    }
  }


  return (
    <div>
      <h1>Leagues</h1>
      <button onClick={() => props.history.push("/leagues/new")}>Add New League</button>
      {renderLeagues()}
    </div>
  );
};

export default Leagues;