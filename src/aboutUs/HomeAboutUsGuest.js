import {Link} from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";

const HomeAboutUsGuest = () => {
   return(
    <>
        <div className='home-btn'>
            <Link to={"/guestMap"} className="HomeBtnAbout">
            <div>
                <FaHouse className="house-icon"/>
            </div>Home</Link>
        </div>
        
    </>
    
    )
}



export default HomeAboutUsGuest;