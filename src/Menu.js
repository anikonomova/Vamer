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
      )
    }
  }
export default Menu;
