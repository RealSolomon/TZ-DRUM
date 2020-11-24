import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Home, Game } from './pages/'
function App() {

  return (
    <div className="container">
      <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/game" component={Game} exact />
      </div>
    </div>
  );
}

export default App;


