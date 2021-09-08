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
    return leagues.map((l) => <League key={l.id} {...l} />);
  };


  return (
    <div>
      <h1>Leagues</h1>
      {renderLeagues()}
    </div>
  );
};

export default Leagues;