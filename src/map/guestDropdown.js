import React from "react";
import {Link} from 'react-router-dom';


function GuestDropDown(){
    return(
        <>
            <div class="dropdown">
            <ul class="dropdown-content" role="menu">
                <li className="delay2"><Link to ={"/aboutus"} className = "guestaboutUs">About</Link></li>
                <li className="delay3"><Link to ={"/login"} className = "logout">Logout</Link></li>
            </ul>
            </div>
            
                
        </>
    )
}


export default GuestDropDown;