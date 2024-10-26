import './App.css';
import { Main } from './Main.js'
import React from "react";
import { Link } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Party Finder!
        </p>
        <Main />
        <Link to="/page1">
            <button type="button" class="buttons">
                Organizer Portal
            </button>
        </Link>
        <Link to="/page2">
            <button type="button" class="buttons">
                Atendee Portal
            </button>
        </Link>
      </header>
    </div>
  );
}

export default App;


