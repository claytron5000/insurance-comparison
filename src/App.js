import React, { Component } from 'react';
import Plan from './Plan.js'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Plan />
        {/* <button>+ Add a plan</button> */}
      </div>
    );
  }
}

export default App;
