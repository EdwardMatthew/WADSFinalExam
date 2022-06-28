import React from 'react';
import { Typography, Box, ImageList, ImageListItem, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const Home = () => {
    return (
        <div>
        <Typography display='flex' align='center' justifyContent='center'>
           <h1>What's New</h1>
        </Typography>
         <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList> 

        {/* Promotions */}
            <Typography display='flex' align='center' justifyContent='center'>
                <h1>Promotions</h1>
            </Typography>

            <img src="https://images.squarespace-cdn.com/content/v1/59d2b770017db271edfb22a5/1541483963804-GC58AMHR87EG4YPOK90B/Starbucks+Promo+Web2.jpg?format=2500w"/>

        {/*Social Media*/}
            <Typography display='flex' align='center' justifyContent='center'>
                <h1>Social Media</h1>
            </Typography>
            
        <IconButton a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiA_biN_s_4AhV4m9gFHdYyAKYQFnoECAUQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fstarbucks%2F%3Fhl%3Den&usg=AOvVaw1V9nfk7EoxwVCsR4fDm1O_" size='large' display='flex' align='center' justifyContent='center' color='inherit'>
            <InstagramIcon/> 
        </IconButton>
        <IconButton a href="https://www.starbucks.com" size='large' display='flex' align='center' justifyContent='center' color='inherit'>
            <LanguageIcon/> 
        </IconButton>
        </div>
    );
}

// all pictures taken from starbucks.com
const itemData = [
    {
        img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78745.jpg",
        title: "New Chocolate Cream Cold Brew",
    },
    {
        img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78746.jpg",
        title: "Vanilla Sweet Cream Cold Brew",
    },
    {
        img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78752.jpg",
        title: "Mocha Cookie Crumble Frappuccino® blended beverage",
    },
    {
        img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78753.jpg",
        title: "Caramel Ribbon Crunch Frappuccino® blended beverage"
    }
]

export default Home;
