import "./App.css";
import { Route, Switch } from "react-router";
import Players from "./components/Players";
import PlayersForm from "./components/PlayersForm";
import Player from "./components/Player";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/leagues/:league_id/teams/:team_id/players" component={Players} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players" component={Players} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players/new" component={PlayersForm} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players/:id" component={Player} />
        <Route exact path="/leagues/:league_id/teams/:team_id/players/:id/edit" component={PlayersForm} />
      </Switch>
    </>
  );
}

export default App;