import * as React from 'react';
import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import EventBus from '../../../Assets/EventBus.png';
import Button from '@mui/material/Button';
import { IconButton, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Style.css"
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';









export default function ProductDetail(props) {
  let [count, setCount] = useState(1);
  const [Ticket, setTicket] = useState('35')
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedPickup, setSelectedPickup] = useState('');
  const [qty, setQty] = useState('');
  let navigate = useNavigate();
  let location = useLocation();
  // console.log('location', location.state)


  // let eventdata = location.state;
  // console.log('booking ', eventdata)

  // console.log('date ', selectedDate)



  const [bookingData, setBookingData] = React.useState({
    event_name: location.state.desc,
    image: location.state.image,
    price_per_seat: location.state.price,
    date: "",
    county: "",
    pickup_point: "",
    qty:"",
  })
  // console.log('bookingData', bookingData)


  let datelist = location.state.date
  // console.log('datelist', datelist)

  const countylist = location.state.county
  // console.log('county', countylist)

  const pickuplist = location.state.pickup
  // console.log('county', pickuplist)

  var updatedTotal = Ticket * count;
  sessionStorage.setItem("total", count);

  const handleSubmit = (bookingData) => {
    // console.log('Date', selectedDate)
    // setSelectedDate(id.target.value)
    console.log('booking', bookingData)
    // state={bookingData}
    navigate('/Checkout', {
      state: {
        'bookingData': bookingData
      }
    })
    //  onchange(bookingData)
  }

  const handleDate = (id) => {
    // console.log('Date value', id)
    setSelectedDate(id)
    // update previou state value
    setBookingData((prevState) => ({
      ...prevState,
      date: id
    }));
  }

  const handleCounty = (id) => {
    // console.log('County val', val)
    setSelectedCounty(id)
    setBookingData((prevState) => ({
      ...prevState,
      county: id
    }));
  }

  const handlePickup = (id) => {
    // console.log('Pickup Val', val)
    setSelectedPickup(id)
    setBookingData((prevState) => ({
      ...prevState,
      pickup_point: id
    }))
  }
  const handleQty = () => {
    
  }



  // const handleDateChange = (event, id) => {
  //   setSelectedDate(event.target.value);
  //   setBookingData((prevState) => ({
  //     ...prevState,
  //     date: event.target.value
  //   }))
  // }


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
      // console.log('ok')
    }
  }


  return (
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="xl" >

        <Box sx={{
          border: '2px solid #00fdd0',
          color: 'black',
          borderRadius: '30px',
          textAlign: 'center',
          backgroundColor: '#0e131f'
        }}>
          <Box sx={{ flexGrow: 1, pt: 5, }}>
            <Grid container spacing={2}>

              <Grid item xs={4}>
                <div>
                  <img src={location.state.image} alt="" height='400px' />
                </div>
              </Grid>

              <Grid item xs={8}>
                <Typography sx={{ textAlign: 'start' }} variant='h4' color={'white'}>
                  {location.state.desc}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    textAlign: 'start'
                  }}>
                  <Grid item xs={7}>
                    <div style={{ marginTop: 3 }}>
                      <Typography color={'#00fdd0'} variant='h4'>
                        {location.state.price}
                      </Typography>
                      <Typography color={'White'} variant='h6' mt='10px'>
                        Share event with:
                      </Typography>
                    </div>
                    <IconButton sx={{ color: 'white', backgroundColor: '#45c556' }}>
                      <WhatsAppIcon />
                    </IconButton>
                    <IconButton sx={{ color: 'white', backgroundColor: '#4267A7', mx: 2 }}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton sx={{ color: '#1da1f2', backgroundColor: 'white' }}>
                      <TwitterIcon />
                    </IconButton>
                  </Grid>

                  <Grid item xs={5}>
                    <div>
                      <img src={EventBus} alt="" height='200px' />
                    </div>
                  </Grid>
                </Box>
                <div className='text-start'>
                  <h4>Nationwide Return Bus to The 1975 3Arena Dublin
                  </h4>
                  <p>
                    <span className='icon'>✓</span>
                    <span className='text'>Return Bus – Price includes both ways.</span>
                  </p>
                  <p>
                    <span className='icon'>✓</span>
                    <span className='text'> Nationwide – Over 50 Pickup Points.</span>
                  </p>
                  <p>
                    <span className='icon'>✓</span>
                    <span className='text'> Book Individual Bus Seats.</span>
                  </p>
                  <p>
                    <span className='icon'>✓</span>
                    <span className='text'>
                      Drop off + Collection from Slane Castle.
                    </span>
                  </p>
                  <p>
                    <span className='icon'>✓</span>
                    <span className='text'> E-Ticket (Instant direct to your email)</span>
                  </p>
                  <p>
                    <span className='red'> ✘ </span>
                    <span className='text'>No Toilets On Bus</span>
                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <div className='BookSeat'>
              <div className='Bookseat-header'>
                <h1 className='book-seat'>Book Your Seat : </h1>
              </div>
              <div className='Seat-body'>
                <h3 className='book-seat'>
                  Country you wish to travel from
                </h3>
                <div className='flexing'>

                  {
                    datelist && datelist.map((date, index, id) => {
                      return (
                        // <></>
                        <div key={index}>
                          <Button onClick={() => {
                            handleDate(date.date)
                          }}>
                            {/* <div onclick={() => { getdate(date.date) }}>ok</div> */}
                            <Button id='CoustomRadio' style={selectedDate === date.date ? { border: ' 2px solid #00fdd0' } : {}}>
                              {date.date}
                            </Button>
                          </Button>

                        </div>
                      )
                    })
                  }
                </div>

                <div className='flexing'>
                  {
                    countylist && countylist.map((county, index) => {
                      return (
                        <div key={index}>
                          <Button onClick={() =>
                            handleCounty(county.county)
                          }>
                            <Button id='CoustomRadio' style={selectedCounty === county.county ? { border: '2px solid #00ffd0' } : {}}>
                              {county.county}
                            </Button>
                          </Button>
                        </div>
                      )
                    })
                  }
                </div>


                <div>
                  <h3 id='text'>
                    Pick Up Locations select Options :
                  </h3>
                  <div className='flexing'>
                    {
                      pickuplist && pickuplist.map((pickup, index) => {
                        return (
                          <div key={index}>
                            <Button onClick={() =>
                              handlePickup(pickup.pickup)
                            }>
                              <Button id='CoustomRadio' style={selectedPickup == pickup.pickup ? { border: '2px solid #00ffd0' } : {}}>
                                {pickup.pickup}
                              </Button>
                            </Button>
                          </div>
                        )
                      })
                    }
                  </div>


                </div>


                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <h3 className='book-seat'>Add Quantity : </h3>
                      <div style={{ display: 'flex' }}>
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
                    </Grid>
                    <Grid item xs={3}>
                      <h3 className='book-seat'>Price Per Seat</h3>
                      <h2> {location.state.price}</h2>
                    </Grid>
                    <Grid item xs={3}>
                      <h3 className='book-seat'>Total Price : </h3>
                      <h3>{updatedTotal + ' €'}</h3>
                    </Grid>
                    <Grid item xs={3}>
                      <Button onClick={() => { handleSubmit(bookingData) }} sx={{ mt: 5 }} id='btn-3'>
                        Book Now
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

