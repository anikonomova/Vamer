import React, { Component } from 'react';
import './App.css';
import beerkeg from './Images/beerkeg.jpg';
import keg from './Images/blackkeg.jpg';
import winekeg from './Images/wine.jpg';
import SimpleImageSlider from "react-simple-image-slider";
import Slider from './Slider.js'


class Gallery extends Component {

  render() {

    return (
      <div className='gallery'>
      <div className='slider'>
      <Slider />
      </div>
      <div className='grid-container'>
      <div className='gird-item'>
      <img className='image' src={beerkeg} alt='Vamer fair'></img>
      <h2 className='description'>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={keg} alt='Vamer fair'></img>
      <h2 className='description'>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={winekeg} alt='Vamer fair'></img>
      <h2 className='description'>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={beerkeg} alt='Vamer fair'></img>
      <h2 className='description'>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={keg} alt='Vamer fair'></img>
      <h2 className='description'>Това е снимка</h2>
      </div>
      <div className='gird-item'>
      <img className='image' src={winekeg} alt='Vamer fair'></img>
      <h2 className='description'>Това е снимка</h2>
      </div>
      </div>
      </div>
    )
  }
}

export default Gallery;
