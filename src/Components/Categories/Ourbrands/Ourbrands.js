import React from 'react'
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';

import Carousel from "react-elastic-carousel";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Item from './item'
import './Style.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'



const breakPoints = [
    { width: 1, itemsToShow: 1},
    { width: 330, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]
  

const Ourbrands = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
      <Box  sx={{
          m:6,
          pt:1,
          mb:1,
          color:'black',
          borderRadius:'30px',
          textAlign:'center',
          backgroundColor:'#0e131f'
      }}>
            <div>
         <h1 style={{
             fontSize:'36px',
             lineHeight:'1.5rem',
             color:'#00f9cc'
         }}>Our Brands</h1>
        <h3 style={{
                fontSize: '1.25rem',
                lineHeight:' 1.75rem',
                color: '#9ca3af'
        }}>Popular brands to stay that Travelmaster recommends for you 2</h3>
    
    </div>
    
   
        <div className="App">
  <Carousel breakPoints={breakPoints}>
    <Item> 

      <img style={{
        width:'80%',
      }} src={img3} alt="" />
    

    </Item>
    <Item>    
       <img style={{
        width:'80%',
      }} 
        src={img4} alt="" />
    </Item>
    <Item>
    <img style={{
        width:'80%',
      }}  src={img5} alt="" />
    </Item>
    <Item>

    <img 
    style={{
      width:'80%',
    }}  src={img2} alt="" />
    </Item>
    <Item>

    <img style={{
        width:'80%',
      }}  src={img1} alt="" />
    </Item>



    {/* <Item>
    <p id='pColor'> All Events</p>
<img style={{
        width:'100%',
        borderRadius:'20px',
      }}  src={slider6} alt="" /> 
    </Item> */}
    {/* <Item>Seven</Item>
    <Item>Eight</Item> */}
  </Carousel>
</div>
      
      </Box>
    </Container>



    </React.Fragment>

  )
}

export default Ourbrands
