import React from 'react';
import './gazebo.css'
import { MdPerson } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Switch } from "antd"
import {Link} from 'react-router-dom';

const GazeboPanel11 = () => {
      return (
        <div className="gazebo-container">
          <div className='upper-part'>
            <div>
                <Link to={"/gazebo10"} className="arrow-left">
                  <div>
                    <MdArrowBackIos className="arrow-left-icon"/>
                  </div>
                </Link>
              </div>

              <div className="gazebo-label">Gazebo 11</div>

              <div>
                <Link to={"/gazebo12"} className="arrow-right">
                  <div>
                    <MdArrowForwardIos className="arrow-right-icon"/>
                  </div>
                </Link>
              </div>
              
          </div>
              <div className="gazebo-content">
                <span className="numberOfOccupants"><MdPerson size={40} className="occupantsLogo"/> 2 </span>
                  <span className="toggle" >
                    <Switch size="large"
                    checkedChildren="IN"
                    unCheckedChildren="OUT"
                    /> 
                  </span>
              </div>
        </div>
      )
}

export default GazeboPanel11
