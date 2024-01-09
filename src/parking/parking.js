import { Polygon } from "react-leaflet";

const multiPolygonCar = [
    [
        //Parking Space 1 {Canteen[front]}
        [14.587075,120.976793],
        [14.587115,120.976838],
        [14.587042,120.976905],
        [14.587005,120.97686]
    ],
    [
        //Parking Space 2 {TanghalangBayan[back]}
        [14.58697,120.976653],
        [14.58693,120.976753],
        [14.586577,120.976646],
        [14.58659,120.97660],
        [14.58687,120.976683]
    ],
    [
         //Parking Space 3 {BelowField[front]}
        [14.586475,120.97641],//left
        [14.586524,120.97649],//right
        [14.586455,120.97655],//rightbelow
        [14.58639,120.97647]//leftbelow
    ],
    [
        //Parking Space 4 {PLM Chapel[front]}
       [14.586145,120.97615],
       [14.58623,120.97629],
       [14.58616,120.976325],
       [14.586092,120.976177]
   ],
    [
        //Parking Space 5 {University Activity Center[LeftSide]}
       [14.586865,120.97677],//left
       [14.586855,120.97681],//right
       [14.586775,120.976795],//rightbelow
       [14.586785,120.9767455]//leftbelow
    ],
    [
        //Parking Space 5 {University Activity Center[LeftSide]}
        [14.58671,120.97673],//left
        [14.58670,120.97678],//right
        [14.58663,120.976765],//rightbelow
        [14.58664,120.976715]//leftbelow
    ], 

]
 
const multiPolygonMotor = [
    [
        //Parking Space 1 {Canteen[LeftSide]}
        [14.58708,120.97651],
        [14.58713,120.976575],
        [14.587018,120.97667],
        [14.586985,120.976635]
    ],
    [
        //Parking Space 2 {BelowField[front]}
        [14.586403,120.976288],
        [14.586471,120.976405],
        [14.586385,120.976465],
        [14.58634,120.976411],
        [14.586303,120.97635]
    ],
    [
        //Parking Space 3 {PLM Chapel[front]}
        [14.586085,120.97606],
        [14.58614,120.976145],
        [14.58609,120.976171],
        [14.58604,120.97609]
    ],
    [
        //Parking Space 4 {RamonMagsaysayCenter[front]}
        [14.586255,120.976038],
        [14.5862815,120.976084],
        [14.586272,120.9761325],
        [14.58633,120.97622],
        [14.586258,120.97628],
        [14.586155,120.976115]
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
