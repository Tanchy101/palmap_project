import {Link} from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";

const HomeButtonGazebo = () => {
   return(
    <>
        <div className='home-btn'>
            <Link to={"/map"} className="HomeBtnGazebo">
            <div>
                <FaHouse className="house-icon"/>
            </div>Home</Link>
        </div>
        
    </>
    
    )
   
    
}



export default HomeButtonGazebo