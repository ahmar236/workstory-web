import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Importing the icon images
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerIconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIconRetinaUrl,
  iconUrl: markerIconUrl,
  shadowUrl: markerShadowUrl,
});

const Map = () => {
  const position: [number, number] = [40.7128, -74.0060]; // Latitude and longitude

  return (
    <MapContainer center={position} zoom={10} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;





// import React from 'react';
// import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

// const Map = () => {
//   const containerStyle = {
//     width: '100%',
//     height: '400px',
//   };

//   const center = {
//     lat: 40.7128, 
//     lng: -74.0060, 
//   };

//   const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

//   return (
//     <LoadScript googleMapsApiKey={googleMapsApiKey}>
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default React.memo(Map);
