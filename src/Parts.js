import React, { Component } from 'react';
import './App.css';
import CO2kit from './Images/parts/CO2kit.jpg';
import Couglingheads from './Images/parts/couglingheads.jpg';
import Driptray from './Images/parts/driptray.jpg';
import Driptray2 from './Images/parts/driptray2.jpg';
import Isopiton from './Images/parts/isopiton.jpg';
import Jg from './Images/parts/jgnipeli.jpg';
import Nakrainici from './Images/parts/nakrainici.jpg';
import Nipmetal from './Images/parts/niplesmetal.jpg';
import Sanityingtanks from './Images/parts/sanityingtanks.jpg'
import Skobi from './Images/parts/skobi.jpg';
import Tools from './Images/parts/tools.jpg';
import Walladapters from './Images/parts/walladapters.jpg';
import Cable from './Images/parts/zabira.jpg';

class Parts extends Component {
  render() {
    return (
      <div class='adress'>
      <h2 className='type'>Резервни части</h2>

      <div className='grid-container'>
      <div className='grid-item'>
      <img className='image' src={CO2kit} alt='CO2 kit'></img>
      <h2 className='description'>Машина за сода</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Couglingheads} alt='Cougling heads'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Driptray} alt='Drip tray'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Driptray2} alt='Drip tray'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Isopiton} alt='Cable Iso piton'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Jg} alt='Jg'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Nakrainici} alt='Nakrainici'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Nipmetal} alt='Nip metal'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Sanityingtanks} alt='Sanitying tanks'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Skobi} alt='Skobi'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Tools} alt='Tools'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Walladapters} alt='Walladapters'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      <div className='grid-item'>
      <img className='image' src={Cable} alt='Cable for beer'></img>
      <h2 className='description'>Колона Пост Микс</h2>
      </div>
      </div>
      </div>
    )
  }
}

export default Parts;
