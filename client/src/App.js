import React from 'react'
import logo from './logo.svg';
import './App.css';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
      <Teams league_id={1} />
    </div>
  );
}

export default App;
