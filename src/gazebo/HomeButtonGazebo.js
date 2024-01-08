import {Link} from 'react-router-dom';
import { MdOutlineArrowBackIos } from "react-icons/md";

const HomeButtonGazebo = () => {
   return(
    <>
        
        <span><MdOutlineArrowBackIos style={{color: "white"}}/><Link to={"/map"} className="HomeBtnGazebo">Home</Link></span>
    </>
    
    )
   
    
}



export default HomeButtonGazebo