import ButtonProfile from '../components/ButtonProfile';
import './myProfile.css';
import {Link} from 'react-router-dom';

const InputFname = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "text" placeholder = "Enter Name">{props.Input}</input>
        </>
    )
}

const InputLname = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "text" placeholder = "Enter Last Name">{props.Input}</input>
        </>
    )
}

const InputStudnum = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "number" placeholder = "Enter Student Number" >{props.Input}</input>
        </>
    )
}

const InputCollege = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "text" placeholder = "Select College" >{props.Input}</input>
        </>
    )
}

const Inputmail = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "text" placeholder = "Enter Email" >{props.Input}</input>
        </>
    )
}

const InputOpass = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "number" placeholder = "Enter Old Password" >{props.Input}</input>
        </>
    )
}

const InputNpass = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "number" placeholder = "Enter New Password" >{props.Input}</input>
        </>
    )
}

const InputCpass = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "number" placeholder = "Enter Confirm Password" >{props.Input}</input>
        </>
    )
}


const Profile = () => {
    return (
       <>
       <html className='htmlmyProfile'>
                <div className='containerProfile'>
                    <div className='header'>
                    <div className='myProfile-title'>My Profile</div>
                    </div>
    
 
                <h3>USER INFORMATION</h3>
                    
                


                <Link to ="/profile" className="profile-link"> Submit</Link>
                <br></br>
                <br></br>
                
                <h3>CHANGE PASSWORD</h3>
                <InputOpass label={'First Name'}/> 
                <br></br>
                <InputNpass label={'Last Name'}/> 
                <br></br>
                <InputCpass label={'Student Number'}/>
                <br></br>
                <Link to ="/profile" className="profile-link"> Change Password</Link>
            
            </div>
        </html>  
       </>

    )
}

export default Profile;