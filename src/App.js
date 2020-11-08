import React from 'react';
import './App.css';
import Prevention from './Prevention';
import {NavBar} from './Nav.js';
import {Intro, Descriptions} from './Home.js';

function App() {
  return (
    <div>
      <NavBar/>
      <Intro/>
      <Descriptions/>
      <Prevention/>
    </div>
  );
}

export default App;