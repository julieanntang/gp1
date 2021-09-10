import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";

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
    <div className='container'>
    <Card>
      <h2>Add New League</h2>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Description:</p>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
        <p>Country:</p>
        <input value={country} onChange={(e) => setCountry(e.target.value)} /><br />
        <Button type="submit">Add</Button>
      </form>
      <Button onClick={() => props.history.goBack()}>go back</Button>
    </Card>
    </div>
  );
};

export default LeagueForm;