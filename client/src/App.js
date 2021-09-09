import './App.css';
import { Switch, Route } from "react-router-dom";
import LeagueForm from './components/LeagueForm';
import Leagues from './components/Leagues';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Leagues} />
        <Route exact path="/leagues/new" component={LeagueForm} />
      </Switch>
    </div>
  );
}

export default App;
