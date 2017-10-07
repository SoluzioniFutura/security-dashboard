import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  componentDidUpdate(){
    this.loadScript('/iwt/IWT.min.js')
  }

  loadScript = (src) => {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
  }

  render() {
    return (
      <ul className="Linklist Linklist--padded Treeview Treeview--default js-Treeview u-text-r-xs">
        {
          this.props.list.map((item, index) => (
            <li><a href={item['Canonical URL']} target="_blank">{item['Canonical URL']}</a>
              <ul data-megamenu-class="u-columns-2">
                {
                  Object.entries(item).map((item, index) => (
                    <li><a href={"javascript:void(0)"}>{item[0]}: {item[1]}</a></li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    )
  }
}

class ListItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      expanded: true
    }
  }

  render(){
    console.log(this.props.element)
    return(
      <div style={{borderTop: '1px solid lightgray'}}>
        <h2>{this.props.element['Canonical URL']}</h2>
        {
          Object.entries(this.props.element).map((item, index) => (
            <h3>{item[0]}: {item[1]}</h3>
          ))
        }
      </div>
    )
  }
}

List.proptypes = {
  list: PropTypes.array.isRequired
}

List.defaultProps = {
  list: []
}

export default List
