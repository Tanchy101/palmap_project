
import './myProfile.css';
import {Link} from 'react-router-dom';

const containerStyle = {
    background: 'linear-gradient(rgba(128,0,0, 0.8), rgba(110, 12, 14)), url("C:\Users\Jenie O. Tadena\OneDrive\Documents\palmap\palmap_project\public\plmimage.png")',
    backgroundSize: 'cover',
    color: 'red', // Text color
    height: '40vh', // Adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    aligncontent: 'center',
    alignItems: 'center',
  };



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

const InputStunum = (props) => {
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

const InputEmail = (props) => {
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
        <input type = "number" placeholder = "Confirm Password" >{props.Input}</input>
        </>
    )
}

  

const Profile = () => {
    return (
       <>
       <html className='htmlmyProfile'>
                     <div className='header' style={containerStyle}>
                          <div className='myProfile-title'>My Profile</div>
                          </div>
                            <h5 className='heading'>USER INFORMATION</h5>
                         <div className='containerProfile'>
                                <div className="info">
                               <InputFname label={'First Name'}/>
                                 </div>
                                  <div className="info" >
                               <InputLname label={'Last Name'}/> 
                                   </div>
                                </div>

                         <div className='containerUserinfo'>  
                                <div className="info">
                               <InputStunum label={'Student Number'}/>
                                  </div> 
                                  <div className="info">
                                <InputCollege label={'College'}/>
                                </div>
                              <br></br>
                              </div>
                              <div className="info-Email">
                                <InputEmail label={'Email'}/>
                                </div>
                              
                             <Link to ="/profile" className="profile-link"> Submit</Link>
                        
                            
                     
                
                             <h5 className='heading'>CHANGE PASSWORD</h5>
                         <div className='containerChangepass'>
                                <div className="pass">
                                <InputOpass label={'Enter Old Password'}/>
                                   <br></br>
                                     </div>

                                <div className="pass">
                                <InputNpass label={'Enter New Password'}/> 
                                    <br></br>
                                    </div>

                                <div className="pass">
                                <InputCpass label={'Confirm Password'}/>
                                    <br></br>
                                      </div>
                                     </div>

                              <Link to ="/profile" className="profile-link"> Change Password</Link>
    
        </html>  
       </>

    )
}

export default Profile;