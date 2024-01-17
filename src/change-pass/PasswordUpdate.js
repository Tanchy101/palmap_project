import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import Logo from './Logo.png';
import { useNavigate } from 'react-router-dom';

const InputPassForgot = (props) => {
  return (
    <>
        <div className="text-label">
            <label>{props.label}</label>
        </div>
        <br></br>
        <input autoComplete="on" type="password" placeholder="Enter New Password" onChange={props.onChange} />
    </>
  );
};

const InputConfirmPassForgot = (props) => {
  return (
    <>
        <div className="text-label">
            <label>{props.label}</label>
        </div>
        <br></br>
        <input autoComplete="on" type="password" placeholder="Confirm New Password" onChange={props.onChange} />
    </>
  );
};

const Home = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigateUser = useNavigate();

  const handleUpdatePassword = async () => {
    if (!newPassword || !confirmPassword) {
        setError('Both New Password and Confirm Password are required!');
        return;
    }

    if (newPassword !== confirmPassword) {
        setError('Passwords do not match!');
        return;
    }

    try {
        const userEmail = 'actancioco2021@plm.edu.ph';
            const response = await axios.post('/api/update-password', {
                email: userEmail,
                newPassword,
                });

            console.log('Password update successful:', response.data);
            setError('');
            navigateUser('/update-success');

        } catch (error) {
        setError(error.response.data.error || 'An error occurred during password update.');
    }
  };

  return (
    <>
    <html className="htmllogin">
        <div>
            <img className="logoLogin" src={Logo} alt="Logo"></img>
            <div className="container-forgot">
                {error && <p style={{ color: '#FF3131d' }}>{error}</p>}
                    <div className="header-forogt">
                        <h1 className="change-title">Change your Password</h1>
                    </div>
                    
                    <div className="card">
                        <InputPassForgot label={'New Password'} onChange={(e) => setNewPassword(e.target.value)} />
                        <br></br>
                        <br></br>
                        <InputConfirmPassForgot label={'Confirm New Password'} onChange={(e) => setConfirmPassword(e.target.value)} />
                        <br></br>
                        <br></br>
                        <button className="forgot-submit" onClick={handleUpdatePassword}> Submit </button>
                    </div>
            </div>
        </div>
      </html>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Home;
