import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App(){
  
const [color, setColor] = useState()
const randomColor = () => {
  const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
  setColor(random);
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button style={{background: `${color}`}} onClick={randomColor}>Click me!</button>
      </header>
    </div>
  );
}

export default App;
