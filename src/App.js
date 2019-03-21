import React, { Component } from 'react';
import './App.css';
import Person  from './Person';


class App extends Component {
  render() {
    return (
      <div className="Person">
        <header className="App-header">
          <Person />
          
        </header>
      </div>
    );
  }
}

export default App;
