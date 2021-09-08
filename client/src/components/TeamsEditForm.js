
import axios from 'axios'
import React, { useState } from 'react'

const TeamsEditForm = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      let res = await axios.put(`/api/leagues/${props.match.params.league_id}/teams/${props.match.params.id}`, { name, location})
      props.setTeams(res.data)
    }catch(err){
      props.setTeams([{name: name, location: location},{name: 'test add', location: 'test add locatoin'}]) //just a front end test to make sure I am grabbing the name and location from the from
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <p>Edit team name</p>
        <input value={name} onChange={(e) => {setName(e.target.value)}} />
        <p>Edit Team Location</p>
        <input value={location} onChange={(e)=> {setLocation(e.target.value)}}/>
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default TeamsEditForm

