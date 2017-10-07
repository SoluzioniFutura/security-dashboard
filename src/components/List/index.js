import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      headers: []
    })
  }

  componentDidUpdate(){
    this.loadScript('/iwt/IWT.min.js')
  }

  loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
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
    return (
      <ul className="Linklist Linklist--padded Treeview Treeview--default js-Treeview u-text-r-xs">
        {
          this.props.data.map((item, index) => (
            <li><a href={item['Canonical URL']} target="_blank">{item['Canonical URL']}</a>
              <ul data-megamenu-class="u-columns-2">
                {
                  Object.entries(item).map((item, index) => (
                    <li style={{padding: '18px 0 18px 27px'}}><p style={{color: 'black'}}>{item[0]}: {item[1]}</p></li>
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
  data: PropTypes.array.isRequired
}

List.defaultProps = {
  data: []
}

export default List
