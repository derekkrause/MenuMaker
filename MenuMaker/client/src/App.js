import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body/>
      </div>
    );
  }
}

export default App;
