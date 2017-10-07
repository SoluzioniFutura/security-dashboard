import React, { Component } from 'react'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>
          <section className="Hero">
            <div className="Hero-content">
              <p className="u-padding-r-bottom u-padding-r-top u-text-r-xs">
                <a href="#" className="u-textClean u-color-60 u-text-h4"><span className="Dot u-background-60"></span>categoria</a>
              </p>
              <h2 className="u-text-h2 u-color-95">aut dolores exercitationem</h2>
              <p className="u-padding-r-bottom u-padding-r-top u-text-p u-margin-r-bottom">Quis et id repellat harum eligendi natus. Animi voluptatem adipisci ea autem possimus laboriosam vitae deleniti voluptas. Optio veritatis in hic non illo. Dolores nam in veniam repellat aut id qui dolor.</p>
              <button className="Button Button--default u-text-r-xs">aut dolores exercitationem</button>
            </div>
          </section>
        </div>
    );
  }
}

export default App;
