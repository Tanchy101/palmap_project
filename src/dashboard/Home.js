import LoginAsGuest from '../components/LoginAsGuest';
import './Home.css';
import {Link, Outlet,} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const InputStudID = (props) => {
    return (
        <>
        <div className= "text-label"> <label>{props.label}</label> </div>
        <br></br>
        <input autoComplete = "on" type = "number" placeholder ="Enter User ID" onChange={props.onChange} >{props.Input}</input>
        </>
    )
}

const InputPass = (props) => {
    return (
        <>
        <div className= "text-label"> <label>{props.label}</label> </div>
        <br></br>
        <input type = "password" placeholder = "Enter Password" onChange={props.onChange}>{props.Input}</input>
        </>
    )
}



const Home = () => {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigateUser = useNavigate();
        const handleLogin = async () => {

    
            if(!userId || !password){
                setError('Both user ID and password are required!');
                return;
            }
            try {
                const response = await axios.post('/api/login', {
                    userId,
                    password,
                    });
                console.log('Login successful:', response.data);
                navigateUser("/map");
                setError('');         
            } catch (error) {
              setError(error.response.data.error);
            }
        }
    
        return (
            <>
            <html className='htmllogin'>
                <div className = "container">
                {error && <p style={{ color: '#FF3131d' }}>{error}</p>}
                    <div className = "header-login">
                        <h1 className = "login-title">Log In</h1>
                    </div>

                    <div className = "card">
                        <InputStudID  label = {'User ID'} value={userId} onChange={(e) => setUserId(e.target.value)}  />
                        <br></br><br></br>
                        <InputPass label = {'Password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                        <br></br><br></br>
                        <p><Link to ="/forgotpass" className = "forgot-pass"> Forgot Password</Link></p>
                        <br></br>
                        <button className="login" onClick={handleLogin}>Log In</button>
                        <p>or</p>
                        <LoginAsGuest />
                        <p>New User?<Link to ="/signup" className = "signup-link">Sign Up</Link></p>
                    </div>
                </div>
            </html>
                <main>
                <Outlet />
            </main>
            
        </>
       
    )
}

export default Home