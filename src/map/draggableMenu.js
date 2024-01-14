import Draggable from 'react-draggable';
import React from 'react';
import './draggableMenu.css';
import { FaBuilding } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const SearchBar = (props) => {
  return (
      <input className='not-draggable' autoComplete = "on" type = "text" placeholder ="Where do you want to go?" style={{ border: 'none',}}>{props.Input}</input>
    )
}

const DragDiv = (props) => {
    const [position, setPosition] = React.useState({ x: 0, y: -110});
  
    const handleDrag = (e, ui) => {
      // const { x, y } = ui;
      // setPosition({ x, y });
      
      const newY = position.y + ui.deltaY;

      const snapTo = [-100, -370]
      const snappedY = snapTo.reduce((closest, snap) => {
        return Math.abs(newY - snap) < Math.abs(closest -snap) ? newY : closest;
      }, snapTo[0]);

      setPosition({ x: 0, y: snappedY });
    };
   
    return (
      <Draggable axis='y' position={position} onDrag={handleDrag} handle=".handle" bounds = {{top: -350}}cancel=".not-draggable">
      
        <div>
            <div className="handle"></div>
             <div className="bldg-container">
                <div
                  style={{
                      position: 'absolute',
                      width: '100%',
                      height: '35em',
                      backgroundColor: '#800000',
                      borderRadius: '25px',
                      cursor: 'grab',
                      zIndex: '1',
                      opacity: '90%',
                      color: 'black',
                  }}
                >
                <div className='top'>

                  <div className="bldg-search-bar"> 
                    <SearchBar /> 
                  </div>

                </div>
                
                <div>
                <div className="bldg-name">
                  <div className='scroll-container'>

                    <h4>Buildings</h4>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('atienza')}> Gusaling Atienza</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('bagatsing')}>Gusaling Bagatsing</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('caquino')}>Gusaling Corazon Aquino</a> <br></br> <br></br>
                  
                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('eestrada')}> Gusaling Ejercito Estrada</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('katipunan')}>Gusaling Katipunan</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('lacson')}>Gusaling Lacson</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('villegas')}>Gusaling Villegas</a> <br></br> <br></br>

                    <h4>Facilities</h4>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('cashier')}> Cashier</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('chapel')}>Chapel</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('entcenter')}>Entrep. Center</a> <br></br> <br></br>
                  
                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('gazebos')}>Gazebos</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('icto')}>ICTO</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('jaaditorium')}>J.A. Auditorium</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('registrar')}>Registrar</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('rsgym')}>R.S. Gym</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('tbayan')}>Tanghalang Bayan</a> <br></br> <br></br>

                    <h4>Others</h4>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('canteen')}>Canteen</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a className='bldg-button' onClick={() => props.onBuildingClick('parking')}>Parking</a>

                  </div>
                </div>
                </div>
                  
                </div>
                
             </div>
            
            
        </div>
        
      </Draggable>
    );
  };

export default DragDiv
