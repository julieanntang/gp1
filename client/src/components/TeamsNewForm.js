import React, { useState } from 'react'

const TeamsNewForm = (props) => {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')

  const handleClick = (e) => {
    e.preventDefault()
    props.newTeam({ name, location })
    setName('')
    setLocation('')
  }

  return (
    <>
      <form onSubmit={handleClick}>
        <p>New team name</p>
        <input value={name} onChange={(e) => {setName(e.target.value)}} />
        <p>New Team Location</p>
        <input value={location} onChange={(e)=> {setLocation(e.target.value)}}/>
        <button type="submit">Add</button>
      </form>
    </>
  )
}

export default TeamsNewForm