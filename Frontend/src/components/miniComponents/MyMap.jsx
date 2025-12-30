import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet's default icon issue with Webpack
import L from 'leaflet';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Use a green marker icon from GitHub
const greenIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Set the green icon as the default
L.Marker.prototype.options.icon = greenIcon;

// Marker position
const position = [32.3589, -86.2757]; // 1537 Dunbar St, Montgomery, AL 36106

const MyMap = () => (
  <div className="h-auto w-full flex justify-center items-center z-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-200 text-clip bg-transparent relative lg:px-20 px-6 py-16 rounded-2xl">
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[80vh] w-full rounded-xl shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup closeButton={false} closeOnClick={false} className="text-green-800 font-semibold">
          A pretty popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  </div>
);

export default MyMap;
