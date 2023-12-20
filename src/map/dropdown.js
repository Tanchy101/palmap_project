import React from "react";
import {Link} from 'react-router-dom';


function DropDown(){
    return(
        <>
            <div className="drpmn">
            <Link to ={"/myProfile"} className = "myProfile"><button>Profile</button></Link>
                <button>About</button>
                <button>Logout</button>
            </div>
        </>
    )
}

export default DropDown;