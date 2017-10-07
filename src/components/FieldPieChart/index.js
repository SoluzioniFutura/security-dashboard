import React from 'react'
import { PieChart, Pie, Sector, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

const yesColor = '#99e9eb'
const noColor = '#ce716b'

class FieldPieChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      full: false,
      fullColor: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length !== 0) {
      const yes = nextProps.data.reduce((accumulator, current) => {
          if (current[nextProps.field] === nextProps.expected) accumulator++
          return accumulator
        }, 0)
      if (yes === nextProps.data.length || yes === 0) this.setState({
        full: true,
        fullColor: yes === 0 ? noColor : yesColor
      })
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
    }
  }

  render() {
    return (
      <ResponsiveContainer width = { '100%' } height = { 300 }>
        <PieChart>
          <Pie
            data = { this.state.data }
            cx = { '50%' }
            cy = { '50%' }
            innerRadius = { '70%' }
            outerRadius = { '100%' }
            fill = { this.state.full ? this.state.fullColor : ''}
            paddingAngle = { 0 }
          >
            <Cell fill = { yesColor } />
            <Cell fill = { noColor } />
          </Pie>
          <Tooltip/>
        </PieChart>
      </ResponsiveContainer>
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
