import React from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Typography } from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';

const Navbar = () => {
    return (
        <Box sx={{display:'inline'}}>
            <AppBar position='static' sx={{bgcolor:'#6f4e37'}}>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='home' sx={{display:'inline'}}>
                        <CoffeeIcon/>
                    </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:3}}>
                    Java 
                </Typography>
                <Button variant='h6' component='div' sx={{display:'inline'}}>
                    About Us 
                </Button>
                <Button variant='h6' component='div' sx={{display:'inline'}}>
                    Login 
                </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
