import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Login from './pages/Login';
import Dashbored from './pages/Dashbored';
import Factory from './pages/Factory';
import Driver from './pages/Driver';
import Supermarket from './pages/Supermarket';

import ProtectRoute from './utility/ProtectRoute';


function App() {
  return (
   <> 
   <BrowserRouter>
     <Routes>
       <Route path='/login' element={<Login/>}></Route>

       <Route element={<ProtectRoute/>} >

         
         <Route path='/factory' element={<Factory/>}></Route>
         <Route path='/driver' element={<Driver/>}></Route> 
         <Route path='/supermarket' element={<Supermarket/>}></Route> 
     
     
       </Route>

       <Route path='/dashbored' element={<Dashbored/>}></Route>

     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
