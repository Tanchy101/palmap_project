
import {Link, Outlet,} from 'react-router-dom';
import {useState} from 'react';
import React from 'react';
import axios from 'axios';
import Logo from './Logo.png';
import {useNavigate} from 'react-router-dom'

const InputEmail = (props) => {
    return (
        <>
        <div className= "text-label"> <label>{props.label}</label> </div>
        <br></br>
        <input autoComplete = "on" type = "text" placeholder ="Enter Email" onChange={props.onChange} >{props.Input}</input>
        </>
    )
}

const Home = () => {

    const [email, setUserId] = useState('');
    const [error, setError] = useState('');
    const navigateUser = useNavigate();

        const handleLogin = async () => {

    
            if(!email){
                setError('Enter an Email Address!');
                return;
            }
            try {
                const response = await axios.post('/api/forgot-pass', {
                    email,
                    });
                console.log('Login successful:', response.data);
                setError('');
                navigateUser('/check');

                } catch (error) {
                setError(error.response.data.error);
                }
            };
    
        return (
            <>
            <html className='htmllogin'>
                <div>
                    <img className='logoLogin' src={Logo} alt='Logo'></img>
                        <div className = "container-forgot">
                            {error && <p style={{ color: '#FF3131d' }}>{error}</p>}
                                <div className = "header-forogt">
                                    <h1 className = "forgot-title">Find Your Account</h1>
                                </div>
                                 <div className = "card">
                                    <InputEmail  label = {'Email'} value={email} onChange={(e) => setUserId(e.target.value)}  />
                                        <br></br><br></br>
                                    <button className="forgot-submit" onClick={handleLogin}>Submit</button>
                                    <p><Link to ="/login" className = "signup-link">Cancel</Link></p>
                                </div>
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