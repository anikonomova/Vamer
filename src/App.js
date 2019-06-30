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
    //  ]<img className='beer' src={bira} alt='Bira'></img>
    //});
  }

  componentDidMount() {
        console.log("[App componentDidMount]");
    }

  render() {
    return (
      <div className="container">
        <div className='box header'>
        <section className='mail'>info@vamer.bg тел. +35932624146</section>
          <header className='heading'>VameR</header>
        </div>
       <div id= 'menu' className='box menu'>
        <ul className="nav">
        <li className='navigation'><Link to="/home">Начало</Link></li>
        <li className='navigation'><Link to="/about">За нас</Link></li>
        <li className='navigation'><Link to="/products">Продукти</Link></li>
        <li className='navigation'><Link to="/whatsnew">Новости</Link></li>
        <li className='navigation'><Link to="/gallery">Галерия</Link></li>
        <li className='navigation'><Link to="/news">Новини</Link></li>
        <li className='navigation'><Link to="/contact">Контакт</Link></li>
        </ul>
        </div>

        <div className='box main'>
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
      </div>
      <div className='box footer'>
          <footer id="footer" tabIndex="0">
            <a href="/" aria-label="Home-page" tabIndex="0"><strong>Вамер ООД</strong></a> (c) Всички права запазени.
           </footer>
           </div>
    </div>
    );
  }
}

export default App;
