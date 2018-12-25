import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponet from './components/navComponent/navComponent';
import Body from './components/body/body';

class App extends Component {
  render() {
    return (
      <div className="App">
         <NavComponet /> 
         <Body />
      </div>
    );
  }
}

export default App;
