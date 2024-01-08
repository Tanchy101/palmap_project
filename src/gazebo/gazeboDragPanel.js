import React from 'react';
import './gazebo.css'
import { MdPerson } from "react-icons/md";
import { Switch } from "antd"

const GazeboPanel = () => {
    const containerStyle = {
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: '20px 20px 0 0', 
        backgroundColor: '#800000', 
        padding: '10px',
        color: '#fff',
        width: '24.7em', 
      }

      const labelBarStyle = {
        height: '1.5em',
        width: '22em',
        backgroundColor: 'white', 
        borderRadius: '10px',
        margin: '0 auto',
        color: 'black',
        fontFamily: 'Poppins',
      }

      return (
        <div style={containerStyle}>
          <div style={labelBarStyle}><center>Gazebo</center></div>
            <div>
                <span><span className="numberOfOccupants"><MdPerson size={45} className="occupantsLogo"/> 2  <Switch 
                checkedChildren="In"
                unCheckedChildren="Out"
                /> </span>  </span>
            </div>
        </div>
      )
}

export default GazeboPanel
