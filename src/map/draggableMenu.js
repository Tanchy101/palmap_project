import Draggable from 'react-draggable';
import React from 'react';
import './draggableMenu.css';
import { FaBuilding } from "react-icons/fa";


const SearchBar = (props) => {
  return (
      <input className='not-draggable' autoComplete = "on" type = "text" placeholder ="Where do you want to go?" style={{ border: 'none',}}>{props.Input}</input>
    )
}

const DragDiv = () => {
    const [position, setPosition] = React.useState({ x: 0, y: -100});
  
    const handleDrag = (e, ui) => {
      // const { x, y } = ui;
      // setPosition({ x, y });
      
      const newY = position.y + ui.deltaY;

      const snapTo = [-100, -230]
      const snappedY = snapTo.reduce((closest, snap) => {
        return Math.abs(newY - snap) < Math.abs(closest -snap) ? newY : closest;
      }, snapTo[0]);

      setPosition({ x: 0, y: snappedY });
    };
    
    // const handleStop = () => {
    //     const targetTop = window.innerHeight - 790
    //     setPosition({ x:0, y: targetTop})

    //     const targetMid = window.innerHeight - 1250
    //     setPosition({ x:0, y: targetMid})
    // }

   
    return (
      <Draggable axis='y' position={position} onDrag={handleDrag} handle=".handle" cancel=".not-draggable">
      
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
                <div className="bldg-search-bar"> <SearchBar /> </div>
                <div >
                <div className="bldg-name"> 
                  <FaBuilding className="bldg-logo"/> <a className='bldg-button' href='myProfile'> Gusaling Lacson </a> <br></br> <br></br>

                  <FaBuilding className="bldg-logo"/> <a className='bldg-button' href="myProfile">Gusaling Bagatsing</a> <br></br> <br></br>

                  <FaBuilding className="bldg-logo"/> <a className='bldg-button' href='myProfile'>Gusaling Villegas</a> 
                </div>
                </div>
                  
                </div>
                
             </div>
            
            
        </div>
        
      </Draggable>
    );
  };

export default DragDiv
