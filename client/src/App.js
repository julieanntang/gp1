import './App.css';
import { Switch, Route } from "react-router-dom";
import LeagueForm from './components/LeagueForm';
import Leagues from './components/Leagues';
import EditLeague from './components/EditLeague';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Leagues} />
        <Route exact path="/leagues/new" component={LeagueForm} />
        <Route exact path="/leagues/:id/edit" component={EditLeague} />
      </Switch>
    </div>
  );
}

export default App;
