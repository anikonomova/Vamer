import React, { Component } from 'react';
import './App.css';

class Products extends Component {
  render() {
    return (
      <div className='products'>
      <ul className='categories'>
      <li><button className='productType'>Бира</button></li>
      <li><button className='productType'>Вино</button></li>
      <li><button className='productType'>Газирани напитки</button></li>
      <li><button className='productType'>Сокове</button></li>
      <li><button className='productType'>Вода</button></li>
      <li><button className='productType'>Резервни части</button></li>

      </ul>Products</div>
    )
  }
}
  export default Products;
