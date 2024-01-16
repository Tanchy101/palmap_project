import React from 'react';
import './gazebo.css'
import { MdPerson } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Switch } from "antd"
import {Link} from 'react-router-dom';

import { useState, useEffect } from 'react';
import axios from 'axios';
import {  message } from 'antd';

const OccupantList = () => {
  const [occupants, setOccupants] = useState([]);
  const [occupiedCount, setOccupiedCount] = useState(0);
  const [showRedSquare, setShowRedSquare] = useState(false);

  useEffect(() => {
    // Fetch occupants from the database
    const fetchOccupants = async () => {
      try {
        const response = await axios.get('/api/getOccupants');
        setOccupants(response.data);
      } catch (error) {
        console.error('Error fetching occupants:', error);
      }
    };

    // Fetch the number of occupied occupants from the database
    const fetchOccupiedCount = async () => {
      try {
        const response = await axios.get('/api/getOccupiedCount');
        setOccupiedCount(response.data.occupiedCount);
      } catch (error) {
        console.error('Error fetching occupied count:', error);
      }
    };

    fetchOccupants();
    fetchOccupiedCount();
  }, []);

  const handleSwitchToggle = async (id, isOccupied, hasToggled) => {
    try {
      // Check if the switch has already been toggled for this occupant
      if (hasToggled) {
        // Toggle the 'isOccupied' field in the database
        await axios.post('/api/updateOccupant', { id, isOccupied, hasToggled });

        // Update the local state to reflect the change
        setOccupants(prevOccupants =>
          prevOccupants.map(occupant => (occupant.id === id ? { ...occupant, isOccupied: !isOccupied } : occupant))
        );

        // Update the occupied count
        setOccupiedCount(prevCount => (isOccupied ? prevCount - 1 : prevCount + 1));

        // Show a success message
        message.success(`You have ${isOccupied ? 'vacated' : 'occupied'} this Gazebo!`);
        setShowRedSquare(!isOccupied);
      } else {
        // Show a warning message if the switch has already been toggled
        message.warning('Switch already toggled for this occupant.');
      }
    } catch (error) {
      console.error('Error toggling switch:', error);
      // Show an error message
      message.error('Error toggling switch. Please try again.');
    }
  };

  return (
   
    <div>
      
      <MdPerson size={40} className="occupantsLogo"/> <span style={{paddingRight: '10px', marginLeft: '-10px', fontSize: '25px',}}>{occupiedCount}</span>
      
        {occupants.map(occupant => (
          <span key={occupant.id} >
            <span style={{marginLeft: '140px', fontSize: '19px'}}>Occupied: {occupant.isOccupied ? 'Yes' : 'No'}
            <Switch
              checked={occupant.isOccupied}
              onChange={() => handleSwitchToggle(occupant.id, occupant.isOccupied, occupant.hasToggled)}
              disabled={false} // Allow switching for all users
            /></span>
          </span> 
        ))}
        {!occupants.length && (
         <span>
            <Switch
              checked={false}
              onChange={() => handleSwitchToggle(-1, false, false)}
              disabled={false}
            /></span>
            
         
        )}
      {showRedSquare && (
        <div style={{ width: '2.8em', height: '4.56em', backgroundColor: 'brown', marginLeft: '2.5em', transform: 'translateX(1px) translateY(-365px)', }}>
          {/* Little red square */}
        </div>
      )}
      
    </div>
  );
};



// hereeee is the orig code
const GazeboPanel = () => {
      return (
        <div className="gazebo-container">
          <div className='upper-part'>
            <div>
                <Link className="arrow-left-1">
                  <div>
                    <MdArrowBackIos className="arrow-left-icon"/>
                  </div>
                </Link>
              </div>

              <div className="gazebo-label">Gazebo 1</div>

              <div>
                <Link to={"/gazebo2"} className="arrow-right">
                  <div>
                    <MdArrowForwardIos className="arrow-right-icon"/>
                  </div>
                </Link>
              </div>

          </div>
              <div className="gazebo-content">
               <OccupantList />
              </div>
        </div>
      )
}

export default GazeboPanel
