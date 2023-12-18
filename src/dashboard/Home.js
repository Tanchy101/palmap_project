import ButtonLogin from '../components/ButtonLogin';
import LoginAsGuest from '../components/LoginAsGuest';
import './Home.css';
import {Link, Outlet} from 'react-router-dom';


const InputEme = (props) => {
    return (
        <>
        <label>{props.label}</label>
        <br></br>
        <input type = "number" >{props.Input}</input>
        </>
    )
}



const Home = () => {
    
    return (
        <>
        <div className = "container">
            <div className = "header">
                <h1 className = "login-title">Login</h1>
            </div>

            <div className = "card">
                <InputEme label = {'User ID'}/>
                <br></br>
                <InputEme label = {'Password'} />
                <br></br><br></br>
                <ButtonLogin /> 
                <p>or</p>
                <LoginAsGuest />
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