import Typed from 'react-typed'; 
import GetStarted from '../components/GetStarted';
import AboutUs from '../components/AboutUs';
import './infoPage.css';

const infoPage = () =>  {
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
        <GetStarted />
        <AboutUs />
    </div>
    </>
  );
}

export default infoPage;
