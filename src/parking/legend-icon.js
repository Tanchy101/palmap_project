import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Legend from "./parking-legend.js"

function ParkLegend(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="legend" >
            <button onClick={() => setIsOpen((prev) => !prev)} className="legend-btn">
                <BsInfoCircleFill />
            </button>

            {isOpen &&
                <Legend />
            }
        </div>
    )
}

export default ParkLegend;