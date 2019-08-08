import React from 'react';
import Header from './Header';
import Home from './Home';
import Inventory from './Inventory';
import Shipments from './Shipments';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="photo-bg">
          <Route exact path="/" component={Home} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/shipments" component={Shipments} />
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
