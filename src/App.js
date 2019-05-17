import React from 'react';
import lenna from './lenna.jpg';
import empty from './empty.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lenna} className="App-logo" alt="Lenna" />
        <img src={empty} className="App-logo" alt="Empty" />
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
      </header>
    </div>
  );
}

export default App;
