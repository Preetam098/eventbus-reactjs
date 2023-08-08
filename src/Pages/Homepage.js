import React,{useEffect} from 'react'
import Login from '../Components/Login/Index'
import Signup from'../Components/Signp/Index'
import Slider from '../Components/Categories/Slider/Index'
import AllEvents from '../Components/Categories/AllEvents/Index'
import AllConcertsEvents from '../Components/Categories/AllConcertsEvent/Index'
import AllSportsEvents from '../Components/Categories/AllSportsEvents/Index'
import All3ArenaEvents from '../Components/Categories/All3ArenaEvents/Index'
import AllCorkEvents from '../Components/Categories/AllCorkEvents/Index'
import Festivals from '../Components/Categories/Festivals/Festivals'
import Ourbrands from '../Components/Categories/Ourbrands/Index'
import ConcertTravel from '../Components/Categories/ConcertsTravel/Index'
import MyCart from '../Components/Categories/MyCart/Index'
import Box from '@mui/material/Box';
import NavBar from '../Components/Categories/Navbar/Index'
import Footer from '../Components/Categories/Footer/Index'
import { Link, useNavigate } from 'react-router-dom';
import ProductDetail from '../Components/Categories/ProductDetail/ProductDetail'
import ForgotPassword from '../Components/ForgotPassword/Index'
import Checkout from '../Components/Categories/Checkout/Index'
// import Thankyou from '../Components/Categories/Thankyou/Index'






const Index = () => {


   
// let navigate = useNavigate();
//    useEffect(() => {
//       if(!localStorage.getItem('Email')){
//          navigate({Login})
//       }

//    },[])


  return ( 


    
      <>
   <Box sx={{
    backgroundColor:'#111827'
   }}>

      {/* <Login/> */}
     {/* <Signup/> */}
       {/* <NavBar/>  */}
     {/* <MyCart/>   */}
        {/* <ForgotPassword/>  */}
        {/* <Festivals/> */}
        {/* <Thankyou/> */}
        {/* <Checkout/> */}
        {/* <ProductDetail/> */}
       <Slider/> 
      <AllEvents/>
      <AllConcertsEvents/>
      <AllSportsEvents/>
      <All3ArenaEvents/>
      <AllCorkEvents/>
      <Ourbrands/>
      <ConcertTravel/>  
      {/* <Footer/>  */}


   </Box>



      </>
    
  )
}

export default Index
