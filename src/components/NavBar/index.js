import React, { Component } from 'react'
import PropTypes from 'prop-types'

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  setValue = (event) => {
    const value = event.currentTarget.value
    this.setState({ value })
    this.props.filter(value)
  }

  render() {
    return (
      <header className="Header  u-hiddenPrint">

        <div className="Header-navbar ">
          <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">

            <div className="Header-title Grid-cell">
              <h1 className="Header-titleLink">
                <a href="/">
                  Dashboard<br/>
                  <small>Analisi di sicurezza</small>
                </a>
              </h1>
            </div>

            <div className="Header-searchTrigger Grid-cell">
              <button aria-controls="header-search" className="js-Header-search-trigger Icon Icon-search "
                      title="attiva il form di ricerca" aria-label="attiva il form di ricerca" aria-hidden="false">
              </button>
              <button aria-controls="header-search" className="js-Header-search-trigger Icon Icon-close u-hidden "
                      title="disattiva il form di ricerca" aria-label="disattiva il form di ricerca" aria-hidden="true">
              </button>
            </div>

            <div className="Header-utils Grid-cell">
              <div className="Header-search" id="header-search">
                <form className="Form">
                  <div
                    className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s"
                    role="search">
                    <input
                      className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderRadius-s"
                      required id="cerca"
                      value={this.state.value} onChange={this.setValue}/>
                    <label className="Form-label u-color-grey-50 u-text-r-xxs" htmlFor="cerca">cerca nel sito</label>
                    <button
                      className="Grid-cell u-sizeFit Icon-search Icon--rotated u-color-grey-50 u-padding-all-s u-textWeight-700"
                      title="Avvia la ricerca" aria-label="Avvia la ricerca">
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="Header-toggle Grid-cell">
              <a
                className="Hamburger-toggleContainer js-fr-offcanvas-open u-nojsDisplayInlineBlock u-lg-hidden u-md-hidden"
                href="#menu" aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">
                <span className="Hamburger-toggle" role="presentation"></span>
                <span className="Header-toggleText" role="presentation">Menu</span>
              </a>
            </div>

          </div>
        </div>
      </header>
    )
  }
}

NavBar.propTypes = {
  filter: PropTypes.func
}

export default NavBar
