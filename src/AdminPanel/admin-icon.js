import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import AdminInfo from "./AdminPanel-info.js"

function InfoIcon(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="info-icon" >
            <button onClick={() => setIsOpen((prev) => !prev)} className="info-btn">
                <BsInfoCircleFill />
            </button>

            {isOpen &&
                <AdminInfo />
            }
        </div>
    )
}

export default InfoIcon;