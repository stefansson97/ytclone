import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Screen from './components/screen/screen.component';
import Results from './components/results/results.component';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Screen} />
          <Route path="/results=:searchQuery" component={Results} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
