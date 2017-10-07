import React, { Component } from 'react';
import NavBar from './components/NavBar'
import List from './components/List'
import getResults from './helpers/getResults'
import FieldPieChart from './components/FieldPieChart'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      filtered: []
    }
  }

  async componentDidMount() {
    try{
      const data = await getResults()
      this.setState({ data, filtered: data })
    } catch(error){
      console.log(error)
    }
  }

  filter = (query) => {
    const filtered = this.state.data.filter(item => {
      return item['Canonical URL'].indexOf(query) > -1
    })
    this.setState({ filtered })
  }

  render() {
    return (
        <div>
            <NavBar filter={this.filter}/>
          <div className = { 'Grid Grid--withGutter u-padding-all-l' }>
            <div className = { 'Grid-cell u-size1of3 u-lg-size1of3' }>
              <h2 className = { 'u-text-h2' }>HTTPS</h2>
            </div>
            <div className = { 'Grid-cell u-size1of3 u-lg-size1of3' }>
              <h6 className = { 'u-text-h2' }>
                SPF
                <h2 className = { 'u-text-h6' }>(Sender Policy Framework)</h2>
              </h6>
            </div>
            <div className = { 'Grid-cell u-size1of3 u-lg-size1of3' }>
              <h6 className = { 'u-text-h2' }>
                DMARC
                <h2 className = { 'u-text-h6' }>(Domain-based Message Authentication, Reporting & Conformance)</h2>
              </h6>
            </div>
            <div className = { 'Grid-cell u-size1of3 u-lg-size1of3' } style = {{ width: '100%', height: '80%' }}>
              <FieldPieChart data = { this.state.data } field = { 'Valid HTTPS' } expected = { 'True' } label = { 'HTTPS' }/>
            </div>
            <div className = { 'Grid-cell u-size1of3 u-lg-size1of3' } style = {{ width: '100%', height: '80%' }}>
              <FieldPieChart data = { this.state.data } field = { 'Valid SPF' } expected = { 'True' } label = { 'SPF' }/>
            </div>
            <div className = { 'Grid-cell u-size1of3 u-lg-size1of3' } style = {{ width: '100%', height: '80%' }}>
              <FieldPieChart data = { this.state.data } field = { 'Valid DMARC' } expected = { 'True' } label = { 'DMARC' }/>
            </div>
          </div>
          <List data = { this.state.filtered }/>
      </div>
    )
  }
}

export default App;
