import Draggable from 'react-draggable';
import React from 'react';
import './draggableMenu.css';
import { useState } from 'react';

const CustomButton = ({ label, onClick }) => (
  <div className='buttonsForSearch'>
    <button onClick={onClick} className='buttonsInSearch'>
      {label}
    </button>
  </div>
);

const SearchBar = ({ buttons }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredButtons = buttons.filter(
    (button) => button.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <input className='not-draggable' autoComplete = "on" value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} type = "text" placeholder ="Where do you want to go?" 
      style={{ border: 'none',}}></input> 
    
    <div style={{ marginTop: '10px' }}>
        {filteredButtons.map((button) => (
          <CustomButton key={button.id} label={button.label} onClick={button.onClick} />
        ))}
      </div>
    </>
      
    )
}

const DragDiv = (props) => {
    const [position, setPosition] = React.useState({ x: 0, y: -110});
    const buttonList = [
      { label: 'BUILDINGS'},
      { className: 'labelCategory', id: 1, label: 'Gusaling Atienza', onClick: () => props.onBuildingClick('atienza') },
      { id: 2, label: 'Gusaling Bagatsing', onClick:() => props.onBuildingClick('bagatsing') },
      { id: 3, label: 'Gusaling Corazon Aquino', onClick: () => props.onBuildingClick('caquino') },
      { id: 4, label: 'Gusaling Ejercito Estrada', onClick: () => props.onBuildingClick('eestrada') },
      { id: 5, label: 'Gusaling Katipunan', onClick: () => props.onBuildingClick('katipunan') },
      { id: 6, label: 'Gusaling Lacson', onClick: () => props.onBuildingClick('lacons')},
      { id: 7, label: 'Gusaling Villegas', onClick: () => props.onBuildingClick('villegas') },
      {  label: 'FACILITIES', },
      { id: 8, label: 'Cashier', onClick: () => props.onBuildingClick('cashier') },
      { id: 9, label: 'Chapel', onClick: () => props.onBuildingClick('chapel') },
      { id: 10, label: 'Entrep. Center', onClick: () => props.onBuildingClick('entcenter') },
      { id: 11, label: 'Gazebos', onClick: () => props.onBuildingClick('gazebos') },
      { id: 12, label: 'ICTO', onClick: () => props.onBuildingClick('icto') },
      { id: 13, label: 'J.A. Auditorium', onClick: () => props.onBuildingClick('jaaditorium') },
      { id: 14, label: 'Registrar', onClick: () => props.onBuildingClick('registrar') },
      { id: 15, label: 'R.S. Gym', onClick: () => props.onBuildingClick('rsgym') },
      { id: 16, label: 'Tanghalang Bayan', onClick: () => props.onBuildingClick('tbayan') },
      {label: 'OTHERS'},
      { id: 17, label: 'Canteen', onClick:() => props.onBuildingClick('canteen')},
      { id: 18, label: 'Parking', onClick: () => props.onBuildingClick('parking')},
    ];
    const handleDrag = (e, ui) => {
      // const { x, y } = ui;
      // setPosition({ x, y });
      
      const newY = position.y + ui.deltaY;

      const snapTo = [-100, -360]
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

                  {/* <div className="bldg-search-bar"> 
                    <SearchBar buttons={buttonList}/> 
                  </div> */}

                </div>
                
                <div>
                <div className="bldg-name">
                  <div className='scroll-container'>
                  <div className="bldg-search-bar"> 
                  <SearchBar buttons={buttonList}/> 
                  </div>
                    {/* <h4>Buildings</h4>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('atienza')}> Gusaling Atienza</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('bagatsing')}>Gusaling Bagatsing</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('caquino')}>Gusaling Corazon Aquino</a> <br></br> <br></br>
                  
                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('eestrada')}> Gusaling Ejercito Estrada</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('katipunan')}>Gusaling Katipunan</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('lacson')}>Gusaling Lacson</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('villegas')}>Gusaling Villegas</a> <br></br> <br></br>

                    <h4>Facilities</h4>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('cashier')}> Cashier</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('chapel')}>Chapel</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('entcenter')}>Entrep. Center</a> <br></br> <br></br>
                  
                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('gazebos')}>Gazebos</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('icto')}>ICTO</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('jaaditorium')}>J.A. Auditorium</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('registrar')}>Registrar</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('rsgym')}>R.S. Gym</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('tbayan')}>Tanghalang Bayan</a> <br></br> <br></br>

                    <h4>Others</h4>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('canteen')}>Canteen</a> <br></br> <br></br>

                    <FaBuilding className="bldg-logo"/> <a href="#/" className='bldg-button' onClick={() => props.onBuildingClick('parking')}>Parking</a> */}

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
