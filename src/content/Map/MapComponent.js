import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 13.1301376,
  lng: 80.2095104
};

function MapComponent() {
  useEffect(() => {
    navigator.geolocation.watchPosition(function (position) {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });
  }, []);
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker
          visible={true}
          title="location"
          label="lohi"
          LatLng={(13.1301376, 80.2095104)}
          cursor="pointer"
          draggable={true}
          zIndex={10}
          shape={'MarkerShapeCircle '}
          icon="https://dustman-category-image.s3.ap-south-1.amazonaws.com/favpng_tata-ace-tata-motors-pickup-truck-tata-super-ace-car%201%20%283%29.png"
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);
