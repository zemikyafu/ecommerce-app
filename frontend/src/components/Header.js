
import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { green } from '@mui/material/colors';
function Header() {
  return (
 
      <AppBar>
        <Toolbar >
          <Avatar sx={{m:1, bgcolor:green[500]}}>
            <StorefrontIcon/>
          </Avatar>
          <Typography variant='h6'> Ecommerce-App</Typography>
        </Toolbar>
      </AppBar>
   
  );
}

export default Header;
