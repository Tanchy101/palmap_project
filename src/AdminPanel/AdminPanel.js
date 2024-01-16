import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet';
import './AdminPanel.css';
import {Link} from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import Info from "./admin-icon.js";
import AdminInfo from './AdminPanel-info';
import adminMap from './adminMap.js';



import 'leaflet/dist/leaflet.css';

import { useLockBodyScroll } from "@uidotdev/usehooks";




const customMarkerIcon = new Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});




const MapWithGeolocation = () => {
  // Replace these coordinates with the actual coordinates for Pamantasan ng Lungsod ng Maynila
  const plmCenterCoordinates = [14.586685197445647, 120.97632633001342];


  const [position, setPosition] = useState(plmCenterCoordinates);
  const [map, setMap] = useState(null);
  const [buildingMarker, setBuildingMarker] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => {
        console.error(err.message);
      }
    );
  }, []);

 

  const handleMapLoad = (map) => {
    setMap(map);
  };





  useLockBodyScroll();
  return (
    <>
        

      <div className='map-legend'>
            <Info />
        </div>

      <div className='map-icons'>
        </div>
      <div className='header-admin'>
         <div className="title-admin">
             ADMIN PANEL
         </div>
      </div>

      <html className='html-admin'>
        <div className="logout-admin">
            <div>
                 <Link to ={"/login"} className='logout-icon'>
                    <div>
                       <MdLogout />
                    </div>  
                 </Link>
            </div>
        </div>
            
         <div className ="container-admin">
              <div className = "containerTitle-admin"> 
                    Gusaling what?
              </div>
                <div className = "containerContent-admin"> 
                    Dito ang mga contents.
                </div>

              <Link to ={"/AdminPanel"} className = "update-admin-btn">Update</Link>       
         </div>
      </html>




      <MapContainer className='adm-mapcontainer' center={position} minZoom={15} zoom={19} maxZoom={20}
        dragging={true} scrollWheelZoom={'center'} zoomControl={false} attributionControl={false}>
        <TileLayer
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={20}
        />
        
        


        {buildingMarker}

      </MapContainer>
      
    </>
  );
};

export default MapWithGeolocation;