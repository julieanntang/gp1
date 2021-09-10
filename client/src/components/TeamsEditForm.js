
import axios from 'axios'
import React, { useState } from 'react'

const TeamsEditForm = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [num, setNum] = useState('')

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      let res = await axios.put(`/api/leagues/${props.league_id}/teams/${props.id}`, { name, location, num })
      // console.log(res.data)
      props.updateTeams(res.data)
    }catch(err){
      // props.updateTeams([{id: props.id, name: name, location: location, num: num}]) //just a front end test to make sure I am grabbing the name and location from the from
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <p>Edit team name</p>
        <input value={name} onChange={(e) => {setName(e.target.value)}} />
        <p>Edit Team Location</p>
        <input value={location} onChange={(e)=> {setLocation(e.target.value)}} />
        <p>Edit Number of players</p>
        <input value={num} onChange={(e) => {setNum(e.target.value)}} />
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default TeamsEditForm

