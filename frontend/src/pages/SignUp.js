import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import {Typography,Container,Box,Grid,Link,TextField,Button,Avatar} from '@mui/material/';
import Alert from '@mui/material/Alert';
import { green } from '@mui/material/colors';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup =()=>{

    axios.defaults.baseURL="http://localhost:8080/api/user";
    const [formState, setFormState] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
   });
   const [confirmPassword, setConfirmPassword] = useState('');   
   const [message, setMessage] = useState({ messageType: '', message: '' });
   const navigate = useNavigate();

    const handleOnchange=(e)=>{
      const {name,value}=e.target;
      setFormState({...formState,[name]:value});
    }

    const handleSubmit=(e)=>{
      console.log('submite start');
      e.preventDefault();
      if (formState.password !== confirmPassword) {
         return  setMessage({ messageType: 'error', message: 'Passwords do not match!' });  
      }
      const submissionData = { ...formState };

       axios.post('/users', submissionData).then((response) => {
           console.log('response',response);
          if (response.status === 201) {
         
             //prob.registrationMessage({ messageType: 'success-message', message: 'Successfully registered! Please use your credentials to login.' });
             navigate('/');
          }
       
       }).catch((error) => {
          if (error.response) {
             const statusCode = error.response.status;
             console.log('error',error)
             if (statusCode === 400) {
                setMessage({ messageType: 'error', message: 'User Already exist. Please check your email.' });
             } else if (statusCode === 500) {
                setMessage({ messageType: 'error', message: 'Server error. Please try again later.' });
             } else {
                setMessage({ messageType: 'error', message: `Unexpected error: ${statusCode}. Please try again.` });
             }
          } else if (error.request) {
             console.log(error);
             setMessage({ messageType: 'error', message: 'Network error. Please check your internet connection.' });
          } else {
             setMessage({ messageType: 'error', message: 'An unknown error occurred. Please try again.' });
          }
       });
      }
    
    const handleConfirmPassword=(e)=>{
      setConfirmPassword(e.target.value)
    }
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: green[500] }}>
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {message.message && <Alert severity={message.messageType}>{message.message}</Alert> }
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleOnchange}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  onChange={handleConfirmPassword}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    )
}
export default Signup