import React from 'react'

const Navbar = () => (
  <header className="Header  u-hiddenPrint">

    <div className="Header-navbar ">
      <div className="u-layout-wide Grid Grid--alignMiddle u-layoutCenter">

        <div className="Header-title Grid-cell">
          <h1 className="Header-titleLink">
            <a href="/">Dashboard</a>
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

        <div className="Header-toggle Grid-cell">
          <a className="Hamburger-toggleContainer js-fr-offcanvas-open u-nojsDisplayInlineBlock u-lg-hidden u-md-hidden"
             href="#menu" aria-controls="menu" aria-label="accedi al menu" title="accedi al menu">
            <span className="Hamburger-toggle" role="presentation"/>
            <span className="Header-toggleText" role="presentation">Menu</span>
          </a>
        </div>

      </div>
    </div>
  </header>
)

export default Navbar
