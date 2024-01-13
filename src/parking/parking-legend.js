import React from "react";
import { FaSquare } from "react-icons/fa6";
import "./legend.css";


function ParkingLegend(){
    return(
        <>
            <div class="park-legend">
                <ul class="legend-content" role="menu">
                    <h1 className="legend-title">LEGEND: </h1>
                    <li><FaSquare className="park-motor"/><p className="text-motor">Motorcycle</p></li>
                    <li><FaSquare className="park-car"/> <p className="text-car">Car</p></li>
                </ul>
            </div>
            
                
        </>
    )
}



export default ParkingLegend;