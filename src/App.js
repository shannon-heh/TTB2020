import React from 'react';
import {History} from './components/History/History.js';
import './css/App.css';
import {NavBar} from './components/Nav';
import {Intro, Descriptions} from './components/Home';
import {Prevention} from './components/Prevention';
import {Prediction} from './components/Prediction';
import {About} from './components/About';
import {Community} from './components/Community';

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Descriptions/>
      <History/>
      <Prediction/>
      <Prevention />
      <Community />
      <About />
    </div>
  )
}

export default App;