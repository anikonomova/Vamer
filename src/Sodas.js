import React, { Component } from 'react';
import './App.css';
import Postmix from './Images/sodas/postmixcolone.jpg';
import Sodamashine from './Images/sodas/sodamashine.jpg';


class Sodas extends Component {
  render() {
    return (
      <div class='adress'>
      <h2 className='type'>Газирани напирки</h2>
      <div className='grid-container'>
      <div className='grid-item'>
      <img className='image' src={Sodamashine} alt='Soda mashine'></img>
      <h3 className='description'>Машина за сода</h3>
      </div>
      <div className='grid-item'>
      <img className='image' src={Postmix} alt='Postmix colone'></img>
      <h3 className='description'>Колона Пост Микс</h3>
      </div>
      </div>
      </div>
    )
  }
}

export default Sodas;
