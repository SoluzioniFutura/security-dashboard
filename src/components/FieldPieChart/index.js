import React from 'react'
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts'
import PropTypes from 'prop-types'

const yesColor = '#59c5a0'
const noColor = '#f37e40'

class FieldPieChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length !== 0) {
      const yes = nextProps.data.reduce((accumulator, current) => {
          if (current[nextProps.field] === nextProps.expected) accumulator++
          return accumulator
        }, 0)
      this.setState({
        data: [
          {
            name: nextProps.label,
            value: yes
          },
          {
            name: `No ${nextProps.label}`,
            value: nextProps.data.length - yes
          }
        ]
      })
      console.log(nextProps.data)
    }
  }

  render() {
    return (
      <PieChart
        width = { 350 }
        height = { 350 }
      >
        <Pie
          data = { this.state.data }
          cx = { 150 }
          cy = { 150 }
          innerRadius = { 100 }
          outerRadius = { 150 }
          fill="#8884d8"
          paddingAngle={5}
        >
          <Cell fill = { yesColor } />
          <Cell fill = { noColor } />
        </Pie>
        <Tooltip/>
      </PieChart>
    )
  }
}

FieldPieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  field: PropTypes.string.isRequired,
  expected: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default FieldPieChart
