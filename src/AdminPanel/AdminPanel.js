import './AdminPanel.css';
import {Link} from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";





const Profile = () => {
    return (
       <>

       <html className='html-admin'>
       <div className="logout-admin">
                <div>
                <Link to ={"/login"} className='logout-icon'>
                    <div>
                    <MdLogout />
                    </div>  
                </Link>
                    </div>

                <div>
                <Link to ={"/login"} className='logout-icon'>
                    <div>
                    <BsInfoCircleFill />
                    </div>  
                </Link>
                    </div>
                </div>

           
        <div className="header-admin">
            <div className="title-admin">
             ADMIN PANEL
            </div>
        </div>

        <div className ="container-admin">
                <div className = "containerTitle-admin"> 
                    Gusaling what?
                </div>
                    <Link to ={"/AdminPanel"} className = "update-admin-btn">Update</Link>
               
        </div>
       </html> 
        </>

    )
}







export default Profile; 