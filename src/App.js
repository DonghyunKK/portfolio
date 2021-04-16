import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
