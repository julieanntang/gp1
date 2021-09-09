import axios from "axios";
import React, { useState, useEffect } from "react";

const EditLeague = (props) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    getLeague();

  }, []);

  const getLeague = async () => {
    try {
    let res = await axios.get(`/api/leagues/${props.match.params.id}`)
    setName(res.data.name)
    setDescription(res.data.description)
    setCountry(res.data.country)
    } catch (error) {
      alert(error)
      console.log("error")
    };
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("obj:", { name, description, country });
    try {
    let res = await axios.put(`/api/leagues/${props.match.params.id}`, { name, description, country });
    props.history.push("/");
    } catch (error) {
      alert("error");
      console.log("error");
    };
  };

  return (
    <div>
      <h2>Update League</h2>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input defaultValue={name} onChange={(e) => setName(e.target.value)} />
        <p>Description:</p>
        <input defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
        <p>Country:</p>
        <input defaultValue={country} onChange={(e) => setCountry(e.target.value)} /><br />
        <button type="submit">Update</button>
      </form>
      <button onClick={() => props.history.goBack()}>go back</button>
    </div>
  );
};

export default EditLeague;