import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const ConcertTravel = () => {
  return (
    <>

<React.Fragment>
      <CssBaseline />
      <Container maxWidth="m" sx={{
            maxWidth:'65%',
            mt:8,
            pb:10 ,
          backgroundColor:'#111827',

      }}>
      <div style={{
          m:5,
          pt:3,
          pb:5,
          color:'black',
          // borderRadius:'30px',
          textAlign:'center',
          // backgroundColor:'#f3f4f6',
          
      }}>
        <h2 style={{
            color:"#00f9cc",
            fontSize:'30px',
        }}> Concert Travel - Buses to Concerts & <br></br> Festivals </h2>
  
      <h3 style={{
         fontSize:'30px',
         color:'#878e9b'
      }}>Popular Buses to Concerts & Festival </h3>
    <div>
       <div style={{
        fontSize:'16px',
        color:'#878e9b'
       }}>
       <p >
            Event Bus is a licensed Concert Travel bus & Coach service operating high-quality coaches to major venues in ireland , most noteworthy 3Arena , Corke Park, Aviva Stadium, RDS , Salne Castle and many more spectacular Dublin venues . We are your first choice for coach travel in ireland while offering realiable same-day return travel to popular events such as concerts, festivals and matches . in addition to being the safest , most cost-effective way to travel to events , Events Bus have an extremely simple online booking method . As a result , Event Bus take the hassle out of travel! 
        </p>

        <p>
        What makes EventBus special is that we sell individual bus tickets making travel easy for the lone concert-goer. In contrast to our competitors, there’s no need to rent an entire coach from us. We travel direct, dropping you right outside the venue so that after the event you simply leave the venue and walk up the steps of the coach – no LUAS, taxi or long-distance walking required! EventBus also offers a customised group booking service.
        </p>

        <p>
        In conclusion, if you want to travel with a company that prioritises safety, comfort and value, then book your seat with EventBus today!
        </p>

         <p>
         If you have any questions, please don’t hesitate to call or email us. We also have a handy FAQ page to answer our customers frequently asked questions.
        </p>
       </div>
    </div>
      </div>
      </Container>
    </React.Fragment>
    

    </>
  )
}

export default ConcertTravel
