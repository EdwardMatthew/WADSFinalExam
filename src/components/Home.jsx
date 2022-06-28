import React from 'react';
import { Typography, Box, Grid } from '@mui/material'

const Home = () => {
    return (
        <div>
        <Typography display='flex' align='center' justifyContent='center'>
           <h1>What's New</h1>
        </Typography>
            <Grid container spacing={2}> 
                <Grid item sx={2} display='flex'> 
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78745.jpg"/> 
                </Grid>
                <Grid item sx={4}>
                    <button>Hi, World</button>
                </Grid> 
            </Grid>
        </div>
    );
}

export default Home;
