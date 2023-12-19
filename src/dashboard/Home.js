import ButtonLogin from '../components/ButtonLogin';
import LoginAsGuest from '../components/LoginAsGuest';
import './Home.css';
import {Link, Outlet} from 'react-router-dom';



const InputStudID = (props) => {
    return (
        <>
        <div className= "text-label"> <label>{props.label}</label> </div>
        <br></br>
        <input type = "number" placeholder ="Enter User ID" >{props.Input}</input>
        </>
    )
}

const InputPass = (props) => {
    return (
        <>
        <div className= "text-label"> <label>{props.label}</label> </div>
        <br></br>
        <input type = "password" placeholder = "Enter Password">{props.Input}</input>
        </>
    )
}



const Home = () => {
    
    return (
        <>
        <html className='htmllogin'>
            <div className = "container">
                <div className = "header">
                    <h1 className = "login-title">Log In</h1>
                </div>

                <div className = "card">
                    <InputStudID  label = {'User ID'}  />
                    <br></br><br></br>
                    <InputPass label = {'Password'}  />
                    <br></br><br></br>
                    <p><Link to ="/forgotpass" className = "forgot-pass"> Forgot Password</Link></p>
                    <br></br>
                    <ButtonLogin /> 
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