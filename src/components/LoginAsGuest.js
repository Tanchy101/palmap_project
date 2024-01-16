import {Link} from 'react-router-dom';


const LoginAsGuest = () => {
    return (
        <Link to ={'/guestinfo'} className = "lguest">Login as Guest</Link> 
        
    )
}

export default LoginAsGuest;