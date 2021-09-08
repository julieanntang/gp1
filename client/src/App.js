import "./App.css";
import { Route, Switch } from "react-router";
import Players from "./components/Players";
import PlayersFormEdit from "./components/PlayersFormEdit";
import PlayersFormNew from "./components/PlayerFormNew";
import Player from "./components/Player";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Players} />
        <Route exact path="/players" component={Players} />
        <Route exact path="/players/new" component={PlayersFormNew} />
        <Route exact path="/players/:id" component={Player} />
        <Route exact path="/players/:id/edit" component={PlayersFormEdit} />
      </Switch>
    </>
  );
}

export default App;