import React, { Component } from 'react';
import './App.css';

class Products extends Component {
  render() {
    return (
      <div className='products'>
      <ul className='categories'>
      <li className='categoriesList'><button className='productType'>Бира</button></li>
      <li className='categoriesList'><button className='productType'>Вино</button></li>
      <li className='categoriesList'><button className='productType'>Газирани напитки</button></li>
      <li className='categoriesList'><button className='productType'>Сокове</button></li>
      <li className='categoriesList'><button className='productType'>Вода</button></li>
      <li className='categoriesList'><button className='productType'>Резервни части</button></li>

      </ul>Products</div>
    )
  }
}
  export default Products;
