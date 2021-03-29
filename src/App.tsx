import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Patty'
  const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, world!
        </p>
        <div>{greet(name)}</div>
      </header>
    </div>
  );
}

export default App;
