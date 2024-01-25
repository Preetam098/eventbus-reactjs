import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Photo1 from '../../../Assets/photo1.jpg'
import Photo2 from '../../../Assets/photo2.jpg'
import Photo3 from '../../../Assets/photo3.jpg'
import Photo4 from '../../../Assets/photo4.jpg'
import Photo5 from '../../../Assets/photo5.jpg'
import Photo6 from '../../../Assets/photo6.jpg'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';


const cards = [

  {
    id: '01',
    name: 'Swedish House ',
    image: Photo1,
    tag: 'A, B, C, D',
    price: '30-35€ /seat',
    desc: 'Bus To Swedish Hou &bull se Mafia 3Arena - 06 Oct 2022',
    date: [
      {
        id:'01',
        date:'12 January 2023'
      },
      {
        id:'02',
        date:'13 January 2023'
      },
      {
        id:'03',
        date:'14 January 2023'
      },
      {
        id:'04',
        date:'15 January 2023'
      },
    ],
    county: [
      {
      id:'01',
      county:'Limerick'
    },
    {
      id:'02',
      county:'Galway'
    }, {
      id:'03',
      county:'WexFord'
    }, {
      id:'04',
      county:'Cork'
    },
  ],
    pickup: [
      {
        id: '01',
        pickup:'Limerick City Pickup'

      },
     
      {
        id: '02',
        pickup: 'Galway City Pickup',

      },
      {
        id: '03',
        pickup: 'WexFord City Pickup', 
      },
      {   
        id: '04',
        pickup: 'Cork City Pickup',

      },
    ],

  },
  {
    id: '02',
    name: 'The 1975 ',
    image: Photo2,
    tag: 'A, B, C, D',
    price: '25-35€ /seat',
    desc: 'Bus to The 1975 3Arena Dublin 29th Jan 2023 ',
    date: [
      {
        id: '01',
        date: '12 January 2023'
      },
      {
        id: '02',
        date: '13 January 2023'
      },
      {
        id: '03',
        date: '14 January 2023'
      },
      {
        id: '04',
        date: '15 January 2023'
      },
    ],
    county: [
      {
        id: '01',
        county: 'Limerick'
      },
      {
        id: '02',
        county: 'Galway'
      }, {
        id: '03',
        county: 'WexFord'
      }, {
        id: '04',
        county: 'Cork'
      },
    ],
    pickup: [
      {
        id: '01',
        pickup: 'Limerick City Pickup'

      },

      {
        id: '02',
        pickup: 'Galway City Pickup',

      },
      {
        id: '03',
        pickup: 'WexFord City Pickup',
      },
      {
        id: '04',
        pickup: 'Cork City Pickup',

      },
    ],

  },
  {
    id: '03',
    name: 'CELIEN DION',
    image: Photo3,
    tag: 'A, B, C, D',
    price: '35-35€ /seat',
    desc: 'Bus to Celine Dion 3Arena – 30 and 31 March 2023',
    date: [
      {
        id: '01',
        date: '12 January 2023'
      },
      {
        id: '02',
        date: '13 January 2023'
      },
      {
        id: '03',
        date: '14 January 2023'
      },
      {
        id: '04',
        date: '15 January 2023'
      },
    ],
    county: [
      {
        id: '01',
        county: 'Limerick'
      },
      {
        id: '02',
        county: 'Galway'
      }, {
        id: '03',
        county: 'WexFord'
      }, {
        id: '04',
        county: 'Cork'
      },
    ],
    pickup: [
      {
        id: '01',
        pickup: 'Limerick City Pickup'

      },

      {
        id: '02',
        pickup: 'Galway City Pickup',

      },
      {
        id: '03',
        pickup: 'WexFord City Pickup',
      },
      {
        id: '04',
        pickup: 'Cork City Pickup',

      },
    ],
  },
  {
    id: '04',
    name: 'MACKLEMORE',
    image: Photo4,
    tag: 'A, B, C, D',
    price: '€ /seat',
    desc: 'Bus to Macklemore 3Arena Dublin 3rd & 4th April 2023',
    date: [
      {
        id: '01',
        date: '12 January 2023'
      },
      {
        id: '02',
        date: '13 January 2023'
      },
      {
        id: '03',
        date: '14 January 2023'
      },
      {
        id: '04',
        date: '15 January 2023'
      },
    ],
    county: [
      {
        id: '01',
        county: 'Limerick'
      },
      {
        id: '02',
        county: 'Galway'
      }, {
        id: '03',
        county: 'WexFord'
      }, {
        id: '04',
        county: 'Cork'
      },
    ],
    pickup: [
      {
        id: '01',
        pickup: 'Limerick City Pickup',

      },

      {
        id: '02',
        pickup: 'Galway City Pickup',

      },
      {
        id: '03',
        pickup: 'WexFord City Pickup',
      },
      {
        id: '04',
        pickup: 'Cork City Pickup',

      },
    ],

  },
  {
    id: '05',
    name: 'LOUIS TOMLINSON',
    image: Photo5,
    tag: 'A, B, C, D',
    price: '25-35€ /seat',
    desc: 'Bus to Louis Tomlinson 3Arena Dublin 8th November 2023',
    date: [
      {
        id: '01',
        date: '12 January 2023'
      },
      {
        id: '02',
        date: '13 January 2023'
      },
      {
        id: '03',
        date: '14 January 2023'
      },
      {
        id: '04',
        date: '15 January 2023'
      },
    ],
    county: [
      {
        id: '01',
        county: 'Limerick'
      },
      {
        id: '02',
        county: 'Galway'
      }, {
        id: '03',
        county: 'WexFord'
      }, {
        id: '04',
        county: 'Cork'
      },
    ],
    pickup: [
      {
        id: '01',
        pickup: 'Limerick City Pickup',

      },

      {
        id: '02',
        pickup: 'Galway City Pickup',

      },
      {
        id: '03',
        pickup: 'WexFord City Pickup',
      },
      {
        id: '04',
        pickup: 'Cork City Pickup',

      },
    ],
  },
  {
    id: '06',
    name: 'SPRINGSTEEN & E STREETBAND',
    image: Photo6,
    tag: 'A, B, C, D',
    price: '30-30€ /seat',
    desc: 'Bus To Bruce Springsteen at The RDS Dublin 5th | 7th | 9th May 2023',
    date: [
      {
        id: '01',
        date: '12 January 2023'
      },
      {
        id: '02',
        date: '13 January 2023'
      },
      {
        id: '03',
        date: '14 January 2023'
      },
      {
        id: '04',
        date: '15 January 2023'
      },
    ],
    county: [
      {
        id: '01',
        county: 'Limerick'
      },
      {
        id: '02',
        county: 'Galway'
      }, {
        id: '03',
        county: 'WexFord'
      }, {
        id: '04',
        county: 'Cork'
      },
    ],
    pickup: [
      {
        id: '01',
        pickup: 'Limerick City Pickup',

      },

      {
        id: '02',
        pickup: 'Galway City Pickup',

      },
      {
        id: '03',
        pickup: 'WexFord City Pickup',
      },
      {
        id: '04',
        pickup: 'Cork City Pickup',

      },
    ],

  },

]

