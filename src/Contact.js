import React, { Component } from 'react';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const { compose } = require("recompose");

 const Map = compose(withScriptjs,withGoogleMap)(props => (
      <GoogleMap
        center = { { lat: 42.136549, lng: 24.754457 } }
        defaultZoom = { 14 }
      >
                <Marker
                  position={{ lat: 42.136549, lng: 24.754457 }}
                  animation={window.google.maps.Animation.DROP}
              >
              </Marker>
            </GoogleMap>
    )
   );


class Contact extends Component {
  render() {
    return (
      <div className='contactUs'>
  <section id="map-container" aria-label='map-application'>
    <div id="map" role='application'>
    { (navigator.onLine) && (<Map
          containerElement={ <div className='map' style={{ height: `100vh`, width: `100%` }} /> }
          mapElement={ <div style={{ height: `100vh`, width: `100%`}} /> }
          loadingElement={<div className='loadingEl' style={{ height: `100vh` }} />}
          googleMapURL ='https://maps.googleapis.com/maps/api/js?key=AIzaSyCMGeelHXsg0DHtykZeMFwRCQAmbc7M71c&v=3.exp&libraries=geometry,drawing,places&callback=loadMap'
          />)
        }
        { (!navigator.onLine) &&
           (<div>
             <h2>Oops! Something went wrong! Check your internet connection!</h2>
             </div>)
           }
    </div>
  </section>
      <div className ='address'>
      <h1>Вамер ООД</h1>
      <span >бул.Христо Ботев 71, Пловдив<br></br>
      тел. +35932624146<br></br>
      факс +35932631399<br></br>
      info@vamer.bg</span>
      </div>
      </div>
    )
  }
}
  export default Contact;
