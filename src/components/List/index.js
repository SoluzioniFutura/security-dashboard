import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      headers: []
    })
  }

  componentDidMount(){
    this.loadScript('https://soluzionifutura.github.io/security-dashboard/iwt/IWT.min.js')
  }

  componentDidUpdate(){
    this.loadScript('https://soluzionifutura.github.io/security-dashboard/iwt/IWT.min.js')
  }
  loadScript(src){
    const script = document.createElement('script')
    script.src = src
    script.id = 'IWTScript'
    document.body.appendChild(script)
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
            <li key={index}><a href={item['Canonical URL']} target="_blank">{item.Domain}</a>
              <ul data-megamenu-class="u-columns-2">
                {
                  Object.entries(item).map(([field, value], index) => (
                    <li style={{padding: '18px 0 18px 27px', cursor: 'default'}} key={index}>
                      <p style={{color: 'black'}}>
                        { field }: { value }
                      </p>
                    </li>
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

List.proptypes = {
  data: PropTypes.array.isRequired
}

List.defaultProps = {
  data: []
}

export default List
