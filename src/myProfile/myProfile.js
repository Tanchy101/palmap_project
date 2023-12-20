
import './myProfile.css';
import {Link} from 'react-router-dom';



const InputFname = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className="input-fName" type = "text" placeholder = "Name">{props.Input}</input>
        </>
    )
}

const InputLname = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className = "input-lName" type = "text" placeholder = "Last Name">{props.Input}</input>
        </>
    )
}

const InputStunum = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className = "input-studNum" type = "number" placeholder = "Student Number" >{props.Input}</input>
        </>
    )
}

const InputCollege = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className = "input-college" type = "text" placeholder = "College" >{props.Input}</input>
        </>
    )
}

const InputEmail = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className ="input-Email" type = "text" placeholder = "Email" >{props.Input}</input>
        </>
    )
}


const InputOpass = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className="input-oldPass" type = "number" placeholder = "Old Password" >{props.Input}</input>
        </>
    )
}

const InputNpass = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className="input-newPass" type = "number" placeholder = "New Password" >{props.Input}</input>
        </>
    )
}

const InputCpass = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input className="input-conPass" type = "number" placeholder = "Confirm Password" >{props.Input}</input>
        </>
    )
}

  

const Profile = () => {
    return (
       <>
       <html className='htmlmyProfile'>
            <div className="header">
                <p className="profile-title">My Profile</p>
            </div>
            <div className="row">
                <div className = "container-left">
                    <p className = "user-title">USER INFORMATION</p>

                    <div className='container-input-profile'>
                        <div className="input-fName">
                            <InputFname label={'First Name'}/>
                        </div>

                        <div className="input-lName">
                            <InputLname label={'Last Name'}/> 
                        </div>

                        <div className="input-Email">
                            <InputEmail label={'Email'}/>
                        </div>

                        <Link to ={"/myProfile"} className = "submit-btn">Submit</Link>
                    
                    </div>

                    <p className = "password-title">CHANGE PASSWORD</p>

                    <div className='container-input-password'>
                        <div className="input-oldPass">
                            <InputOpass label={'Enter Old Password'}/>
                        </div>

                        <div className="input-newPass">
                            <InputNpass label={'Enter New Password'}/> 
                        </div>
                        
                        <div className="input-conPass">
                            <InputCpass label={'Confirm Password'}/>
                        </div>
                        <Link to ={"/myProfile"} className = "submit-btn">Submit</Link>
                    </div>
                </div>


                <div className = "container-right">
                    <div className='container-input-student'>
                        <div className="input-studNum">
                            <InputStunum label={'Student Number'}/>
                        </div> 
                        
                        <div className="input-college">
                            <InputCollege label={'College'}/>
                        </div>
                    </div>
                </div>
            </div>
        </html> 
       </>

    )
}

export default Profile;