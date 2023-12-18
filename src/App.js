import './App.css';

import Home from './dashboard/Home';
import Signup from './signup/Index';
import Info from './info/infoPage';

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
