import React from 'react'
import 'react-table/react-table.css'
import List from '../List/'

class DataGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      headers: []
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data[0])
      this.setState({
        headers: Object.keys(nextProps.data[0]).map(header => ({
          Header: header,
          accessor: header
        }))
      })
  }

  render() {
    console.log(this.props.data)
    console.log(this.state.headers)
    return(
      <List list={ this.props.data }/>
    )
    /*return (
      <ReactTable
        data = { this.props.data }
        columns = { this.state.headers }
        defaultPageSize = {10}
        className = { '-striped -highlight' }
      />
    )*/
  }
}

export default DataGrid
