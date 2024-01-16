import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Switch, message } from 'antd';

const OccupantList = () => {
  const [occupants, setOccupants] = useState([]);
  const [occupiedCount, setOccupiedCount] = useState(0);

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
        message.success(`Occupant ${isOccupied ? 'vacated' : 'occupied'} successfully!`);
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
      <p>Number of Occupied Occupants: {occupiedCount}</p>
      <ul>
        {occupants.map(occupant => (
          <li key={occupant.id}>
            {occupant.name} - Occupied: {occupant.isOccupied ? 'Yes' : 'No'}
            <Switch
              checked={occupant.isOccupied}
              onChange={() => handleSwitchToggle(occupant.id, occupant.isOccupied, occupant.hasToggled)}
              disabled={false} // Allow switching for all users
            />
          </li>
        ))}
        {!occupants.length && (
          <li>
            Default Occupant - Occupied: No
            <Switch
              checked={false}
              onChange={() => handleSwitchToggle(-1, false, false)}
              disabled={false}
              
              // Allow switching for all users
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default OccupantList;
