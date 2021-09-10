import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamsNewForm from './TeamsNewForm'
import TeamsEditForm from './TeamsEditForm'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { Button, Card } from 'semantic-ui-react'

const Teams = (props) => {
  const league_id = props.match.params.league_id
  const [teams, setTeams] = useState([])
  const [showform, setShowform] = useState(false)
  const history = useHistory()

  useEffect(() => {
    getTeams()
  }, [])

  const getTeams = async() => {
    try {
      let res = await axios.get(`/api/leagues/${league_id}/teams`)
      setTeams(res.data)
    }catch(err){
      console.log(err)
    }
  }
  const newTeam = async (team) => {
    console.log(team)
    try{
      let res = await axios.post(`/api/leagues/${league_id}/teams`, team)
      setTeams([team, ...teams])
    }catch(err){
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
      console.log(err)
    }
  }

  const renderTeams = () => {
    return teams.map((t) => {
      console.log(t)
      return (
        <Card style={{margin:'20px'}} key={t.id}> 
          <h1>{t.name}</h1>
          <h3>{t.location}</h3>
          <p>Number of players: {t.num}</p>
          <Button onClick={() => props.history.push(`/leagues/${t.league_id}/teams/${t.id}/players`)}>See Players</Button>
          <Button onClick={() => deleteTeam(t.league_id, t.id)}>Delete</Button>
          <TeamsEditForm updateTeams={updateTeams} {...t}/>
        </Card>
      )
    })
  }

  return (
    <div >
      <h2>Teams</h2>
      <Button onClick={() => history.goBack()}>Back</Button>
      <Button onClick={() => setShowform(!showform)}>{showform ? "Cancel" :"New" }</Button>
      <div className='container'>
      {showform && <TeamsNewForm  newTeam={newTeam}/>}
      </div>
      <div className='container'>
      {renderTeams()}
      </div>
    </div>
  )
}

export default Teams