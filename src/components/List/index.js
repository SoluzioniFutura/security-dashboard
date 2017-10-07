import React from 'react'
import PropTypes from 'prop-types'

const List = ({ list }) => (
  <ul className="Linklist Linklist--padded Treeview Treeview--default js-Treeview u-text-r-xs">
    <li><a href="https://example.com">Maiores eius et</a>
      <ul>
        <li><a href="https://example.com">Aut dolores exercitationem</a></li>
        <li><a href="https://example.com">Rerum at labore</a></li>
        <li>
          <a href="https://example.com">Modi nostrum expedita</a>
          <ul>
            <li><a href="https://example.com">Et dolores quae</a></li>
            <li><a href="https://example.com">Quaerat enim saepe</a>
              <ul>
                <li><a href="https://example.com">Quaerat enim saepe</a></li>
                <li><a href="https://example.com">Error ut harum</a></li>
                <li><a href="https://example.com">Magni voluptatem non</a></li>
              </ul>
            </li>
            <li><a href="https://example.com">Omnis quaerat vitae</a></li>
          </ul>
        </li>
        <li><a href="https://example.com">Deleniti voluptatem pariatur</a></li>
        <li><a href="https://example.com">Maiores eius et</a></li>
      </ul>
    </li>
    <li><a href="https://example.com">Omnis quaerat vitae</a>
      <ul>
        <li><a href="https://example.com">Modi nostrum expedita</a></li>
        <li><a href="https://example.com">Rerum at labore</a></li>
        <li><a href="https://example.com">Aut dolores exercitationem</a>
          <ul>
            <li><a href="https://example.com">Error ut harum</a></li>
            <li><a href="https://example.com">Quaerat enim saepe</a></li>
            <li><a href="https://example.com">Et dolores quae</a></li>
          </ul>
        </li>
        <li><a href="https://example.com">Magni voluptatem non</a></li>
        <li><a href="https://example.com">Omnis quaerat vitae</a>
          <ul>
            <li><a href="https://example.com">Deleniti voluptatem pariatur</a></li>
            <li><a href="https://example.com">Aut dolores exercitationem</a></li>
            <li><a href="https://example.com">Rerum at labore</a></li>
            <li><a href="https://example.com">Modi nostrum expedita</a></li>
            <li><a href="https://example.com">Et dolores quae</a></li>
            <li><a href="https://example.com">Quaerat enim saepe</a></li>
            <li><a href="https://example.com">Error ut harum</a></li>
            <li><a href="https://example.com">Magni voluptatem non</a></li>
            <li><a href="https://example.com">Omnis quaerat vitae</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
)

List.proptypes = {
  list: PropTypes.array.isRequired
}

List.defaultProps = {
  list: []
}

export default List
