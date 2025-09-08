import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function Services() {
  return (
    <>
     {/* Main Container */}
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          p: 2,
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            letterSpacing: "8px",
            color: "rgb(187,160,133)",
            textAlign: "center",
            fontSize: { xs: 20, sm: 30},
            fontFamily:'Raleway'
          }}
        >
          SERVICES
        </Typography>

          {/* Sub Heading */}
        <Typography
          sx={{
            color: "rgb(79,79,79)",
            fontWeight: "100",
            textAlign: "center",
            fontSize: { xs: 20, sm: 30, md: 40 },
            fontFamily:"Cormorant Garamond"
          }}
          gutterBottom
        >
          PHOTOGRAPHY PACKAGES
        </Typography>

         {/* Servcies Card */}
        <Grid container spacing={2}>

            {/* Card-one */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <Box
              component={'img'}
                sx={{width:"100%", height: 400 }}
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757331324/Service-one-pic_ha4f75.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",color:"rgb(89,89,89)",fontSize:{xs:30,sm:40,md:50}, fontFamily:"Ephesis"}} >
                 Wedding
                </Typography>
                <Typography variant="body2" sx={{fontSize:{xs:15,sm:20,md:28},fontFamily:"Cormorant Garamond", }}>
                 500+ High-Quality Photos <br />
                 6 Hours HD Footage <br />
                 *Additional Photographer
                  subject to charge <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>

           {/* Card-two */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card >
              <Box
              component={'img'}
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757331324/Service-two-pic_jjqxlu.png"
                sx={{width:"100%",height:400}}
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",color:"rgb(89,89,89)",fontSize:{xs:30,sm:40,md:50}, fontFamily:"Ephesis"}}>
                  Portrait
                </Typography>
                <Typography variant="body2"sx={{fontSize:{xs:15,sm:20,md:28},fontFamily:"Cormorant Garamond"}}>
                 Atleast 10 High Quality Photos <br />
                 Professionally Edited <br />
                 Hourly rates applied <br />
                 Videographer subject to charge <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>

           {/* Card - third */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card >
              <Box
                component={'img'}
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757331324/Service-third-pic_cnvr3s.png"
                sx={{width:'100%',height:400}}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",color:"rgb(89,89,89)",fontSize:{xs:"30px",sm:"40px",md:"50px"}, fontFamily:"Ephesis"}}>
                 Engagement
                </Typography>
                <Typography variant="body2"sx={{fontSize:{xs:15,sm:20,md:28},fontFamily:"Cormorant Garamond"}}>
                200 High-Quality Photos <br />
                3 Hours HD Footage <br />
                *Additional Photographer subject to charge <br />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    
      </Box>
    </>
  );
}

export default Services;
