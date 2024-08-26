import { Container  ,CssBaseline,Box} from '@mui/material';
const Home =()=>{
return(
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
<h2 >Home page</h2>
    

</Box>
</Container>
)
   
}
export default Home