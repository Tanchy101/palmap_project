import { Polygon } from "react-leaflet";

const multiPolygonCar = [
    [
        //Parking Space 1 {Canteen[front]}
        [14.58705,120.97676],
        [14.58710,120.97682],
        [14.58698,120.97693],
        [14.58694,120.97685]
    ],
    [
        //Parking Space 2 {TanghalangBayan[back]}
        [14.58694,120.97666],
        [14.58693,120.97675],
        [14.58654,120.97663],
        [14.58655,120.97660],
        [14.58684,120.97669]
    ],
    [
         //Parking Space 3 {BelowField[front]}
        [14.58645,120.97643],//left
        [14.58652,120.97655],//right
        [14.58648,120.97660],//rightbelow
        [14.58638,120.97647]//leftbelow
    ],
    [
        //Parking Space 4 {PLM Chapel[front]}
       [14.58613,120.97620],//left
       [14.58619,120.97630],//right
       [14.58614,120.97634],//rightbelow
       [14.58609,120.97623]//leftbelow
   ],
    [
        //Parking Space 5 {University Activity Center[LeftSide]}
       [14.58684,120.97678],//left
       [14.58684,120.97682],//right
       [14.58676,120.97680],//rightbelow
       [14.58676,120.97676]//leftbelow
    ],
    [
        //Parking Space 5 {University Activity Center[LeftSide]}
        [14.58670,120.97675],//left
        [14.58669,120.97679],//right
        [14.58660,120.97676],//rightbelow
        [14.58661,120.97672]//leftbelow
    ], 
    [
        //Parking Space 5 {University Activity Center[LeftSide]}
        [14.58639,120.97655],//left
        [14.58643,120.97665],//right
        [14.58637,120.97669],//rightbelow
        
    ],   


]
 
const multiPolygonMotor = [
    [
        //Parking Space 1 {Canteen[LeftSide]}
        [14.58706,120.97652],
        [14.58711,120.97659],
        [14.58700,120.97668],
        [14.58698,120.97662],
        [14.58701,120.97657]
    ],
    [
        //Parking Space 2 {BelowField[front]}
        [14.58636,120.97629],
        [14.58644,120.97642],
        [14.58637,120.97646],
        [14.58634,120.97643],
        [14.58628,120.97635]
    ],
    [
        //Parking Space 3 {PLM Chapel[front]}
        [14.58609,120.97614],
        [14.58613,120.97620],
        [14.58609,120.97623],
        [14.58606,120.97617]
    ],
    [
        //Parking Space 4 {RamonMagsaysayCenter[front]}
        [14.58620,120.97608],
        [14.58626,120.97618],
        [14.58621,120.97621],
        [14.58615,120.97611]
    ],
]

const parkingOptionsCar = {color: 'orange', opacity:'0.8'}

const parkingOptionsMotor = {color: 'purple', opacity:'0.5'}

function Parking () {
    return(
        <>
            <Polygon pathOptions={parkingOptionsCar} positions={multiPolygonCar}/>
            <Polygon pathOptions={parkingOptionsMotor} positions={multiPolygonMotor}/>
        </>
    );
}

export default Parking;
