import "./map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import DropMenu from './dropmenu';
import Parking from "../parking/parking";
import {Link} from 'react-router-dom';
import { Icon, divIcon, point} from "leaflet";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};


// markers
const marker1 = [
  
  {
    geocode: [14.58659828398265, 120.9776390651194],
    //14.58659828398265, 120.9776390651194
    popup1: 'gazebo 1'
  }

];
  const marker2 =[
  {
    geocode: [14.58659828398265, 120.977],
    popup2: 'gazebo 2s'
  }
];



export default function App() {
  return (
    <>

        <div className="cntr-drpmn">
          <div>
            <DropMenu />
          </div>
        </div>

    <MapContainer className="root" center={[14.58680,120.97649]} minZoom={19} zoom={19} 
    dragging={false} scrollWheelZoom={'center'} zoomControl={false} attributionControl={false}>

      <Parking/>

      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/way/267200093">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={20}
      />
      {/* WATERCOLOR CUSTOM TILES */}
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
      {/* GOOGLE MAPS TILES */}
      {/* <TileLayer
        attribution="Google Maps"
        // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
        // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
        url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
        maxZoom={20}
        subdomains={["mt0", "mt1", "mt2", "mt3"]}
      /> */}
      

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {marker1.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              <Link to ={"/myProfile"}>{marker.popup1}</Link>
            </Popup>
          </Marker>
        ))}
        {marker2.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>
              <Link to ={"/login"}>{marker.popup2}</Link>
            </Popup>
          </Marker>
        ))}
        
        

        {/* Hard coded markers */}
        {/* <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>This is popup 1</Popup>
        </Marker>
        <Marker position={[51.504, -0.1]} icon={customIcon}>
          <Popup>This is popup 2</Popup>
        </Marker>
        <Marker position={[51.5, -0.09]} icon={customIcon}>
          <Popup>This is popup 3</Popup>
        </Marker>
       */}
      </MarkerClusterGroup>
    </MapContainer>
    </>
  );
}