const AllEvents = (props) => {
  // let navigate = useNavigate();

  return (
    <React.Fragment >
      <CssBaseline />
      <Container maxWidth="xxl" >
        <Box sx={{
          m: 5,
          pt: 3,
          pb: 5,
          color: 'black',
          borderRadius: '30px',
          textAlign: 'center',
          backgroundColor: '#0e131f'
        }}>
          <div>
            <h1 style={{
              fontSize: '2.5rem',
              lineHeight: '1.5rem',
              color: '#00f9cc'
            }}>All Events And Concerts</h1>
            <h3 style={{
              fontSize: '1.25rem',
              lineHeight: ' 1.75rem',
              color: '#9ca3af'
            }}>Book Your indivisual Bus Seats</h3>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid  sx={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2px', // Adjust the gap between columns if needed
}} spacing={2}>
              {
                cards && cards.map((card, index) => {
                  // {card : id'01' } 
                  return (
                   <div key={index}>
                      <Link to={'/ProductDetail'} state={card}>
                        <Grid  m={3}>
                          <Card sx={{

                            maxWidth: 315, 
                            borderRadius: '15px', p: 0,
                            backgroundColor: '#111827',
                            textAlign: 'start'
                          }}>
                            <CardMedia
                              component="img"
                              height="300"
                             image={card.image}
                              alt=""/>
                            <CardContent>
                              <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}>
                                <Typography gutterBottom variant="h6" sx={{ color: 'white', textDecoration: 'none' }} component="div">
                                  {card.tag}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div" color='#00ffd0'>
                                  {card.name}
                                </Typography>
                              </Box>
                              <Typography variant="h6" color="#00ffd0" textOverflow='ellipsis'>
                                {card.desc}
                              </Typography>
                              <Typography variant="h6" color="#00f9cc">
                                {card.price} 
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Link>
                    </div>
                  )
                })
              }
            </Grid>
          </Box>
          <Stack spacing={5} direction="row" sx={{
            mt: 10,
            justifyContent: 'center',
            textAlign: 'center',
          }}>
            <Button variant="contained" style={{ backgroundColor: '#111827', border: '2px solid #00ffd0', color: '#00ffd0', borderRadius: '40px', padding: "12px 24px" }}>Show more events </Button>
            <Button variant="contained" style={{ backgroundColor: ' #00ffd0', color: 'black', borderRadius: '40px', padding: "12px 24px" }}>Contact</Button>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>

  )
}

export default AllEvents
