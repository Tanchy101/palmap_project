import './gazebo.css'
import backgroundImage from './GazeboBackgroundImage.jpg'
import HomeButtonGazebo from './HomeButtonGazebo'
import GazeboDragPanel13 from './gazeboDragPanel13'

const GazeboInterface13 = () => {
    return(
        <>
            {/* Here is the code for the gazebo UI*/}
            <div className="background-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
            }}> <HomeButtonGazebo />
                <GazeboDragPanel13 />
                <h2>DITO YUNG MAY HEXAGON</h2>
            </div>
        </>
    )
}

export default GazeboInterface13