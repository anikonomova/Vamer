import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Info from './Info';
import Contact from './Contact';
import bira from './Images/bira.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img className='beer' src={bira} alt='Bira'></img>
          <p className='heading'>VAMER</p>
        </header>
        <section>
          <Menu/>
          </section>
          <main>
          </main>

    </div>
    );
  }
}

export default App;
