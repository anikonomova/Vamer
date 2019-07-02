import React, { Component } from 'react';
import './App.css';
import System from './Images/wineproducts/systemforwine.jpg';
import Winecolone from './Images/wineproducts/winecolone.jpg';
import Winecolone2 from './Images/wineproducts/winecolone2.jpg';
import Winecooler from './Images/wineproducts/winecooler.jpg';
import Winecooler2 from './Images/wineproducts/winecooler2.jpg';
import Winecooler3 from './Images/wineproducts/winecoolerforfass.jpg';


class Wines extends Component {
  render() {
    return (
      <div class='adress'>
      <div className='grid-container'>
      <div className='grid-item'>
      <img className='image' src={Winecolone} alt='Colona for wine'></img>
      <h2 className='description'>Колона за наливно вино</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Winecolone2} alt='Colona for wine'></img>
      <h2 className='description'>Колона за наливно вино</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={System} alt='System for wine'></img>
      <h2 className='description'>Система за наливно вино</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Winecooler} alt='Cooler for wine'></img>
      <h2 className='description'>Охладител за вино</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Winecooler2} alt='Cooler for wine'></img>
      <h2 className='description'>Охладител за вино</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Winecooler3} alt='Cooler for wine'></img>
      <h2 className='description'>Охладител за наливно вино</h2>
      </div>
      </div>
      </div>
    )
  }
}

export default Wines;
