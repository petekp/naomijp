import React, { Component } from 'react';
import './reeeset.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <main role="main">
          <div className="wrapper">
            <header className="header">
              <h1>Naomi J. <br />Petrash</h1>
              <h2>Designer at <a className="Button" href="http://virtahealth.com">Virta</a></h2>
            </header>
            <section className="links">
              <div className="LinkList">
                <a href="http://twitter.com/petepetrash">Twitter</a>
                <a href="https://www.quora.com/profile/Pete-Petrash">Quora</a>
                <a href="mailto:pete@petekp.com">Email</a>
              </div>
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
