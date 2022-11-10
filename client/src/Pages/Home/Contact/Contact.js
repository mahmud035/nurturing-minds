import React from 'react';
import './Contact.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
  const position = [23.745796636734507, 90.39532218240028];
  return (
    <div>
      <div className="text-center py-5 contact-section-text">
        <h4>Contact</h4>
        <h2 style={{ color: 'aqua' }}>Find Me on a Map</h2>
        <p className="fw-semibold">
          Provide a wide range of specialist services for private clients and
          offer confidential services for professionals.
        </p>
      </div>
      <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Psychiatrist Dr Tanjir Rashid Soron</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contact;
