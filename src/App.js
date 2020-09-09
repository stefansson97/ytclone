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
import Watch from './components/watch/watch.component';
import { NavbarProvider } from './store/NavbarContext';

function App() {

  return (
    <Router>
      <div className="App">
        <NavbarProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Screen} />
          <Route path="/results" component={Results} />
          <Route path="/watch" component={Watch} />
        </Switch>
        </NavbarProvider>
      </div>
    </Router>

  );
}

export default App;
