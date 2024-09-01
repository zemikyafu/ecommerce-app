import { Container, CssBaseline,Box, Card, CardHeader, CardMedia,CardActions, Typography, CardContent,Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import axios from 'axios'
const OrderCard=()=>{
  const API='http://localhost:8080/api/product'
  const [products,setProducts]=useState([]);
  const[message,setMessage]=useState({messageType:'',message:''})

    useEffect( ()=>{

        const fetchProductData= async()=>{
          try {
      
            const response= await axios.get(API+'/products');
            console.log('response',response)
            if(response.status==200)
            {
              setProducts(response.data);
            }
            
           
       } catch (error) {
         if(error.response)
           {
               const statusCode= error.response.status;
                if (statusCode === 500) {
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
       }
  
        }
      fetchProductData(); 

    },[])
return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
        }}>
              {message.message && <Alert severity={message.messageType}>{message.message}</Alert> }
              {products.map((product)=>(
                 <Card sx={{width:600, marginTop:5 }}>
                 <CardContent>
                 <Typography variant="h5"  component='div' sx={{color:'text.primary', textAlign:'left'}}>
                     {product.name}
                     </Typography>
                 <Typography variant="h6"  component='div' sx={{color:'text.secondary',textAlign:'left'}}>
                     {product.description}
                     </Typography>
                     <Typography variant="h6"  component='div' sx={{color:'text.secondary',textAlign:'left'}}>
                     {product.price.toLocaleString("eu-us",{style:"currency",currency:"EUR"})}
                     </Typography>
                 </CardContent>
                 
                 <CardMedia
                   component="img"
                   height="100"
                   image={product.image}
                   alt={product.name}
                   sx={ {objectFit:'scale-down', width:'100%', height:'auto', maxHeight:'100px',float:'left', marginRight: '16px',
                    marginBottom: '16px',}}
                 
               />
                  <CardActions > 
                    <Button variant="contained" > 
                     Add to cart
                    </Button> 
                   
                </CardActions> 
              </Card> 
              )
                
                  
              )}
       

      </Box>
    </Container> 
)
}
export default OrderCard
