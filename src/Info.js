import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import vamer from './Images/vamer.jpg';

class Info extends Component {
  render() {
    return (
      <div className="info">
      <div className='about'>
      <div className='list'>
      <p>Фирма Вамер е българска компания в областта на изграждането на системи за наливни<br></br>
      напитки – газирани, негазирани , алкохолни , безалкохолни – с охлаждане или без охлаждане.</p>
<ul>
<li>бира</li>
<li>вино</li>
<li>безалкохолни газирани напитки</li>
<li>сокове</li>
<li>вода, сода</li>
<li>алкохолни напитки</li>
<li>чайове</li>
<span>Както и съответните съдове: </span>
<li>кегове за бира (нови и втора употреба)</li>
<li>канти за безалкохолни напитки и концентрати</li>
<li>канти за безалкохолни напитки и концентрати</li>
<li>бег ин бокс системи </li>
<li>аксесоари и резервни части</li>
</ul>
</div>
<img className='fair' src={vamer} alt='Vamer fair'></img>
<div className='service'>
<p>Сервиз  за ремонт ,подръжка и профилактика  на охладители за бира , охладители за вино , охладители за газирани напитки , охладители за сокове , охладители за алкохолни напитки , фитинги за кегове , кегове, канти .
Резервни части -  накрайници за вино , помпи ,  глави за бира , редуцир вентили , маркучи , скоби , бързи връзки , колони , скари капко уловители, кранове , уплътнения , вентилатори , филтри, филтри за вода, фитинги за кегове,кранове за вино, кранове за бира , серпентини.
Пратниорство с водещи компании като : Bevco,  ODL , DSI , Trial , Sap , Rahau , Aeb , Supermonte и други.</p>
<p>Като фамилна компания за 20 години работа в областта е спечелила доверието както на партньорите си от Европа така и на клиентите си в България с качество на продуктите си, лоялност, професионални технически и търговски решения.
Като постижения могат да се отбележат многобройните изложения с които допренесе за полагането на основите на предлагане на наливни напитки в страната, членството и в Пивоварния съюз, съдействието и за развитие на пивоварната индустрия, винарната индустрия, индустриата за безалкохолни напитки и др. Днес тя е търсен партньор както в България така и в Европа.</p></div>
    </div>
    </div>

    );
  }
}

export default Info;