import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import info from "./AdminPanel.js"

function InfoIconAdmin(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="info-admin-btn" >
            <button onClick={() => setIsOpen((prev) => !prev)} className="info-admin-content">
                <BsInfoCircleFill />
            </button>

            {isOpen &&
                <InfoIconAdmin />
            }
        </div>
    )
}

export default InfoIconAdmin;





