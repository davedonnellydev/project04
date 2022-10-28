// adapted from https://mui.com/material-ui/react-app-bar/
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './GuestNav.css';

const GuestNav = (props) => {
        const { setGuestNav, authenticated } = props;
        const [anchorElNav, setAnchorElNav] = useState(null);

        const pages = [
          {
            name: 'Save the Date',
            public: true
          },
          {
            name: 'RSVP',
            public: true
          },
          {
            name: 'On The Day',
            public: false
          },
        //   {
        //     name: 'Travel & Accomm',
        //     public: false
        //   },
        //   {
        //     name: 'FAQs',
        //     public: false
        //   },
        //   {
        //     name: 'Gift Registry',
        //     public: false
        //   },
          {
            name: 'Logout',
            public: false
          }
      ];

        const handleOpenNavMenu = (e) => {
          setAnchorElNav(e.currentTarget);
        };

        const handleCloseNavMenu = (e) => {
            console.log(e);
            if (e.target.localName === 'p'){
                const nav = e.target.innerHTML.toUpperCase().replace('&AMP;', '&');
                console.log(nav);
                setGuestNav(nav);
            } else if (e.target.localName === 'button') {
                setGuestNav(e.target.innerText);
            }
          setAnchorElNav(null);
        };


    return (
    <AppBar position="static" className="GuestNav">
        <Container maxWidth='lg'>
            <Toolbar disableGutters>
                <i className="fa-light fa-rings-wedding"></i>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <i className="fa-light fa-bars"></i>
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {authenticated === false ? pages.filter(page => page.public === true).map((page, index) => (
                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    )) : pages.map((page, index) => (
                        <MenuItem key={index} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {authenticated === false ? pages.filter(page => page.public === true).map((page, index) => (
                    <Button
                        key={index}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.name}
                    </Button>
                    )) : pages.map((page, index) => (
                    <Button
                        key={index}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page.name}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
    )
}

export default GuestNav;