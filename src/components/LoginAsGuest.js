import {Link} from 'react-router-dom';

const LoginAsGuest = () => {
    return (
        <Link to ={"/guest"} className = "lguest">Login as Guest</Link> 
        
    )
}

export default LoginAsGuest;