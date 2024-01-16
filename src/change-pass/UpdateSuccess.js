
import {Link, Outlet,} from 'react-router-dom';
import React from 'react';
import Logo from './Logo.png';

const Home = () => {
    
                    return (
                        <>
                        <html className="htmllogin">
                            <div>
                                <img className="logoLogin" src={Logo} alt="Logo"></img>
                            <div className="container-forgot">
                                <div className="header-forogt">
                                    <h1 className="change-title">Change your Password</h1>
                                </div>

                                 <div className = "card">
                                    <p className = "forgot-valid">Password updated successfully.  </p>
                                    <Link to ={"/login"} className = "back-to">Back to Login</Link>
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