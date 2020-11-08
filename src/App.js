import React from 'react';
import {History} from './History/History.js';
import './App.css';
import {NavBar} from './Nav.js';
import {Intro, Descriptions} from './Home.js';

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Descriptions/>
      <History/>
    </div>
  );
}

export default App;