import React from 'react'
import Box from '@mui/material/Box';
import BgImage from '../../Home/Assets/logo.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container } from '@mui/material'




const Footer = () => {
  return (
    <>
    <Container maxWidth="xl"> 
   <Box sx={{
   
    paddingY:'40px',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    textAlign:'start',
    gap:4,
    borderTop: "2px solid #00f9cc",
    backgroundColor:'#111827',
   }}>  
      
   <Box  sx={{
    
      color:'#00f9cc',
      display:'grid',
      lineHeight:'2.9rem',
      ml:28 
      }}>

  
  <img style={{
        maxHeight:'3rem'
    }}
     src={BgImage} alt="BigCo Inc. logo"/>
     
    <a> <FacebookIcon sx={{ display: { fontSize:'30 px' , color :'#00f9cc' } }} />Facebook </a>
   <a> <TwitterIcon sx={{ display: { fontSize:'30px' } }} />Twitter</a>
   <a> <YouTubeIcon sx={{ display: { fontSize:'30px' } }} />YouTube</a>
    <a> <InstagramIcon sx={{ display: { fontSize:'30px' } }} />Instagram </a>


 
  </Box>

    <Box  sx={{
      color:'#00f9cc',
     
      }} >
   <h2> Categories</h2>
   <ul style={{
    listStyle:'none',
    padding:0,
    lineHeight:' 1.9rem'
   }}>

   <li>
    <a>All Events</a>
   </li>
   <li>
    <a>Concerts</a>
   </li>
   <li>
    <a>Festivals</a>
   </li>
   <li>
    <a>Sports</a>
   </li>
   <li>
    <a>3 Arena Events</a>
   </li>
   <li>
    <a>Cork Events</a>
   </li>

   </ul>
    
  </Box>

  
   <Box   sx={{
      color:'#00f9cc',
      }}>
   <h2> Quick Link</h2>

   <ul  style={{
    listStyle:'none',
    padding:0,
    lineHeight:' 1.9rem'
   }}>
    
    <li> 
        <a>FaQ's</a></li>
    <li> 
        <a>Group Booking</a></li>
    <li>

        <a>About Event Bus
        </a></li>
    <li>
        <a>Affiliate Area </a>
    </li>
    <li>
         <a>Newsletter Sign Up</a> </li>
    <li> 
        <a>Pick-up Points</a>
    </li>

   </ul>
  </Box>


  <Box  sx={{
      color:'#00f9cc',

      }}>
  <h2> Quick Link</h2>
   <ul   style={{
    listStyle:'none',
    padding:0,
    lineHeight:' 2.3rem'
   }}>
   <li> 
         <a>Contact us</a></li>
    <li>
        <a>Terms & Conditions</a></li>
    <li> 
        <a>Cookie Policy</a></li>
    <li> 
        <a>Privacy Policy</a></li>
    <li>
         <a>Refunds</a></li>
   </ul>
  </Box>
 
  
   </Box>
   </Container>
    </>
  )
}

export default Footer