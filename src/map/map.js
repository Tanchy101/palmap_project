import "./map.css";
import "leaflet/dist/leaflet.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { MapContainer, TileLayer} from "react-leaflet";
import DropMenu from './dropmenu';
import Parking from "../parking/parking";
import DragDiv from './draggableMenu';
import Gazebo1Mark from "../gazebo-marker/gazebo1-mark";
import Gazebo2Mark from "../gazebo-marker/gazebo2-mark";
import Gazebo3Mark from "../gazebo-marker/gazebo3-mark";
import Gazebo4Mark from "../gazebo-marker/gazebo4-mark";
import Gazebo5Mark from "../gazebo-marker/gazebo5-mark";
import Gazebo6Mark from "../gazebo-marker/gazebo6-mark";
import Gazebo7Mark from "../gazebo-marker/gazebo7-mark";
import Gazebo8Mark from "../gazebo-marker/gazebo8-mark";
import Gazebo9Mark from "../gazebo-marker/gazebo9-mark";
import Gazebo10Mark from "../gazebo-marker/gazebo10-mark";
import Gazebo11Mark from "../gazebo-marker/gazebo11-mark";
import Gazebo12Mark from "../gazebo-marker/gazebo12-mark";
import Gazebo13Mark from "../gazebo-marker/gazebo13-mark";
import Gazebo14Mark from "../gazebo-marker/gazebo14-mark";
import Gazebo15Mark from "../gazebo-marker/gazebo15-mark";
import Gazebo16Mark from "../gazebo-marker/gazebo16-mark";
import Gazebo17Mark from "../gazebo-marker/gazebo17-mark";
import Gazebo18Mark from "../gazebo-marker/gazebo18-mark";


export default function App() {
  useLockBodyScroll();
  return (
    <>

        <div className="cntr-drpmn">
          <div>
            <DropMenu />
          </div>
        </div>

    <MapContainer className="root" center={[14.58680,120.97649]} minZoom={19} zoom={19} 
    dragging={true} scrollWheelZoom={'center'} zoomControl={false} attributionControl={false}>

      <Parking/>
      

      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        //url="http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // ==> original tile
        maxZoom={20}
      />

      <Gazebo1Mark/>
      <Gazebo2Mark/>
      <Gazebo3Mark/>
      <Gazebo4Mark/>
      <Gazebo5Mark/>
      <Gazebo6Mark/>
      <Gazebo7Mark/>
      <Gazebo8Mark/>
      <Gazebo9Mark/>
      <Gazebo10Mark/>
      <Gazebo11Mark/>
      <Gazebo12Mark/>
      <Gazebo13Mark/>
      <Gazebo14Mark/>
      <Gazebo15Mark/>
      <Gazebo16Mark/>
      <Gazebo17Mark/>
      <Gazebo18Mark/>

    </MapContainer>
    
    <DragDiv/>

      
    
    </>
  );
}