import React from 'react';
import {History} from './History/History.js';
import './App.css';
import {NavBar} from './Nav.js';
import {Intro, Descriptions} from './Home.js';
import Prevention from './Prevention';
import {Prediction} from './Prediction';
import About from './About';

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Descriptions/>
      <History/>
      <Prediction/>
      <Prevention />
      <About />
    </div>
  )
}

export default App;