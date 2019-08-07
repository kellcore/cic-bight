import React from 'react';
import Header from './header';
import Home from './home';
import inventory from './inventory';
import shipments from './shipments';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="photo-bg">
          <Route exact path="/" component={Home} />
          <Route exact path="/inventory" component={inventory} />
          <Route exact path="/shipments" component={shipments} />
        </div>
      </Router>
    </div>
  );
};

export default App;

// stateless components display stuff
// class components fetch data from backend and allow you to manipulate it
// function components have same abilities
// useState
