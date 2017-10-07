import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { csv } from 'd3-request'

class App extends Component {
  componentDidMount() {
    csv('./results/pshtt.csv', (error))
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
