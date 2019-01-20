import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withLocalize } from "react-localize-redux";
import './App.css';
import Info from './Info';
import Contact from './Contact';
import Products from './Products';
import Whatsnew from './Whatsnew';
import Gallery from './Gallery';
import News from './News';
import bira from './Images/bira.jpg';


class App extends Component {
  constructor(props) {
    super(props);

    //this.props.initialize({
    //  languages: [
    //    { name: "English", code: "en" },
    //    { name: "Bulgarian", code: "bg" }
    //  ]
    //});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <span className='mail'>info@vamer.bg тел. +35932624146</span>
        <img className='beer' src={bira} alt='Bira'></img>
          <p className='heading'>VameR</p>
        </header>
        <div id='.root'>
        <div id= 'menu'>

        <Link to="/home"><button className='navigation'>Начало</button></Link>
        <Link to="/about"><button className='navigation'>За нас</button></Link>
        <Link to="/products"><button className='navigation'>Продукти</button></Link>
        <Link to="/whatsnew"><button className='navigation'>Новости</button></Link>
        <Link to="/gallery"><button className='navigation'>Галерия</button></Link>
        <Link to="/news"><button className='navigation'>Новини</button></Link>
        <Link to="/contact"><button className='navigation'>Контакт</button></Link>
        </div>

        <main>
        <Route exact path="/" render={() => (
        <Info/>
      )}
      />
      <Route path="/home" render={() => (
        <Info />
      )} />
      <Route path="/about" render={() => (
        <Info />
      )} />
      <Route path="/products" render={() => (
        <Products />
      )} />
      <Route path="/whatsnew" render={() => (
        <Whatsnew />
      )} />
      <Route path="/gallery" render={() => (
        <Gallery />
      )} />
      <Route path="/news" render={() => (
        <News />
      )} />
      <Route path="/contact" render={() => (
        <Contact />
      )} />
      </main>
       </div>
          <footer id="footer" tabIndex="0">
            <a href="/" aria-label="Home-page" tabIndex="0"><strong>Вамер ООД</strong></a> (c) Всички права запазени.
           </footer>
    </div>
    );
  }
}

export default App;
