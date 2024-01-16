import Typed from 'react-typed'; 
import './infoPage.css';
import GuestGetStarted from '../components/guestGetStarted';

const GuestInfoPage = () =>  {
  return (
    <>
    <div className="info">
        <div className="welcome">
            <Typed 
            strings ={[
                "Welcome to PaLMap!"
            ]}
            typeSpeed={75}
            />
        </div>
        <div className="container-info">
            <p>PaLMap is a mobile application that enhances navigation inside Pamantasan ng Lungsod ng
            Maynila. With the help of technology of location-based services, this application will allow its users to
            familiarize themselves with some of the university's buildings, laboratories, and offices.</p>
        </div>
        <GuestGetStarted />
    </div>
    </>
  );
}

export default GuestInfoPage;
