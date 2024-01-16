import React, { useState } from "react";
import './guestDropmenu.css';
import GuestDropDown from './guestDropdown.js';

function GuestDropMenu(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="menubtn" >
            <button onClick={() => setIsOpen((prev) => !prev)} className="plmpbtn">
                PaLMap
            </button>

            {isOpen &&
                <GuestDropDown />
            }

        </div>
    )
}

export default GuestDropMenu;