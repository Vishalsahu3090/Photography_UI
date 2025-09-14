import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, useMediaQuery } from "@mui/material";
import Header2 from "../Components/Header2/Header2";
import { Typography, Button } from "@mui/material";
import {showedImages,remainImage} from "../assets/Collection/ImageData";
import Footer from "../Components/Footer";

export default function Gallery() {
  
  // Variable for mobile 
  const [show,setShow]=useState(false);
  const ismobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(min-width:768px)");
  const islaptop = useMediaQuery("(max-width:1023px)");
  const tablet = isTablet && islaptop;
  let column = 0;
  let rowHeight = 0;
  let space=0;

  //Properties for mobile ,tablet and laptop
  if (ismobile) {
    column = 2;
    rowHeight = 250;
    space=12;
  } else if (tablet) {
    column = 3;
    rowHeight = 300;
    space=15;
  } else {
    column = 5;
    rowHeight = 400;
    space=18;
  }

  //Function to handle show more & show less
  const handleShow=()=>{
    setShow(!show);
  }

  return (
    <>
      <Header2 />

      {/* Heading  */}
      <Typography
        variant="h4"
        sx={{
          letterSpacing: "8px",
          color: "rgb(187,160,133)",
          textAlign: "center",
          fontSize: { xs: 20, sm: 50 },
          fontFamily: "Raleway",
          p: 4,
        }}
      >
        Gallery
      </Typography>

      {/* Image Grid */}
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          p: 2,
          backgroundColor: "rgb(248,248,248)",
        }}
        cols={column}
        rowHeight={rowHeight}
        gap={space}
      >
        {
          showedImages.map((item)=>(
            <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
          ))
        }
        {
          show && (remainImage.map((item)=>(
            <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
          )))
        }
        
      </ImageList>

      {/* Show More Button */}
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom:1
        }}
      >
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "rgb(233,225,217)",
            color: "rgb(69,69,69)",
          }}
          onClick={handleShow}
          
        >
          { show? 'Show Less' : 'Show More'}
        </Button>
      </Box>     
      <Footer/>
    </>
  );
}
