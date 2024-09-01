import { useState } from "react"
import {Box,TextField,Button,Grid}from '@mui/material'
// import {CloudUploadIcon} from '@mui/icons-material'
import UploadIcon from '@mui/icons-material/Upload';
const ProductForm=()=>{
    const [formData,setFormData]=useState({
    name:'',
    description:'',
    price:0.0,
    image_url:''
    })
    const handleOnchange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
   const handleFileChange=(e)=>{
    
   }

return(
  
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <TextField margin="normal"   required fullWidth id="name" label="name" name="name" lable="Name" value={formData.name} autoFocus onChange={handleOnchange}/>
    <TextField margin="normal" required fullWidth name="description"  label="Description" id="description" value={formData.description}  onChange={handleOnchange} />
    <TextField margin="normal" required fullWidth name="price" label="Price" type="" id="description" value={formData.price}  onChange={handleOnchange} />
    
    
  <Grid container spacing={2}>
    <Grid item xs={12} sm='7'>
     <TextField margin="normal" required fullWidth name="image_url" label="image_url" lable="Image URL" type="image_url" id="image_url" value={formData.image_url}  onChange={handleOnchange} />
    </Grid>
    <Grid item xs={12} sm='5'>
    {/* <Button
      component="label"
      role={undefined}
      variant="contained"
      sx={{ mt: 2, mb: 2 }}
      tabIndex={-1}
      startIcon={<UploadIcon />}

    >
      Upload file
    
    </Button> */}
      <input type="file" id="pictureFile" name="pictureFile" onChange={handleFileChange}/>
   </Grid>
  </Grid>
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
      Register Product
    </Button>
  </Box>
)
}
export default ProductForm

