import React from 'react'
import {  useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField,  Paper, } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './Style.css'
import Photo2 from '../../../Assets/photo2.jpg'
import Photo7 from '../../../Assets/photo7.jpg';
import { useNavigate } from 'react-router-dom';




export default function BasicCard() {
  let navigate = useNavigate('');
  let location = useLocation();
  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate('/Homepage')
  }


  return (
    <>
 


    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
      <Box sx = {
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor:'#111827'
                
            }
        }>
        <Paper className='paper' variant = "outlined"
        square sx = {
            { height:530, width: 600, padding: 2,backgroundColor:'#374151' ,borderRadius:'3vh' }
        }>
        <Box className='content-box'>

        <div className='text-center'style={{borderBottom:'2px solid #00fdd0'}}>

    <h1> Thankyou </h1>

</div>

<div  className='text-center'>

<h3> Thanks For booked to our Event Bus . </h3>

</div>


        <Box className='Box'>

<div className='image'>
    <img src={Photo2} alt="" height='85px'  />
</div>
<div>
    <Typography marginLeft={'10px'} variant='h6' color='#00fdd0'>
        Bus to The 1975 3 Arena Dublin 29th Jan 2023
    </Typography>
</div>
            </Box>

            <Box className='Box-1' >

<div className='image'>
    <img src={Photo7} alt="" height='85px'  />
</div> 
<div>
    <Typography marginLeft={'10px'} variant='h6' color='#00fdd0'>
        Bus to Harry Styles
    </Typography>
</div>
            </Box>

    <div  className='text-center' >
    <Typography variant='p' color='white'>
       you should receive a confirmation email soon
    </Typography>
        </div>


    <Box className='text-center' >
        <Button onClick={handleSubmit} sx = {{width: '40%',border:'2px solid #00ffd0 ',borderRadius:'50px',backgroundColor:'#00ffd0',color:'black' , mt:3
          }
        }>Back TO Home</Button>
        </Box>


        </Box>
  </Paper>
    </Box>
      </Container>
    </React.Fragment>



    
    </>
  );
}
