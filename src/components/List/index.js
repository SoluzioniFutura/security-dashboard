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
        <li><a href="#">Servizi</a>
          <ul data-megamenu-class="u-md-size1of2">
            <li><a href="#">Per aree tematiche</a>
              <ul data-megamenu-class="u-columns-2">
                <li><a href="page--servizi.html#ambiente">Ambiente</a></li>
                <li><a href="page--servizi.html#casa">Casa</a></li>
                <li><a href="page--servizi.html#certificati">Certificati e documenti</a></li>
                <li><a href="page--servizi.html#cultura">Cultura e tempo libero</a></li>
                <li><a href="page--servizi.html#denunce">Denunce</a></li>
                <li><a href="page--servizi.html#elezioni">Elezioni</a></li>
                <li><a href="page--servizi.html#famiglia">Famiglia</a></li>
                <li><a href="page--servizi.html#imprese">Imprese</a></li>
                <li><a href="page--servizi.html#lavoro">Lavoro</a></li>
                <li><a href="page--servizi.html#salute">Salute</a></li>
                <li><a href="page--servizi.html#studio">Studio</a></li>
                <li><a href="page--servizi.html#tributi">Tributi e sanzioni</a></li>
                <li><a href="page--servizi.html#uffici">Uffici comunali</a></li>
                <li><a href="page--servizi.html#volontariato">Volontariato</a></li>
              </ul>
            </li>
            <li><a href="#">Servizi online</a>
              <ul>
                <li><a href="#">Segnalazioni</a></li>
                <li><a href="#">Pagamenti</a></li>
                <li><a href="#" data-megamenu-class="u-text-h4">tutti i servizi online
                  <span data-megamenu-class="Icon Icon-chevron-right u-text-r-xxs"></span></a></li>
              </ul>
            </li>
          </ul>
        </li>
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
