
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
  const marker1 = [
    
    {
      geocode: [14.58690, 120.97680],
      //14.58659828398265, 120.9776390651194
      popup1: 'Gazebo 1'
    }
  
  ];
// create custom icon
function Gazebo1Mark() {
    return(
        <>
            <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
            >
            {/* Mapping through the markers */}
            {marker1.map((marker) => (
            <Marker position={marker.geocode} icon={customIcon}>
                <Popup>
                <Link to ={"/gazebo1"}><h2 class="gazebo-title">{marker.popup1}</h2></Link>  {/*css declared in map.css*/}
                </Popup>
            </Marker>
            ))}
            </MarkerClusterGroup>
        </>
    )

}

export default Gazebo1Mark;





