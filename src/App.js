import './App.css';

import Home from './dashboard/Home';
import Signup from './signup/Index';
import Info from './info/infoPage';
import Map from './map/map';
import Profile from './myProfile/myProfile';
import AboutUs from './aboutUs/aboutUs';

import Gazebo1 from './gazebo/gazebo1';
import Gazebo2 from './gazebo/gazebo2';
import Gazebo3 from './gazebo/gazebo3';
import Gazebo4 from './gazebo/gazebo4';
import Gazebo5 from './gazebo/gazebo5';
import Gazebo6 from './gazebo/gazebo6';
import Gazebo7 from './gazebo/gazebo7';
import Gazebo8 from './gazebo/gazebo8';
import Gazebo9 from './gazebo/gazebo9';
import Gazebo10 from './gazebo/gazebo10';
import Gazebo11 from './gazebo/gazebo11';
import Gazebo12 from './gazebo/gazebo12';
import Gazebo13 from './gazebo/gazebo13';
import Gazebo14 from './gazebo/gazebo14';
import Gazebo15 from './gazebo/gazebo15';
import Gazebo16 from './gazebo/gazebo16';
import Gazebo17 from './gazebo/gazebo17';
import Gazebo18 from './gazebo/gazebo18';

import Admin from './AdminPanel/AdminPanel';

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';



const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/"  >
      <Route index element={<Home />}></Route>
      <Route path = "signup" element={<Signup />}></Route>
      <Route path = "login" element={<Home />}></Route>
      <Route path = "info" element={<Info />}></Route>
      <Route path = "forgotpass" element={<Info />}></Route>
      <Route path = "map" element={<Map />}></Route>
      <Route path = "myProfile" element={<Profile />}></Route> 
      <Route path = "aboutus" element={<AboutUs />}></Route> 

      <Route path = "gazebo1" element={<Gazebo1 />}></Route>
      <Route path = "gazebo2" element={<Gazebo2 />}></Route>
      <Route path = "gazebo3" element={<Gazebo3 />}></Route>
      <Route path = "gazebo4" element={<Gazebo4 />}></Route>
      <Route path = "gazebo5" element={<Gazebo5 />}></Route>
      <Route path = "gazebo6" element={<Gazebo6 />}></Route>
      <Route path = "gazebo7" element={<Gazebo7 />}></Route>
      <Route path = "gazebo8" element={<Gazebo8 />}></Route>
      <Route path = "gazebo9" element={<Gazebo9 />}></Route>
      <Route path = "gazebo10" element={<Gazebo10 />}></Route>
      <Route path = "gazebo11" element={<Gazebo11 />}></Route>
      <Route path = "gazebo12" element={<Gazebo12 />}></Route>
      <Route path = "gazebo13" element={<Gazebo13 />}></Route>
      <Route path = "gazebo14" element={<Gazebo14 />}></Route>
      <Route path = "gazebo15" element={<Gazebo15 />}></Route>
      <Route path = "gazebo16" element={<Gazebo16 />}></Route>
      <Route path = "gazebo17" element={<Gazebo17 />}></Route>
      <Route path = "gazebo18" element={<Gazebo18 />}></Route>

      <Route path = "admin" element={<Admin />}></Route>
      
      

    </Route>
  )
)

function App() {
  return (
    
    // <div>
    //   {/* <Home /> */}
    // </div>
    <RouterProvider router={router} />

  );
}

export default App;
