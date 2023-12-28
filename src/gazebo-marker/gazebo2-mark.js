
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
  const marker2 = [
    
    {
      geocode: [14.58672, 120.976781],
      //14.58659828398265, 120.9776390651194
      popup2: 'Gazebo 2'
    }
  
  ];
// create custom icon
function Gazebo2Mark() {
    return(
        <>
            <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
            >
            {/* Mapping through the markers */}
            {marker2.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
                <Popup>
                <Link to ={"/gazebo2"}><h2 class="gazebo-title">{marker.popup2}</h2></Link>  {/*css declared in map.css*/}
                </Popup>
            </Marker>
            ))}
            </MarkerClusterGroup>
        </>
    )

}

export default Gazebo2Mark;





