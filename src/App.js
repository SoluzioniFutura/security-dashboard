import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import getResults from './helpers/getResults'

class App extends Component {
  componentDidMount() {
    getResults()
      .then(data => console.log(data))
      .catch(err => console.log('errore'))
  }
  render() {
    return (
        <div>
            <Navbar/>
        </div>
    );
  }
}

export default App;
