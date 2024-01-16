import './gazebo.css'
import backgroundImage from './GazeboBackgroundImage.jpg'
import HomeButtonGazebo from './HomeButtonGazebo'
import GazeboDragPanel from './gazeboDragPanel'
import PolygonWithTrapezoids from './gazeboHexagon'
// import OccupantList from './gazeboFunction'



const GazeboInterface = () => {


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
                {/* try lang muna para sa toggle */}
                {/* <OccupantList/> */}

                <PolygonWithTrapezoids />
                <GazeboDragPanel />
            </div>
        </>
    )
}

export default GazeboInterface