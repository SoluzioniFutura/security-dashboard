import React from 'react'
import PropTypes from 'prop-types'

const List = ({ list }) => (
  <ul className="Linklist  u-layout-prose u-text-r-xs">
    {
      list.map((item, index) => (
        <li key={index}>
          <a className="Linklist-link Linklist-link--lev2" href="">
            {item.canonicalUrl}
          </a>
        </li>
      ))
    }
  </ul>
)

List.proptypes = {
  list: PropTypes.array.isRequired
}

List.defaultProps = {
  list: []
}

export default List
