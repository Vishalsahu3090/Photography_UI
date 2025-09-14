import React from "react";
import { Box, Grid } from "@mui/material";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "rgb(233,225,217)" ,marginTop:5 }}>
        <Grid size={{ xs: 6, sm: 12, lg: 12 }} sx={{paddingTop:2}} >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              justifyContent: "center",
              marginLeft:{xs:2},
              gap: { xs: 1, sm: 2, lg: 2 },
              fontSize:{xs:10,sm:15,lg:20},
              marginBottom:2
            }}
          >
            <Link to="/home" style={{color: "rgb(69,69,69)", textDecoration:'none'}}  >HOME</Link>
            <Link to="/about" style={{color: "rgb(69,69,69)",textDecoration:'none'}}>ABOUT</Link>
            <Link to="/services" style={{color: "rgb(69,69,69)",textDecoration:'none'}}>SERVICES</Link>
            <Link to="/portfolio" style={{color: "rgb(69,69,69)",textDecoration:'none'}}>PORTFOLIO</Link>
            <Link to="/gallery" style={{color: "rgb(69,69,69)",textDecoration:'none'}}>GALLERY</Link>
            <Link to="/contact" style={{color: "rgb(69,69,69)",textDecoration:'none'}}>CONTACT</Link>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, sm: 12, lg: 12 }}>
          <Box component={"img"} src={logo} width={{xs:'80%',sm:'30%',lg:'30%'}} height= {{xs:80,lg:100}} marginLeft={{sm :40, lg:70}} marginTop={{xs:5}}/>
        </Grid>
      </Grid>
    </>
  );
}
export default Footer;
