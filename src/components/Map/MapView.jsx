import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./styleMap.module.css"
import "leaflet/dist/leaflet.css"

const MapView = () => {
  return (

    
    <MapContainer style={{ width: "100%", height: "100%", borderRadius: "20px" }} center={[-33.4076718,-70.5638941]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-33.4076718,-70.5638941]}>
        <Popup>
          21 Grados<br /> Av. Apoquindo #6410
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
