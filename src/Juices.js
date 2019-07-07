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
      <h2 className='type'>Сокове</h2>
      <div className='grid-container'>
      <div className='grid-item'>
      <img className='image' src={Juicescooler} alt='Cooler for juices'></img>
      <h3 className='description'>Охладител за сокове</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Juicesfass} alt='Colona for juices'></img>
      <h3 className='description'>Наливни сокове</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Juicesfass2} alt='Colona for juices'></img>
      <h3 className='description'>Наливни сокове</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Milk} alt='Milk colona'></img>
      <h3 className='description'>Маливно мляко</h3>
      </div>
      </div>
      </div>
    )
  }
}

export default Juices;
