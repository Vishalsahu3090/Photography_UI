import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import Header2 from '../Components/Header2/Header2';
import {Typography} from '@mui/material';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];


export default function Gallery() {
  const ismobile=useMediaQuery('(max-width:767px)');
  const isTablet=useMediaQuery('(min-width:768px)');
  const islaptop=useMediaQuery('(max-width:1023px)');
  const tablet=isTablet && islaptop;
  let column=0;
  let rowHeight=0;
 
  if(ismobile)
  {
    column=2;
    rowHeight=200;
  }
  else if(tablet)
  {
    column=3;
    rowHeight=300;
  }
  else{
    column=5;
    rowHeight=400;
   
    
  }
 
  return (
    <>
    <Header2/>
     <Typography
          variant="h4"
         
          sx={{
            letterSpacing: "8px",
            color: "rgb(187,160,133)",
            textAlign: "center",
            fontSize: { xs: 20, sm: 50 },
            fontFamily: "Raleway",
            p:4
          }}
        >
          Gallery
        </Typography>
     <ImageList sx={{ width: '100%', height: '100%',p:2, backgroundColor:'rgb(248,248,248)' }}  cols={column} rowHeight={rowHeight} gap={20}   >
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            srcSet={`${item.img}`}
            src={`${item.img}`}
            alt={item.title}
            loading="lazy"
           
          />
        </ImageListItem>
      ))}
    </ImageList>
   
    </>
   
   
  );
}


