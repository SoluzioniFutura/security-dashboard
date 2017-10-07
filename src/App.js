import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import DataGrid from './components/DataGrid'
import getResults from './helpers/getResults'
import FieldPieChart from './components/FieldPieChart'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    getResults()
        .then(data => this.setState({ data }))
        .catch(err => console.log('errore'))
  }
  render() {
    return (
        <div>
            <Navbar/>
            <DataGrid data = { this.state.data }/>
            <FieldPieChart data = { this.state.data } field = { 'Valid HTTPS' } expected = { 'True' } />
        </div>
    );
  }
}

export default App;
