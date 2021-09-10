import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Switch, Route } from "react-router-dom";
import LeagueForm from './components/LeagueForm';
import Leagues from './components/Leagues';
import EditLeague from './components/EditLeague';
import Players from "./components/Players";
import PlayersForm from "./components/PlayersForm";
import Player from "./components/Player";
import Teams from './components/Teams';
import NavBar from './components/NavBar';
import Home from './components/Home';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/leagues" component={Leagues} />
        <Route exact path="/leagues/new" component={LeagueForm} />
        <Route exact path="/leagues/:id/edit" component={EditLeague} />
        <Route exact path="/leagues/:league_id/teams/" component={Teams} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players" component={Players} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players/new" component={PlayersForm} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players/:id" component={Player} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players/:id/edit" component={PlayersForm} />
      </Switch>
    </div>
  );
}

export default App;