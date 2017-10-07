import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class DataGrid extends React.Component {
  constructor(props) {
    super(props)
    this.headers = Object.keys(props.data[0]).map(header => ({
      Header: header,
      accessor: header
    }))
  }

  render() {
    return (
      <ReactTable
        data = { this.props.data }
        columns = { this.headers }
        defaultPageSize = {10}
        className = { '-striped -highlight' }
      />
    )
  }
}

export default DataGrid
