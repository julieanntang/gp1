import axios from "axios";
import React, { useState } from "react";

const LeagueForm = (props) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("obj:", { name, description, country });
    try {
    let res = await axios.post("/api/leagues", { name, description, country });
    props.history.push("/");
    } catch (error) {
      alert("error");
      console.log("error");
    };
  };

  return (
    <div>
      <h2>Add New League</h2>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Description:</p>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <p>Country:</p>
        <input value={country} onChange={(e) => setCountry(e.target.value)} /><br />
        <button type="submit">Add</button>
      </form>
      <button onClick={() => props.history.goBack()}>go back</button>
    </div>
  );
};

export default LeagueForm;