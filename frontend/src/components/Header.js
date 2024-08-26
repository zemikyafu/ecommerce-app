
import { AppBar, Avatar, Toolbar, Typography,IconButton,Menu,MenuItem} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { green } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import store from '../redux/store';
import { useNavigate, } from 'react-router-dom';
function Header() {
  const loggedIn= useSelector((state)=>state.login.loggedIn);
  const [openMenu, setOpenMenu] = useState(null)
   const navigate =  useNavigate();

  const handleMenu = (e) => {
    setOpenMenu(e.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  const handleLogout=()=>{
   store.dispatch({type:'user/logout'});
   navigate("/home");
 
  }
  return (
      <AppBar>
        <Toolbar >
          <Avatar sx={{m:1, bgcolor:green[500]}}>
            <StorefrontIcon/>
          </Avatar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 10 }}> Ecommerce-App</Typography>
          {loggedIn && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={openMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(openMenu)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>LogOut</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
   
  );
}

export default Header;
