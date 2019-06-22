import React, { Component } from 'react';
import './App.css';
import beerkeg from './Images/beerkeg.jpg';
import blackkeg from './Images/blackkeg.jpg';
import winekeg from './Images/winekeg.jpg';



class Gallery extends Component {
  render() {
    return (
      <div className='grid-container'>
      <div className='gird-item'>
      <img className='image' src={beerkeg} alt='Vamer fair'></img>
      <span>Това е снимка</span>
      </div>
      <div className='gird-item'>
      <img className='image' src={blackkeg} alt='Vamer fair'></img>
      <span>Това е снимка</span>
      </div>
      <div className='gird-item'>
      <img className='image' src={winekeg} alt='Vamer fair'></img>
      <span>Това е снимка</span>
      </div>
      <div className='gird-item'>
      <img className='image' src={beerkeg} alt='Vamer fair'></img>
      <span>Това е снимка</span>
      </div>
      <div className='gird-item'>
      <img className='image' src={blackkeg} alt='Vamer fair'></img>
      <span>Това е снимка</span>
      </div>
      <div className='gird-item'>
      <img className='image' src={winekeg} alt='Vamer fair'></img>
      <span>Това е снимка</span>
      </div>
      </div>
    )
  }
}

export default Gallery;
