import React from 'react';
import './App.css';
import "./styles/main.scss"
import Head from './Components/Head';
import Naven from './Components/Naven';
import Foot from './Components/Foot';
import Midle from './Components/Midle';

function App() {
  return (
    <div>
      <h1>test</h1>
      <Head />
      <Naven />
      <Midle />
      <Foot />
    </div>
  );
}

export default App;
