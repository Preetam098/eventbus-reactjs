import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Sliderhead1 from "../../../Assets/sliderhead1.jpg";
import photo3 from "../../../Assets/photo3.jpg";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Styles.css";
import slider1 from "../../../Assets/slider1.jpg";
import slider3 from "../../../Assets/slider3.jpg";
import slider2 from "../../../Assets/slider2.jpg";
import slider4 from "../../../Assets/slider4.jpg";
import slider5 from "../../../Assets/slider5.jpg";
import slider6 from "../../../Assets/slider6.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const Slider = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#111827",
        }}
      >
        <React.Fragment>
          <CssBaseline />
          {/* <Container maxWidth=""> */}
          <Box
            sx={{
              // width:'20%',
              // height:'1%',
              // display:'flex',
              // justifyContent:'center',
              // backgroundColor:'#111827',
              borderRadius: "2px",
              pt: 5,
            }}
          >
            <Carousel>
              <div style={{}}>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "50px ",
                  }}
                  src={Sliderhead1}
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    borderRadius: "50px ",
                  }}
                  src={Sliderhead1}
                />
              </div>
            </Carousel>
          </Box>

          {/* </Container> */}
        </React.Fragment>

        {/*  SMALL SLIDER HERE  */}

        <React.Fragment>
          <CssBaseline />
          {/* <Container maxWidth="xl"> */}
          <div
            sx={{
              paddingY: "20px",
            }}
          >
            <Carousel breakPoints={breakPoints}>
              <Item>
                <p id="pColor"> Cork Events</p>

                <img
                  style={{
                    width: "95%",
                    mx: "auto",
                    borderRadius: "20px",
                  }}
                  src={slider1}
                  alt=""
                />
              </Item>
              <Item>
                <p id="pColor"> 3 Arena Events</p>
                <img
                  style={{
                    width: "95%",
                    borderRadius: "20px",
                  }}
                  src={slider2}
                  alt=""
                />
              </Item>
              <Item>
                <p id="pColor"> Sports</p>
                <img
                  style={{
                    width: "95%",
                    borderRadius: "20px",
                  }}
                  src={slider3}
                  alt=""
                />
              </Item>
              <Item>
                <p id="pColor">Festivals</p>

                <img
                  style={{
                    width: "95%",
                    borderRadius: "20px",
                  }}
                  src={slider4}
                  alt=""
                />
              </Item>
              <Item>
                <p id="pColor"> Concerts</p>

                <img
                  style={{
                    width: "95%",
                    borderRadius: "20px",
                  }}
                  src={slider5}
                  alt=""
                />
              </Item>
              <Item>
                <p id="pColor"> All Events</p>

                <img
                  style={{
                    width: "95%",
                    borderRadius: "20px",
                  }}
                  src={slider6}
                  alt=""
                />
              </Item>
              {/* <Item>Seven</Item>
    <Item>Eight</Item> */}
            </Carousel>
          </div>

          {/* </Container> */}
        </React.Fragment>
      </Box>
    </>
  );
};

export default Slider;
