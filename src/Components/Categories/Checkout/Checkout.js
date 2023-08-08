import * as React from 'react';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';
import { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import './style.css'
import Photo2 from '../../../Assets/photo2.jpg'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ToastContainer, toast } from 'react-toastify';






export default function Checkout(props) {
  let [count, setCount] = useState(1);
  const [email, setEmail] = useState(' ')
  const [firstname, setfirstname] = useState(' ')
  const [lastname, setlastname] = useState(' ')
  const [emailvalid, setemailvalid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [myObject, setMyObject] = useState('');
  const [Ticket, setTicket] = useState('35')
  let navigate = useNavigate('');
  let location = useLocation();



  let booking = location.state.bookingData;
  // console.log('booking', booking)


  //   console.log(' booking', bookingDetail)


  //  var total = parseInt( sessionStorage.getItem( "total" ) );
  var updatedTotal = Ticket * count;
  sessionStorage.setItem("total", count);





  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    // count = count - 1;
    if (count >= 2) {
      count = count - 1;
      setCount(count);
    } else {
      alert('You Cant choose less than 1');
      console.log('ok')
    }
  }

  const handleSubmit = (e) => {
    // console.log('chl rha hai')
    e.preventDefault();
    if (!emailvalid) {
      toast.warn("Email Required", {
        position: toast.POSITION.TOP_RIGHT
      }, []);
    } else if (!firstname) {
      toast.warn("FirstName Required", {
        position: toast.POSITION.TOP_RIGHT
      }, []);

    } else if (!lastname) {
      toast.warn("LastName Required", {
        position: toast.POSITION.TOP_RIGHT
      }, []);
    } else {
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_RIGHT
      })
      navigate('/Thankyou');
      setSubmitted(true);
      setError(false);
    }
    setMyObject(
      localStorage.setItem('Email', email),
      // localStorage.setItem('Password', Password)
    )

  };




  const handleOnEmail = (e) => {
    setEmail(e.target.value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(e.target.value)) {
      setemailvalid(true)
    } else {
      setemailvalid(false)
    }

  };

  const handlefirstname = (e) => {
    console.log('hekllo')
    setfirstname(e.target.value);
    setSubmitted(true);
  }

  const handlelastname = (e) => {
    console.log('kheloo')

    setlastname(e.target.value);
    setSubmitted(true);
  }


  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='lg' sx={{
          paddingTop: '75px',

        }} >
          <Grid container spacing={2}>

            <Grid sx={{ bgcolor: '#111827', border: '3px solid #00fdd0', padding: '20px', borderRadius: '30px' }} height='100%' md={7} xs={12}>
              <h1 style={{
                color: '#00fdd0'
              }}>
                Checkout
              </h1>
              <Divider color='white' />
              <h3 id='h3'>
                Billing Address
              </h3>
              <div>
                <span id='span'>
                  Email Address*
                </span>
                <TextField
                  className='input-field'
                  id=""
                  type="Email"
                  value={email}
                  onChange={handleOnEmail}
                  placeholder='enter your email address'
                  sx={
                    { width: '100%', color: 'white' }
                  }
                  autoComplete=""
                >

                </TextField>
              </div>
              <div>
                <span>
                  First Name*
                </span>
                <TextField
                  className='input-field'
                  // id=""
                  type="Text"
                  onChange={handlefirstname}
                  placeholder='enter your first name'
                  value={firstname}
                  sx={
                    { width: '100%', }
                  }
                // autoComplete="current-password"
                >
                </TextField>
              </div>
              <div>
                <span>
                  Last Name*
                </span>
                <TextField className='input-field'
                  // id=""
                  type="Text"
                  onChange={handlelastname}
                  placeholder='enter your last name'
                  value={lastname}
                  sx={
                    { width: '100%', }
                  }
                // autoComplete="current-password"
                >
                </TextField>
              </div>
              <div>
                <p id='typo-white'><Checkbox defaultChecked />Get updates from Event Bus about your upcoming events</p>
                <p id='typo-white'><Checkbox />Continue as guest</p>
                <p id='typo-white'> <Checkbox />Create an account ?</p>
              </div>
              <div>
                <span>
                  Additional Information (Optional)
                </span>
                <Box
                  sx={{
                    // width: 1000, 
                    maxWidth: '100%',
                  }}>
                  <TextField
                    placeholder='Add any notes you would like us to know regarding your journey with Event Bus'
                    className='additional-text'
                    type="Text"
                    multiline
                    rows={3}
                    maxRows={4}
                    sx={
                      { width: '100%', }
                    }>
                  </TextField>
                  <span>Write a few sentences about yourself.</span>
                </Box>
              </div>
              <Box >
                <Button onClick={handleSubmit}
                  sx={{
                    width: '100%', border: '2px solid #00ffd0 ', borderRadius: '50px', backgroundColor: '#00ffd0', color: 'black', mt: 3
                  }
                  }>
                  Continue</Button>
              </Box>
            </Grid>


            <Grid md={1}>
            </Grid>

            <Grid sx={{ bgcolor: '#111827', padding: '20px', borderRadius: '30px', border: '3px solid #00fdd0' }} height='100%' md={4} xs={12}>
              <div>
                <h3 className='h3call'> Booking detail</h3>
              </div>
              <Box sx={{
                border: '2px solid #00fdd0',
                padding: 1,
              }}>


                <Box sx={{
                  display: 'flex',
                  alignItems: 'Top ',
                }}>
                  <div >
                    <div style={{ display: 'flex', width: '100%', }}>
                      <img src={booking.image} alt="" width='120px' height='120px' />
                      <p id='typography' style={{ width: '35%', textAlign: 'top', margin: 0 }}> {booking.event_name}<br />
                        <h3 id='typo-white '>{updatedTotal + ' €'}</h3></p>
                      <div style={{ display: 'flex', alignItems: 'center', }}>
                        <button style={{
                          width: '38px',
                          color: 'black',
                          backgroundColor: 'rgb(0, 253, 208)',
                          height: '27px',
                          borderRadius: '10px',
                        }} onClick={decrementCount}>-</button>
                        <div style={{ margin: "0px 5px", color: '#fff' }}>{count}</div>
                        <button style={{
                          width: '38px',
                          color: 'black',
                          backgroundColor: 'rgb(0, 253, 208)',
                          height: '27px',
                          borderRadius: '10px',
                        }} onClick={incrementCount}>+</button>
                      </div>
                    </div>
                  </div>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'start'
                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" width='40%'>
                    Date of concert :
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">{booking.date}
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'start'
                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" width='40%'>
                    Number of seats :
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">{count}
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'start'
                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" width='40%'>
                    Price per seat :
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">
                  {booking.price_per_seat}
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'start'
                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" width='40%'>
                    County From :
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">
                    {booking.county}
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex'
                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" width='40%'>
                    Pickup From :
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">
                    {booking.pickup_point}
                  </Typography>
                </Box>
              </Box>
              <div>
                <h1 className='h1 h1call'>Apply Coupon</h1>
                <h3 className='h2 h2call'>Coupon Code </h3>
                <div>
                  <TextField className='input-field'
                    id=""
                    type="Text"
                    sx={
                      { width: '40%', }
                    }>
                  </TextField>
                  <Button
                    sx={{
                      width: '40%', border: '2px solid #00ffd0 ', ml: 2, borderRadius: '50px', backgroundColor: '#00ffd0', color: 'black'
                    }
                    }>
                    Apply Code</Button>
                </div>

              </div>

              <div>
                <h3>Price Detail</h3>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',

                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" >
                    Total
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">{updatedTotal}
                  </Typography>

                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',

                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" >
                    Discount

                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">0 €
                  </Typography>

                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '2px solid #00fdd0'
                }}>
                  <Typography id='typography' gutterBottom variant="p" component="div" >
                    Service charge
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">0 €
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 1
                }}>
                  <Typography id='typo-white' gutterBottom variant="p" component="div" >
                    Total
                  </Typography>
                  <Typography id='typo-white' gutterBottom variant="p" component="div">{updatedTotal}
                  </Typography>
                </Box>
              </div>
            </Grid>


          </Grid>
          {/* </Box> */}
        </Container>
      </React.Fragment>
      <ToastContainer />
    </>
  );
}
