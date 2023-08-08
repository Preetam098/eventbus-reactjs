import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';


const Festivals = () => {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xxl">
    <Box sx={{
    m:5,
    pt:3,
    pb:5,
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
         }}>Festivals</h1>
        <h3 style={{
                fontSize: '1.25rem',
                lineHeight:' 1.75rem',
                color: '#9ca3af'
        }}>Book Your indivisual Bus Seats</h3>
    
    </div>
    
    <Stack spacing={5} direction="row" sx={{
  mt:10,
  justifyContent:'center',
  textAlign:'center',
 }}>
      <Button variant="contained" style={{backgroundColor:'#111827',border:'2px solid #00ffd0',color: '#00ffd0' , borderRadius: '40px' , padding:"12px 24px" }}>Show more events </Button>
      <Button variant="contained" style={{ backgroundColor:' #00ffd0',color: 'black' , borderRadius: '40px' , padding:"12px 24px"}}>Contact</Button>
   
    </Stack>

    
    </Box>
    </Container>
  </React.Fragment>


    
  )
}

export default Festivals

