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
      <div className='grid-container'>
      <div className='gird-item'>
      <img className='image' src={Beercolumn} alt='Colna for beer'></img>
      <h2>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={Beercolumn2} alt='Colona for beer'></img>
      <h2>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={Beermobile} alt='Mobile table'></img>
      <h2>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={Colonabira} alt='Colona for beer'></img>
      <h2>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={Ohladitelbira} alt='Beer cooler'></img>
      <h2>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={Ohladitel2} alt='Beer cooler'></img>
      <h2>Това е снимка</h2>
      </div></div>
      </div>
    )
  }
}

export default Beers;
