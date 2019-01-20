import React, { Component } from 'react';
import './App.css';
import ImageGallery from 'react-image-gallery';
import beerkeg from './Images/beerkeg.jpg';
import blackkeg from './Images/blackkeg.jpg';
import winekeg from './Images/winekeg.jpg';



class Gallery extends Component {
  render() {
    return (
      <div className='allPics'>
      <img className='gallery' src={beerkeg} alt='Vamer fair'></img>
      <img className='gallery' src={blackkeg} alt='Vamer fair'></img>
      <img className='gallery' src={winekeg} alt='Vamer fair'></img>
      <img className='gallery' src={beerkeg} alt='Vamer fair'></img>
      <img className='gallery' src={blackkeg} alt='Vamer fair'></img>
      <img className='gallery' src={winekeg} alt='Vamer fair'></img>
      </div>
    )
  }
}

export default Gallery;
