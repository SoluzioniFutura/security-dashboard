import React from 'react'
import PropTypes from 'prop-types'

const Info = ({ info }) => (
  <ul>
    {
      Object.entries(info).map(([field, value]) => (
        <li>{field}: {value}</li>
      ))
    }
  </ul>
)

Info.propTypes = {
  info: PropTypes.object.isRequired
}

export default Info
