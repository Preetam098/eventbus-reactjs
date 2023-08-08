import React from 'react';
import Box from '@mui/material/Box';
import Photo6 from '../../../Assets/photo6.jpg'
import Photo7 from '../../../Assets/photo7.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';



const AllConcertsEvents = () => {
    return (
        <>
 <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl">
       
      <Box sx={{
    backgroundColor:'#f3f4f6',
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
             fontSize:'2.5rem',
             lineHeight:'1.5rem',
             color:'#00f9cc'
         }}>All Concerts Events</h1>
        <h3 style={{
                fontSize: '1.25rem',
                lineHeight:' 1.75rem',
                color: '#9ca3af'
        }}>Book Your indivisual Bus Seats</h3>
    
    </div>


<Box  sx={{
  display:'flex'
}}>
  
<Card sx={{ maxWidth: 315  , borderRadius:'15px',p:0,     backgroundColor:'#111827' , textAlign:'start' , ml:5}}>
      <CardMedia
        component="img"
        height="300"
        image={Photo6}
        alt="green iguana"
      />
     <CardContent>
        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
        }}>
        <Typography gutterBottom variant="h6" component="div">
          Tag:
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color='#00ffd0'>
           All Event
        </Typography>
        </Box>
        <Typography variant="h6" color="#00ffd0" >
        Bus To Bruce Springsteen at The RDS Dublin 5th | 7th | 9th May 2023
        </Typography>
        <Typography variant="h6" color="text.secondary">
         <b>30-30€</b> /seat
          </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: 315  , borderRadius:'15px',p:0, backgroundColor:'#111827' , textAlign:'start' , ml:5}}>
      <CardMedia
        component="img"
        height="300"
        image={Photo7 }
        alt="green iguana"
      />
     <CardContent>
        <Box sx={{
          display:'flex',
          justifyContent:'space-between',
        }}>
        <Typography gutterBottom variant="h6" component="div">
          Tag:
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color='#00ffd0'>
           All Event
        </Typography>
        </Box>
        <Typography variant="h6" color="#00ffd0" >
        Bus To Harry Styles
        </Typography>
        <Typography variant="h6" color="text.secondary">
         <b>30-30€</b> /seat
          </Typography>
      </CardContent>
    </Card>
</Box>

    <Stack spacing={5} direction="row" sx={{
  mt:10,
  justifyContent:'center',
  textAlign:'center',

 }}>
      <Button variant="contained" style={{ backgroundColor:'#111827',border:'2px solid #00ffd0',color: '#00ffd0' , borderRadius: '40px' , padding:"12px 24px" }}>Show more events </Button>
      <Button variant="contained" style={{ backgroundColor:' #00ffd0',color: 'black' , borderRadius: '40px' , padding:"12px 24px"}}>Contact</Button>
   
    </Stack>



   </Box>
      </Container>
    </React.Fragment>

   
        </>
    )
}

export default AllConcertsEvents