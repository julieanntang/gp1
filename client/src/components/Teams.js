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
    {id: 1, name: 'test', location: 'test location'},
    {id: 2, name: 'test2', location: 'test location2'}
  ]

  const getTeams = async() => {
    try {
      let res = await axios.get(`/api/leagues/${props.match.params.league_id}/teams`)
      setTeams(res.data)
    }catch(err){
      setTeams(dummyTeams)//setTeams to dummy data for from end testing
      console.log(err)
    }
  }
  const newTeam = async (team) => {
    try{
      let res = await axios.post(`/api/leagues/${props.match.params.league_id}/teams`, team)
      setTeams(res.data)
    }catch(err){
      setTeams([{id: Math.random(), name: team.name, location: team.location},{name: 'test add', location: 'test add locatoin'}]) //just a front end test to make sure I am grabbing the name and location from the from
      console.log(err)
    }
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
          <TeamsEditForm setTeams={setTeams}/>
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