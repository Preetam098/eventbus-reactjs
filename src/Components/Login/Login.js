import React, { useState, useEffect, useRef } from "react";
// import React, { Component } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Input,
} from "@mui/material";
// import BgImage from '../assets/bg-1.jpg'
import { useLocation } from "react-router-dom";
import { Email, Home, Label } from "@mui/icons-material";
// import { useNavigate } from 'react-router-dom';
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "../../Pages/Homepage";
// import validator from 'validator'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Signin from "../Signp/Index";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState(" ");
  const [Password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [emailvalid, setemailvalid] = useState(false);
  const [myObject, setMyObject] = useState("");
  let navigate = useNavigate("");

  // console.log('emailvalid', emailvalid);

  const handleSubmit = async (event) => {
    // console.log('chl rha hai')
    event.preventDefault();
    if (!emailvalid) {
      toast.warn(
        "Email Required",
        {
          position: toast.POSITION.TOP_RIGHT,
        },
        []
      );
    } else if (!Password) {
      toast.warn(
        "Password Required",
        {
          position: toast.POSITION.TOP_RIGHT,
        },
        []
      );
    } else {
      const res = await fetch(
        "https://reacteventbusdata-default-rtdb.firebaseio.com/EventBusData.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      toast.success("Login Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/Homepage");
      setSubmitted(true);
      setError(false);
    }

    setMyObject(
      localStorage.setItem("Email", email)
      // localStorage.setItem('Password', Password)
    );
  };

  const handleOnEmail = (e) => {
    setEmail(e.target.value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(e.target.value)) {
      setemailvalid(true);
    } else {
      setemailvalid(false);
    }
  };

  const handleOnPassword = (e) => {
    setPassword(e.target.value);
    var reg = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/";
    var test = reg.test(e.target.value);
    if (test) {
      // setPassword:('Password Is Valid');
      setSubmitted(true);
    } else {
      // console.log('Password Is Valid');
      setSubmitted(false);
    }
  };

  const handleClickShowPassword = (e) => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#111827",
        }}
      >
        <Paper
          variant="outlined"
          square
          sx={{
            height: 450,
            width: 600,
            padding: 2,
            backgroundColor: "#374151",
            borderRadius: "3vh",
          }}
        >
          <form method="POST">
            <Typography sx={{ textAlign: "center", color: "#00ffd0", my: 4 }}>
              <h1> Login </h1>
            </Typography>

            <Box
              sx={{
                mb: 2,
                textAlign: "center",
                // justifyContent:'center' ,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  mb: 1,
                }}
              >
                Email
              </Typography>
              <input
                id=""
                label="Email"
                type="Email"
                value={email}
                onChange={handleOnEmail}
                autoComplete="current-password"
              ></input>

              {!emailvalid && emailvalid ? (
                <p style={{}} className="message">
                  Email is not valid
                </p>
              ) : null}
            </Box>

            <Box sx={{ my: 2, textAlign: "center" }}>
              <div>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "22px",
                    mb: 1,
                  }}
                >
                  Password
                </Typography>
                <input
                  sx={{
                    my: 2,
                  }}
                  id=""
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    // <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                    // </InputAdornment>
                  }
                  label="Password"
                  onChange={handleOnPassword}
                />
              </div>
              {!submitted && submitted ? (
                <p
                  className=""
                  style={{ textAlign: "center", color: "white", my: 1 }}
                >
                  Password Is Not Valid{" "}
                </p>
              ) : null}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                align: "center",
              }}
            >
              <Button
                variant="text"
                onClick={handleSubmit}
                sx={{
                  width: "80%",
                  border: "2px solid #00ffd0 ",
                  borderRadius: "50px",
                  backgroundColor: "#374151",
                  color: "#00ffd0",
                }}
              >
                Continue
              </Button>
            </Box>

            <Box
              sx={{
                textAlign: "center",
                color: "#00ffd0",
                mt: "25px",
              }}
            >
              <p style={{ marginbottom: "5px" }}>
                {" "}
                New User?{" "}
                <Link style={{ color: "#00ffd0" }} to="/Signin">
                  Create An Account
                </Link>
              </p>

              <p style={{ marginTop: "15px" }}>
                <Link style={{ color: "#00ffd0" }} to="/ForgotPassword">
                  Forgot Password
                </Link>
              </p>
            </Box>
          </form>
        </Paper>
      </Box>
      <ToastContainer />
    </>
  );
};

export default Signup;
