import React from 'react';
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

export default Map;
