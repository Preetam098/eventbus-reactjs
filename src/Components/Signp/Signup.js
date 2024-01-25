import React, { useState, useEffect, useRef } from "react";
// import React, { Component } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
// import BgImage from '../assets/bg-1.jpg'
import { useLocation } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { borderRadius } from "@mui/system";
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
import { Link } from "react-router-dom";
import Homepage from "../../Pages/Homepage";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [emailvalid, setemailvalid] = useState(false);
  const [myObject, setMyObject] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
    } else if (!ConfirmPassword) {
      toast.warn(
        "Confirm Password Required ",
        {
          position: toast.POSITION.TOP_RIGHT,
        },
        []
      );
    } else {
      toast.success("Login Successfully ", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/Homepage");
      setSubmitted(true);
      setError(false);
    }
    setMyObject(
      localStorage.setItem("Email", email),
      localStorage.setItem("Password", Password)
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
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
            display: "block",
          }}
        >
          <form style={{}}>
            <Typography sx={{ textAlign: "center", color: "#00ffd0" }}>
              <h1> Signup </h1>
            </Typography>

            <Box
              sx={{
                mb: 2,
                textAlign: "center",
                // justifyContent:'center' ,
              }}
            >
              <Typography  sx={{
                color: "white",
                fontSize: "22px",
                mb: 1,
              }}>
                Email
              </Typography>
              <input
                id=""
                label="Email"
                type="Email"
                value={email}
                onChange={handleOnEmail}
                sx={{
                  width: "80%",
                  border: "2px solid #00ffd0 ",
                  borderRadius: "50px",
                }}
                autoComplete="current-password"
              ></input>

              {!emailvalid && emailvalid ? (
                <p style={{ margin: 0 }} className="message">
                  Email is not valid
                </p>
              ) : null}
            </Box>

            <Box sx={{ mb: 2, textAlign: "center" }}>
          
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
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onChange={handleSubmit}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  onChange={handleOnPassword}
                />
             

              {!submitted && submitted ? (
                <p style={{ margin: 0 }} className="message">
                  Password Is Not Valid{" "}
                </p>
              ) : null}
            </Box>

            <Box
              sx={{
                mb: 2,
               textAlign:'center'
              }}
            >
               <Typography 
                 sx={{
                  color: "white",
                  fontSize: "22px",
                  mb: 1,
                }}
               >
                  ConfirmPassword
                </Typography>
              <input
                sx={{
                  width: "80%",
                  border: "2px solid #00ffd0 ",
                  borderRadius: "50px",
                }}
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                // value="handleConfirmPassword"
                autoComplete="current-password"
                onChange={handleConfirmPassword}
              />
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
              }}
            >
              <p style={{ marginbottom: "5px" }}>
                {" "}
                Already have an account?{" "}
                <a style={{ color: "#00ffd0" }} href="/Login">
                  Sign in
                </a>
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
