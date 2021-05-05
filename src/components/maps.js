import React from "react";
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";

const Map = (props) => {
    console.log("=> ",props);
    let la =  props.latitud;
    let lo =  props.longitud
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 19.432617617465954, lng:-99.13306332977298 }}
    >
      <Marker key={1} position={ {  lat:la,lng:lo} } />
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(Map));