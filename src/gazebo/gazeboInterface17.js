import './gazebo.css'
import backgroundImage from './GazeboBackgroundImage.jpg'
import HomeButtonGazebo from './HomeButtonGazebo'
import GazeboDragPanel17 from './gazeboDragPanel17'

const GazeboInterface17 = () => {
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
                <GazeboDragPanel17 />
                <h2>DITO YUNG MAY HEXAGON</h2>
            </div>
        </>
    )
}

export default GazeboInterface17