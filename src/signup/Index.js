import './Index.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';


const InputUID = (props) => {
    return (
        <>
        <label>{props.label}
        <br></br>
        <input autocomplete = "on" type = "number" placeholder = "Enter User ID" onChange={props.onChange} >{props.Input}</input>
        </label>
        </>
    )
}

const InputEmail = (props) => {
    return (
        <>
        <label>{props.label}
        <br></br>
        <input  autocomplete = "on" type = "email" placeholder = "Enter Email" onChange={props.onChange}>{props.Input}</input>
        </label>
        </>
    )
}

const InputPW = (props) => {
    return (
        <>
        <label>{props.label}
        <br></br>
        <input type = "password" placeholder = "Enter Password" onChange={props.onChange} >{props.Input}</input>
        </label>
        </>
    )
}

const SignUp = () => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = async () => {

        if (!userId || !password || !confirmPassword || !email) {
            setError('All fields are required!!');
            return;
          }
        
        if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
        }
        
        try {
          const response = await axios.post('/api/signup', {
            userId,
            email,
            password,
            confirmPassword,
          });
          console.log('User created:', response.data);
          setError('');
        } catch (error) {
            setError(error.response.data.error ?? error.message);
        }
      };
    
    
    return (
        <>
        <html className='htmlsignup'>
            <div className='containersignup'>
            {error && <p style={{color: '#FF3131'}}>{error}</p>}
                <div className='header'>
                    <div className='signup-title'>Sign Up</div>
                </div>
            
            <div className='card'>
                <InputUID label={'User ID'} value={userId} onChange={(e) => setUserId(e.target.value)}/> 
                <br></br>
                <br></br>
                <InputEmail  label={'Email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <br></br>
                <InputPW label={'Create Password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <br></br>
                <InputPW label={'Confirm Password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <br></br>
                <br></br>
                <button className = "register" onClick={handleSignup}> Register </button>
                <p>Already Signed?<Link to ="/login" className="login-link"> Log In</Link></p>
            </div>
            </div> 
        </html>     
        </>
    )
}

export default SignUp;
