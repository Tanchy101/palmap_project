import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import { Icon } from 'leaflet';


import 'leaflet/dist/leaflet.css';

import { useLockBodyScroll } from "@uidotdev/usehooks";
import Legend from '../parking/legend-icon';
import GuestDropMenu from './guestDropmenu';
import Parking from "../parking/parking";
import GuestDragDiv from './guestDraggablemenu';


import "./map.css";

import { MdOutlineGpsFixed } from "react-icons/md";



const customMarkerIcon = new Icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const buildingCoordinates = {
  //buildings
  atienza: [14.586240916828295, 120.97694470083314],
  bagatsing: [14.587199229365767, 120.97588527123013],
  caquino: [14.587248069613732, 120.97691117321793],
  eestrada: [14.586297051834032, 120.97683082288495],
  katipunan: [14.58741582150116, 120.97645397253115],
  lacson: [14.586593412262898, 120.97586313921279],
  villegas: [14.587013856624457, 120.97699338003919],

  //facilities
  cashier: [14.586416042719083, 120.97701585406797],
  chapel: [14.586037070923469, 120.97629840054806],
  entcenter: [14.586231104119165, 120.97598458209953],
  icto: [14.587218884414666, 120.97681189572319],
  jaaditorium: [14.586424101332044, 120.97595502827402],
  registrar: [14.587491280981853, 120.97625063119077],
  rsgym: [14.58690553933514, 120.97557715334926],
  tbayan: [14.586750928893508, 120.97658503975529],

  //others
  canteen: [14.587149218167333, 120.97669688700499]
}



const GuestMap = () => {
  // Replace these coordinates with the actual coordinates for Pamantasan ng Lungsod ng Maynila
  const plmCenterCoordinates = [14.586685197445647, 120.97632633001342];

  // Replace these coordinates with the actual bounds for Pamantasan ng Lungsod ng Maynila
  const plmBounds = {
    minLat: 14.58581, // Adjust as needed
    maxLat: 14.58785, // Adjust as needed
    minLng: 120.975272, // Adjust as needed
    maxLng: 120.97762, // Adjust as needed
  };

  const plmPolygonCoordinates = [
    [plmBounds.minLat, plmBounds.minLng],
    [plmBounds.maxLat, plmBounds.minLng],
    [plmBounds.maxLat, plmBounds.maxLng],
    [plmBounds.minLat, plmBounds.maxLng]
  ];

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

  const handleGeolocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        if (
          latitude >= plmBounds.minLat &&
          latitude <= plmBounds.maxLat &&
          longitude >= plmBounds.minLng &&
          longitude <= plmBounds.maxLng
        ) {
          setPosition([latitude, longitude]);

          if (map) {
            map.flyTo([latitude, longitude], 16, {
              duration: 2,
            });
          }
        } else {
          alert('You are outside the bounds of Pamantasan ng Lungsod ng Maynila.');
        }
      },
      (err) => {
        console.error(err.message);
      }
    );
  };

  const handleMapLoad = (map) => {
    setMap(map);
  };

  const handleBuildingClick = (buildingName) => {
    console.log("building clicked: ", buildingName)

  const clickedBuildingCoords = buildingCoordinates[buildingName];

    setBuildingMarker(<Marker position={clickedBuildingCoords} icon={customMarkerIcon}></Marker>);
  }

  useLockBodyScroll();
  return (
    <>
        
      <div className='map-icons'>
        <div className="cntr-drpmn">
            <div>
              <GuestDropMenu />
            </div>
          </div>

          <div className='map-legend'>
            <Legend />
          </div>
        </div>

        <button className='gps-btn' onClick={handleGeolocationClick}><MdOutlineGpsFixed/></button>

      <MapContainer className='root' center={position} minZoom={18} zoom={19} maxZoom={20}
        dragging={true} scrollWheelZoom={'center'} zoomControl={false} attributionControl={false} whenCreated={handleMapLoad}>
        <TileLayer
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={20}
        />
        <Marker position={position} icon={customMarkerIcon}>
          <Popup>You are here!</Popup>
        </Marker>

        {buildingMarker}

        <Polygon positions={plmPolygonCoordinates} color='blue'/>

      <Parking />

      </MapContainer>
      
      <GuestDragDiv onBuildingClick={handleBuildingClick} />
    </>
  );
};

export default GuestMap;