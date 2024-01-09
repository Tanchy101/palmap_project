
import { Icon, divIcon, point} from "leaflet";
import {Marker, Popup} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {Link} from 'react-router-dom';


const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: require("./placeholder.png"),
    iconSize: [32, 32] // size of the icon
  });
  
  // custom cluster icon
const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33)
    });
  };
  
  // marker
  const marker3 = [
    
    {
      geocode: [14.58659, 120.97674],
      //14.58659828398265, 120.9776390651194
      popup3: 'Gazebo 3'
    }
  
  ];
// create custom icon
function Gazebo3Mark() {
    return(
        <>
            <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
            >
            {/* Mapping through the markers */}
            {marker3.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
                <Popup>
                <Link to ={"/gazebo3"}><h2 class="gazebo-title">{marker.popup3}</h2></Link>  {/*css declared in map.css*/}
                </Popup>
            </Marker>
            ))}
            </MarkerClusterGroup>
        </>
    )

}

export default Gazebo3Mark;





