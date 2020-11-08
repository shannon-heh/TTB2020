import React from 'react';
import {History} from './History/History.js';
import './App.css';
import {NavBar} from './Nav.js';
import {Intro, Descriptions} from './Home.js';
import Prevention from './Prevention';
import {Prediction} from './Prediction';

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Descriptions/>
      <History/>
      <Prediction/>
      <Prevention />
    </div>
  )
}

export default App;