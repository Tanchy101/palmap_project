import {Link} from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";

const ProfileHome = () => {
   return(
    <>
        <div className='home-btn'>
            <Link to={"/map"} className="HomeBtnProf">
            <div>
                <FaHouse className="house-icon-prof"/>
            </div></Link>
        </div>
        
    </>
    
    )
}



export default ProfileHome;