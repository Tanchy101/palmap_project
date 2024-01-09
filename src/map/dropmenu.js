import React, { useState } from "react";
import './dropmenu.css';
import DropDown from './dropdown.js';

function DropMenu(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="menubtn" >
            <button onClick={() => setIsOpen((prev) => !prev)} className="plmpbtn">
                PaLMap
            </button>

            {isOpen &&
                <DropDown />
            }

        </div>
    )
}

export default DropMenu;