import './gazebo.css'
import backgroundImage from './GazeboBackgroundImage.jpg'
import HomeButtonGazebo from './HomeButtonGazebo'
import GazeboDragPanel7 from './gazeboDragPanel7'
import PolygonWithTrapezoids from './gazeboHexagon'

const GazeboInterface7 = () => {
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
                <PolygonWithTrapezoids />
                <GazeboDragPanel7 />
                <h2>DITO YUNG MAY HEXAGON</h2>
            </div>
        </>
    )
}

export default GazeboInterface7