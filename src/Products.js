import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import Beers from './Beers';
import Wines from './Wines';
import Sodas from './Sodas';
import Juices from './Juices';
import Water from './Water';
import Parts from './Parts';
import All from './All';



class Products extends Component {
  render() {
    return (
      <div className='products'>
      <h2 className='title-categories'>Категории:</h2>
      <ul className='categories'>
      <li className='categories-list'><Link to='/products/beers' className='productType'>Бира</Link></li>
      <li className='categories-list'><Link to='/products/wines' className='productType'>Вино</Link></li>
      <li className='categories-list'><Link to='/products/sodas' className='productType'>Газирани напитки</Link></li>
      <li className='categories-list'><Link to='/products/juices'className='productType'>Сокове</Link></li>
      <li className='categories-list'><Link to='/products/water'className='productType'>Вода</Link></li>
      <li className='categories-list'><Link to='/products/parts' className='productType'>Резервни части</Link></li>
      </ul>
      <div className='product-items'>
      <Route exact path="/products" render={() => (
        <All />
      )} />
      <Route exact path="/products/beers" render={() => (
      <Beers />
      )} />
      <Route path="/products/wines" render={() => (
        <Wines />
      )} />
      <Route path="/products/sodas" render={() => (
        <Sodas />
      )} />
      <Route path="/products/juices" render={() => (
        <Juices />
      )} />
      <Route path="/products/water" render={() => (
        <Water />
      )} />
      <Route path="/products/parts" render={() => (
        <Parts />
      )} />
      </div>

      </div>
    )
  }
}
  export default Products;
