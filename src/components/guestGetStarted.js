import {Link} from 'react-router-dom';

const GuestGetStarted = () => {
    return (
        <Link to ={"/guestMap"} className = "start">Start as Guest</Link>
    )
}

export default GuestGetStarted;