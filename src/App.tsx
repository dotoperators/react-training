import React from 'react';
import logo from './logo.svg';
import './App.css';
// @flow
function App() {
  console.log(process.env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
      <small>You are running this application in <b>{process.env.REACT_APP_ENV}</b> mode.</small>
      <form>
        <input type="text" defaultValue={process.env.REACT_APP_API_URL} />
      </form>
    </div>
      </header>
      
    </div>
  );
}

export default App;
