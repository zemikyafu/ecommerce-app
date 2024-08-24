import react from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Typography,Container,Box,Grid,Link,Checkbox,FormControlLabel,TextField,Button,Avatar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { green } from '@mui/material/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login=()=>{
    axios.defaults.baseURL="http://localhost:8080/api/user";
    const [formState, setFormState] = useState({ email: "", password: "" });
    const[message,setMessage]=useState({messageType:'',message:''})
    const navigate =  useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        await axios
          .post("/login", formState)
          .then((response) => {
            if (response.status === 200) {
             const {token,user}=response.data;
              localStorage.setItem("token",token);
              localStorage.setItem("user",JSON.stringify(user));
              console.log('user',localStorage.getItem('user'));
              console.log('token',localStorage.getItem('token'));
              setMessage({messageType:'success',message:'Login seccessfull.'})
           //   navigate("/home");
            }
          })
          .catch((error) => {
            if(error.response)
            {
                const statusCode= error.response.status;
                if (statusCode === 400) {
                    setMessage({messageType:'error',message:'Bad credentials. Please check your email and password.'})
                  } else if (statusCode === 500) {
                    setMessage({messageType:'error',message:'Server error. Please try again later.'})
                  } else {
                    setMessage({messageType:'error',message:`Unexpected error: ${statusCode}. Please try again.`})
                  }
               
            }
            else if (error.request) {
                console.log("No response received:", error.request);
                setMessage({messageType:'error-message',message:'Network error. Please check your internet connection.'})
                
              } else {
                console.log("Error", error.message);
                setMessage({messageType:'error-message',message:'An unknown error occurred. Please try again.'})
                
              }
           
          });
      };
      const handleOnchange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
      };
    
     return (
       // <ThemeProvider theme={defaultTheme}>
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
            <LockOutlinedIcon />
          
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          
          {message.message && <Alert severity={message.messageType}>{message.message}</Alert> }
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={handleOnchange}/>
            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"  onChange={handleOnchange} />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    // </ThemeProvider>
)
}
export default Login