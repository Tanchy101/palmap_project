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
        <div className = "container">
            <div className = "header">
                <h1 className = "login-title">Log In</h1>
            </div>

            <div className = "card">
                <InputStudID  label = {'User ID'}  />
                <br></br>
                <InputPass label = {'Password'} />
                <br></br><br></br>
                <ButtonLogin /> 
                <p>or</p>
                <Link to ="/guest" className = "guest-link"><LoginAsGuest /></Link>
                <p>New User ? <Link to ="/signup" className = "signup-link">Sign Up</Link></p>
            </div>
        </div>
        <main>
            <Outlet />
        </main>
        </>
       
    )
}

export default Home