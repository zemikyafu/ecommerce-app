 
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Container  ,CssBaseline,Box} from '@mui/material';
const NotFound=()=>{
    return(
    
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <h2 >404 - Page Not Found</h2>
              
         <p>The page you're looking for doesn't exist.</p>
         </Box>
      

       )
}    
export default NotFound