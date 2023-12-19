import ButtonSignUp from '../components/ButtonSignUp';
import './Index.css';
import {Link} from 'react-router-dom';

const InputUID = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "number" placeholder = "Enter User ID">{props.Input}</input>
        </>
    )
}

const InputEmail = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "email" placeholder = "Enter Email">{props.Input}</input>
        </>
    )
}

const InputPW = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "password" placeholder = "Enter Password" >{props.Input}</input>
        </>
    )
}

const InputConPW = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "password" placeholder = "Confirm Password" >{props.Input}</input>
        </>
    )
}



const SignUp = () => {
    return (
        <>
        <html className='htmlsignup'>
            <div className='containersignup'>
                <div className='header'>
                    <div className='signup-title'>Sign Up</div>
                </div>

            <div className='card'>
                <InputUID label={'User ID'}/> 
                <br></br>
                <br></br>
                <InputEmail label={'Email'}/> 
                <br></br>
                <br></br>
                <InputPW label={'Create Password'}/>
                <br></br>
                <br></br>
                <InputConPW label={'Confirm Password'} />
                <br></br>
                <br></br>
                <ButtonSignUp />
                <p>Already Signed?<Link to ="/login" className="login-link"> Log In</Link></p>
                
            </div>
            </div> 
        </html>     
        </>
    )
}

export default SignUp;