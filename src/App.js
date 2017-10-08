import React, { Component } from 'react'
import NavBar from './components/NavBar'
import List from './components/List'
import getResults from './helpers/getResults'
import FieldPieChart from './components/FieldPieChart'
import Dropzone from 'react-dropzone'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFile: false,
      data: [],
      filtered: [],
      error: false
    }
  }

  filter = (query) => {
    const filtered = this.state.data.filter(item => {
      return item['Canonical URL'].indexOf(query) > -1
    });
    this.setState({ filtered })
  };

  checkFile = async(files) => {
    files.forEach(file => {
      if(file.name.indexOf('.csv') === -1) return this.setState({ error: true })
    })
    this.setState({ hasFile: true, error: false });
    const filteredFiles = files.sort((a, b) => {
      return a.name.localeCompare(b.name)
    });
    try{
      const data = await getResults(filteredFiles);
      this.setState({ data, filtered: data })
    } catch(ignore){}
  };

  render() {
    return (
      <div>
        <NavBar filter={this.filter}/>
        {
          this.state.error && (
            <div className="Prose Alert Alert--error Alert--withIcon u-layout-prose u-padding-r-bottom u-padding-r-right u-margin-r-bottom" role="alert">
              <h2 className="u-text-h3">
                Si è verificato un errore
              </h2>
              <p className="u-text-p">Per favore seleziona dei file .csv</p>
            </div>
          )
        }
        {
          this.state.hasFile ? (
            <div>
              <div className={'Grid Grid--withGutter u-padding-all-l'}>
                <div className={'Grid-cell u-size1of3 u-lg-size1of3'}>
                  <h2 className={'u-text-h2'}>HTTPS</h2>
                </div>
                <div className={'Grid-cell u-size1of3 u-lg-size1of3'}>
                  <h6 className={'u-text-h2'}>SPF</h6>
                  <span className={'u-text-h6'}>(Sender Policy Framework)</span>
                </div>
                <div className={'Grid-cell u-size1of3 u-lg-size1of3'}>
                  <h6 className={'u-text-h2'}>DMARC</h6>
                  <span className={'u-text-h6'}>(Domain-based Message Authentication, Reporting & Conformance)</span>
                </div>
                <div className={'Grid-cell u-size1of3 u-lg-size1of3'} style={{width: '100%', height: '80%'}}>
                  <FieldPieChart data={this.state.filtered} field={'Valid HTTPS'} expected={'True'} label={'HTTPS'}/>
                </div>
                <div className={'Grid-cell u-size1of3 u-lg-size1of3'} style={{width: '100%', height: '80%'}}>
                  <FieldPieChart data={this.state.filtered} field={'Valid SPF'} expected={'True'} label={'SPF'}/>
                </div>
                <div className={'Grid-cell u-size1of3 u-lg-size1of3'} style={{width: '100%', height: '80%'}}>
                  <FieldPieChart data={this.state.filtered} field={'Valid DMARC'} expected={'True'} label={'DMARC'}/>
                </div>
              </div>
              <List data={this.state.filtered}/>
            </div>
          ) : (
            <div style={{margin: '20px'}}>
              <Dropzone
                onDrop={this.checkFile}
                style={{
                  width: '100%',
                  borderColor: 'rgb(102, 102, 102)',
                  borderStyle: 'dashed',
                  height: '40vh',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                Carica i file pshtt.csv e trustymail.csv
              </Dropzone>
            </div>
          )
        }
      </div>
    )
  }
}

export default App;
