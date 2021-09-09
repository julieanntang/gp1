import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamsNewForm from './TeamsNewForm'
import TeamsEditForm from './TeamsEditForm'

const Teams = (props) => {

  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams()
  }, [])

  //Dummy data for front end testing
  const dummyTeams = [
    {id: 1, name: 'test', location: 'test location', league_id: props.league_id },
    {id: 2, name: 'test2', location: 'test location2', league_id: props.league_id}
  ]

  const getTeams = async() => {
    try {
      let res = await axios.get(`/api/leagues/${props.league_id}/teams`)
      setTeams(res.data)
    }catch(err){
      setTeams(dummyTeams)//setTeams to dummy data for from end testing
      console.log(err)
    }
  }
  const newTeam = async (team) => {
    console.log(team)
    try{
      let res = await axios.post(`/api/leagues/${props.league_id}/teams`, team)
      setTeams([team, ...teams])
    }catch(err){
      setTeams([{id: Math.random(), name: team.name, location: team.location},{name: 'test add', location: 'test add locatoin'}]) //just a front end test to make sure I am grabbing the name and location from the from
      console.log(err)
    }
  }

  const updateTeams = (team) => {
    const updatedTeams = teams.map((t) => t.id === team.id ? team : t)
    setTeams(updatedTeams)
  }
  

  const deleteTeam = async (league_id, id) => {
    try{
      await axios.delete(`/api/leagues/${league_id}/teams/${id}`)
      let filteredTeams = teams.filter((t) => t.id != id)
      setTeams(filteredTeams)
    }catch(err) {
      let filteredTeams = teams.filter((t) => t.id != id)
      setTeams(filteredTeams)  // test for front end
      console.log(err)
    }
  }


  const renderTeams = () => {
    return teams.map((t) => {
      return (
        <div key={t.id}>
          <h1>{t.name}</h1>
          <h3>{t.location}</h3>
          <p>Number of players: {t.num}</p>
          <button onClick={() => deleteTeam(t.league_id, t.id)}>Delete</button>
          <TeamsEditForm updateTeams={updateTeams} {...t}/>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>Teams</h2>
      <TeamsNewForm  newTeam={newTeam}/>
      {renderTeams()}
    </div>
  )
}

export default Teams