import React, { useState} from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import './AdminPanel.css';
import {Link} from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import Info from "./admin-icon.js";

import 'leaflet/dist/leaflet.css';

import { useLockBodyScroll } from "@uidotdev/usehooks";



const MapWithGeolocation = () => {
  useLockBodyScroll();

  const plmCenterCoordinates = [14.586685197445647, 120.97632633001342];

  const [position] = useState(plmCenterCoordinates);

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
                    [Building Name]
              </div>
                <div className = "containerContent-admin"> 
                    [Building description and features]
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

      </MapContainer>
      
    </>
  );
};

export default MapWithGeolocation;