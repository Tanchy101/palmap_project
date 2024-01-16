
import {Link, Outlet,} from 'react-router-dom';
import React from 'react';
import Logo from './Logo.png';

const Home = () => {
    
        return (
            <>
            <html className='htmllogin'>
                <div>
                    <img className='logoLogin' src={Logo} alt='Logo'></img>
                        <div className = "container-forgot">
                                <div className = "header-forogt">
                                    <h1 className = "forgot-title">Find Your Account</h1>
                                </div>
                                
                                 <div className = "card">
                                    <p className = "forgot-valid">Kindly check your email and click the verification code to change your password </p>
                                    <a href="https://mail.google.com" target="_blank" rel="noreferrer" className="email-link"><button className="forgot-submit">Check Email</button></a>
                                    <p><Link to ="/login" className = "signup-link">Back to Login</Link></p>
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