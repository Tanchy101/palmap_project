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
    ]
]

const multiPolygonMotor = [
    [
        [14.58718,120.97658],
        [14.58706,120.97668],
        [14.58703,120.97664],
        [14.58711,120.97653],
    ]
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
