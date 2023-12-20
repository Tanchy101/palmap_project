import React from "react";
import {Link} from 'react-router-dom';


function DropDown(){
    return(
        <>
            <div class="dropdown">
            <ul class="dropdown-content" role="menu">
                <li className="delay1"><Link to ={"/myProfile"} className = "myProfile">Profile</Link></li>
                <li className="delay2"><Link to ={"/aboutus"} className = "aboutUs">About</Link></li>
                <li className="delay3"><Link to ={"/login"} className = "logout">Logout</Link></li>
            </ul>
            </div>
            
                
        </>
    )
}



export default DropDown;