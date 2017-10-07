import React, { Component } from 'react';
import Navbar from './components/Navbar'
import DataGrid from './components/DataGrid'
import getResults from './helpers/getResults'

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
        </div>
    );
  }
}

export default App;
