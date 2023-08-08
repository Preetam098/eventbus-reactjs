import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage';
import Login from './Components/Login/Index'
// import Login from './Components/Login/Index'
import NavBar from './Components/Categories/Navbar/Index'
import Footer from './Components/Categories/Footer/Index'
// import Slider from './Components/Home/Slider.js';
// import NavBar from './Components/Home/NavBar.js'
import { BrowserRouter as Router, Routes, Route, Outlet, } from 'react-router-dom';
import Signin from './Components/Signp/Index'
import { useNavigate } from 'react-router-dom';
import MyCart from './Components/Categories/MyCart/Index';
import ForgotPassword from './Components/ForgotPassword/Index'
import AllEvents from './Components/Categories/AllEvents/AllEvents';
import Concerts from './Components/Categories/AllConcertsEvent/Index'
import Festivals from './Components/Categories/Festivals/Index'
import Sports from './Components/Categories/AllSportsEvents/Index'
import All3ArenaEvents from './Components/Categories/All3ArenaEvents/Index';
import AllCorkEvents from './Components/Categories/AllCorkEvents/Index';
import Thankyou from './Components/Categories/Thankyou/Index';
import Checkout from './Components/Categories/Checkout/Checkout';
import ProductDetail from './Components/Categories/ProductDetail/Index';



// import { createRoot } from "react-dom/clie/nt"



const App = () => {
  // let navigate=useNavigate();
  // useEffect(()=>{
  //   if(localStorage.getItem('Email') && window.location.pathname === './Login'){
  //     navigate('./Homepage')
  //   }
  // },[])
  return(
    <>
    {/* <NavBar/> */}
    {/* <Login/> */}
   {/* <ForgotPassword/> */}
    {/* <Homepage /> */}
    {/* <Footer/> */}
    {/* <NavBar/> */}
    {/* <Slider/> */}


{/*------------- Routing The Pages  ----------*/}
  
<Router>

  <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Homepage' element={<><NavBar/><Homepage /><Footer /></>} />
        <Route path='/ForgotPassword' element={<><NavBar/><ForgotPassword /><Footer /></>} />
        <Route path='/AllEvents' element={<><NavBar/><AllEvents /><Footer /></>} />
        <Route path='/Concerts' element={<><NavBar/><Concerts /><Footer /></>} />
        <Route path='/Festivals' element={<><NavBar/><Festivals /><Footer /></>} />
        <Route path='/Sports' element={<><NavBar/><Sports /><Footer /></>} />
        <Route path='/All3ArenaEvents' element={<><NavBar/><All3ArenaEvents /><Footer /></>} />
        <Route path='/AllCorkEvents' element={<><NavBar/><AllCorkEvents /><Footer /></>} />
        <Route path='/ProductDetail' element={<><NavBar/><ProductDetail /><Footer /></>} />
        <Route path='/MyCart' element={<><NavBar/><MyCart /><Footer /></>} />
        <Route path='/Checkout' element={<><NavBar/><Checkout /><Footer /></>} />
        <Route path='/Thankyou' element={<Thankyou/>} />


 
      </Routes>
      <Outlet />
</Router>

  </>
  )
 
}

export default App
