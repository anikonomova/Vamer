import React, { Component } from 'react';
import './App.css';
import Juicescooler from './Images/juices/juicescooler.jpg';
import Juicesfass from './Images/juices/juicesfass.jpg';
import Juicesfass2 from './Images/juices/juicesfass2.jpg';
import Milk from './Images/juices/milk.jpg';

class Juices extends Component {
  render() {
    return (
      <div class='adress'>
      <div className='grid-container'>
      <div className='grid-item'>
      <img className='image' src={Juicescooler} alt='Cooler for juices'></img>
      <h2 className='description'>Охладител за сокове</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Juicesfass} alt='Colona for juices'></img>
      <h2 className='description'>Наливни сокове</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Juicesfass2} alt='Colona for juices'></img>
      <h2 className='description'>Наливни сокове</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Milk} alt='Milk colona'></img>
      <h2 className='description'>Маливно мляко</h2>
      </div>
      </div>
      </div>
    )
  }
}

export default Juices;
