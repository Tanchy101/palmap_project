import {Link} from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";

const HomeAboutUs = () => {
   return(
    <>
        <div className='home-btn'>
            <Link to={"/map"} className="HomeBtnAbout">
            <div>
                <FaHouse className="house-icon"/>
            </div>Home</Link>
        </div>
        
    </>
    
    )
}



export default HomeAboutUs;