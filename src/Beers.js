import React, { Component } from 'react';
import './App.css';
import Beercolumn from './Images/beerproducts/beercolumn.jpg';
import Beercolumn2 from './Images/beerproducts/beercolumn2.jpg';
import Beermobile from './Images/beerproducts/beermobile.jpg';
import Colonabira from './Images/beerproducts/colonabira.jpg';
import Ohladitelbira from './Images/beerproducts/ohladitelbira.jpg';
import Ohladitel2 from './Images/beerproducts/ohladitel2.jpg';


class Beers extends Component {
  render() {
    return (
      <div class='adress'>
      <h2 className='type'>Бира</h2>
      <div className='grid-container'>
      <div className='grid-item'>
      <img className='image' src={Beercolumn} alt='Colona for beer'></img>
      <h3 className='description'>Колона за бира</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Beercolumn2} alt='Colona for beer'></img>
      <h3 className='description'>Колона за бира</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Colonabira} alt='Colona for beer'></img>
      <h3 className='description'>Колона за бира</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Beermobile} alt='Mobile table'></img>
      <h3 className='description'>Мобилен шкаф</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Ohladitelbira} alt='Beer cooler'></img>
      <h3 className='description'>Охладител за бира</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Ohladitel2} alt='Beer cooler'></img>
      <h3 className='description'>Охладител за бира</h3>
      </div></div>
      </div>
    )
  }
}

export default Beers;
