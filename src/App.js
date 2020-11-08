import React from 'react';
import './App.css';
import {NavBar} from './Nav.js';
import {Intro, Descriptions} from './Home.js';

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Descriptions/>
    </div>
  );
}

export default App;