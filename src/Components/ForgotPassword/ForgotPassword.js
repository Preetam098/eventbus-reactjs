import React,{ useState, useEffect, useRef , } from 'react';
import { Box, TextField, Button, Paper, Typography, } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





const ForgotPasswrod = () => {
    const [email , setEmail] = useState(' ')
    const [emailvalid, setemailvalid] = useState(false);
    const [submitted, setSubmitted] = useState(false);
     const [error, setError] = useState(false);
    let navigate = useNavigate('');


    const handleSubmit = (e) => {
        // console.log('chl rha hai')
        e.preventDefault();
        if(!emailvalid){
          toast.warn("Email Required", {
            position: toast.POSITION.TOP_RIGHT
        }, []);
    }else{
        toast.success("Email Sent ", {
            position: toast.POSITION.TOP_RIGHT
        })
        setSubmitted(true);
        setError(false);
    }
}

const handleOnEmail = (e) => {
    e.preventDefault();

    setEmail(e.target.value);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(e.target.value))
    {
       setemailvalid(true)
    }else{
      setemailvalid(false)
    }
  
  };



  return (
  <>

<Box sx = {
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor:'#111827'
                
            }
        }>
             <Paper variant = "outlined"
        square sx = {
            { height: 350, width: 600, padding: 2,backgroundColor:'#374151' ,borderRadius:'3vh' }
        }>

<form style={{
        }}>
            <Typography sx={{textAlign:'center' , color:'#00ffd0'}}>
                <h1> Forgot Password </h1>
            </Typography>

            <Box sx = {
            { mb: 2 ,textAlign:'center',
            // justifyContent:'center' ,
                }
        }>


<TextField 
        id = ""
        label = "Email Address"
        type = "Email"
        value={ email }
        onChange={handleOnEmail}
        sx = {
            {width:'80%',  border:'2px solid #00ffd0 ',borderRadius:'50px'}
        }
        autoComplete = "current-password">
        </TextField>

{
        !emailvalid ?   <p style={{}} className="message">Email is not valid</p> : null
}

        </Box> 


        <Box sx={{
            display:'flex',
            justifyContent:'center',
            align:'center'
        }}>
         <Button 
        variant = "text" 
        onClick ={handleSubmit}
        sx = {
            {width: '80%',border:'2px solid #00ffd0 ',borderRadius:'50px',backgroundColor:'#374151', color:'#00ffd0', 
          }
        }>Continue</Button>

        
        </Box>

        <Box sx={{
        textAlign:'center',
        color:'#00ffd0'
      }}> 
      <p style = {
            { marginbottom: '5px' }
        }> New User? <Link  style={{ color:'#00ffd0'}} to="/Signin" >Create An Account</Link>
         </p>
      
         <p style = {
            { marginbottom: '5px' }
        }>  <Link  style={{ color:'#00ffd0'}} to="/Login" >Login</Link>
         </p>
      </Box>
        </form>

        </Paper>

    </Box>
    <ToastContainer />



  </>

  )
}

export default ForgotPasswrod
