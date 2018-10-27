import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Info from './Info';
import Contact from './Contact';
import Products from './Products';
import Whatsnew from './Whatsnew';
import Gallery from './Gallery';
import News from './News';


class Menu extends Component {
  render() {

      return (
        <div id='.root'>
        <div id= 'menu'>
        <button className='navigation'>
        <Link to="/home">Начало</Link>
        </button>
        <button className='navigation'><Link to="/about">За нас</Link>
        </button>
        <button className='navigation'>
        <Link to="/products">Продукти</Link>
        </button>
        <button className='navigation'>
        <Link to="/whatsnew">Новости</Link>
        </button>
        <button className='navigation'>
        <Link to="/gallery">Галерия</Link>
        </button>
        <button className='navigation'>
        <Link to="/news">Новини</Link>
        </button>
        <button className='navigation'>
        <Link to="/contact">Контакт</Link>
        </button>
        </div>
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
      )
    }
  }
export default Menu;
