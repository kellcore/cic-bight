import React from 'react';
import Header from './header';
import Home from './home';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="photo-bg">
        <Home />
      </div>
    </div>
  );
}

export default App;

// stateless components display stuff
// class components fetch data from backend and allow you to manipulate it
// function components have same abilities
// useState
