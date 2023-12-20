import './App.css';

import Home from './dashboard/Home';
import Signup from './signup/Index';
import Info from './info/infoPage';
import Map from './map/map';
import Profile from './myProfile/myProfile';


import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';



const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/"  >
      <Route index element={<Home />}></Route>
      <Route path = "signup" element={<Signup />}></Route>
      <Route path = "login" element={<Home />}></Route>
      <Route path = "guest" element={<Info />}></Route>
      <Route path = "info" element={<Info />}></Route>
      <Route path = "forgotpass" element={<Info />}></Route>
      <Route path = "map" element={<Map />}></Route>
      <Route path = "myProfile" element={<Profile />}></Route> 
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
