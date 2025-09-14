import React, { useState } from "react";
import { Box, Typography, Grid, Button, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Header2 from "../Components/Header2/Header2.jsx";
import Footer from "../Components/Footer";

function Services() {
  // variables to check scren size
  const isSmall = useMediaQuery("(max-width:767px)");
  const isLarge = useMediaQuery("(min-width:1024px)");
  const show = isSmall || isLarge;

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderTop:'none',
    borderLeft:'none',
    borderRight:'none',
    "&::before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<AddOutlinedIcon sx={{ fontSize:{xs:40,sm:70,lg:80},color:'rgb(181,139,97)', }} />}
      {...props}
    />
  ))(({ theme }) => ({
   
    flexDirection: "row-reverse",
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
      {
        transform: "rotate(90deg)",
      },
    [`& .${accordionSummaryClasses.content}`]: {
      marginLeft: theme.spacing(1),
    },
   
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      {/* Header */}
      <Header2 />
      {/* First Section */}
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
            fontSize: { xs: 20, sm: 30 },
            fontFamily: "Raleway",
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
            fontFamily: "Cormorant Garamond",
          }}
          gutterBottom
        >
          PHOTOGRAPHY PACKAGES
        </Typography>

        {/* Servcies Card */}
        <Grid container spacing={2}>
          {/* Card-one */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ boxShadow: 3, height: { sx: 600, sm: 700, lg: 850 } }}>
              <Box
                component={"img"}
                sx={{
                  width: "100%",
                  height: { sx: 300, sm: 400, lg: 500 },
                  p: 2,
                }}
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757331324/Service-one-pic_ha4f75.png"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "rgb(89,89,89)",
                    fontSize: { xs: 30, sm: 40, md: 50 },
                    fontFamily: "Ephesis",
                  }}
                >
                  Wedding
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: 15, sm: 20, md: 28 },
                    fontFamily: "Cormorant Garamond",
                    p: 2,
                  }}
                >
                  500+ High-Quality Photos <br />
                  6 Hours HD Footage <br />
                  *Additional Photographer subject to charge
                </Typography>

                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "rgb(187,169,133)",
                    fontFamily: "Raleway",
                    letterSpacing: 3,
                    p: 2,
                    fontSize: { xs: 15, sm: 20, lg: 25 },
                  }}
                >
                  PER SESSION RS.700
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card-two */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ boxShadow: 3, height: { sx: 600, sm: 700, lg: 850 } }}>
              <Box
                component={"img"}
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757331324/Service-two-pic_jjqxlu.png"
                sx={{
                  width: "100%",
                  height: { sx: 300, sm: 400, lg: 500 },
                  p: 2,
                }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "rgb(89,89,89)",
                    fontSize: { xs: 30, sm: 40, md: 50 },
                    fontFamily: "Ephesis",
                  }}
                >
                  Portrait
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: 15, sm: 20, md: 28 },
                    fontFamily: "Cormorant Garamond",
                    p: 2,
                  }}
                >
                  Atleast 10 High Quality Photos <br />
                  Professionally Edited <br />
                  Hourly rates applied
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "rgb(187,169,133)",
                    fontFamily: "Raleway",
                    letterSpacing: 3,
                    p: 2,
                    fontSize: { xs: 15, sm: 20, lg: 25 },
                  }}
                >
                  PER SESSION RS.700
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card - third */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{ boxShadow: 3, height: { sx: 600, sm: 700, lg: 850 } }}>
              <Box
                component={"img"}
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757331324/Service-third-pic_cnvr3s.png"
                sx={{
                  width: "100%",
                  height: { sx: 300, sm: 400, lg: 500 },
                  p: 2,
                }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    textAlign: "center",
                    color: "rgb(89,89,89)",
                    fontSize: { xs: "30px", sm: "40px", md: "50px" },
                    fontFamily: "Ephesis",
                  }}
                >
                  Engagement
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: 15, sm: 20, md: 28 },
                    fontFamily: "Cormorant Garamond",
                    p: 2,
                  }}
                >
                  200 High-Quality Photos <br />
                  3 Hours HD Footage <br />
                  *Additional Photographer subject to charge <br />
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    color: "rgb(187,169,133)",
                    fontFamily: "Raleway",
                    letterSpacing: 3,
                    p: 2,
                    fontSize: { xs: 15, sm: 20, lg: 25 },
                  }}
                >
                  PER SESSION RS.700
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            m: 5,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              m: 10,
              borderColor: "rgb(187,160,133)",
              color: "rgb(69,69,69)",
              fontFamily: "Cormorant Garamond",
              fontSize: { xs: 15, sm: 20, lg: 25 },
            }}
          >
            GET IN TOUCH
          </Button>
        </Stack>
      </Box>

      {/* Second Section*/}

      {/* Second Section Main-Cointainer */}
      <Stack
        direction="column"
        sx={{
          alignItems: "center",
          width: "100%",
          height: { xs: 210, sm: 400 },
          backgroundColor: "rgb(233,225,217)",
        }}
      >
        <Box
          component="img"
          src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757399406/Vector_syzq86.png"
          sx={{ p: 3, height: { xs: 90, sm: 150 }, width: { xs: 90, sm: 150 } }}
        />
        <Typography
          variant="h3"
          sx={{
            width: "80%",
            fontSize: { xs: 20, sm: 40, lg: 60 },
            p: 2,
            textAlign: "center",
            color: "rgb(79,79,79)",
            fontFamily: "Cormorant Garamond",
          }}
        >
          Celebrate your love with stunning images that will be cherished for a
          lifetime
        </Typography>
      </Stack>

      {/* Third Section  */}

      {/* Third Section Main- Container */}
      <Box
        sx={{
          paddingTop: 5,
          width: "90%",
          margin: "auto",
        }}
      >
        {/* Third Section Heading */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            letterSpacing: "8px",
            color: "rgb(187,160,133)",
            textAlign: "center",
            fontSize: { xs: 20, sm: 30 },
            fontFamily: "Raleway",
          }}
        >
          PROCESS
        </Typography>

        {/* Third Section Sub-Heading */}
        <Typography
          sx={{
            color: "rgb(79,79,79)",
            fontWeight: "100",
            textAlign: "center",
            fontSize: { xs: 40, sm: 50, md: 60 },
            fontFamily: "Cormorant Garamond",
          }}
          gutterBottom
        >
          What to Expect
        </Typography>

        {/* Grid Container */}
        <Grid container spacing={5}>
          {/* First Block*/}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component="img"
              src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757408240/Rectangle_443_zm9vsi.png"
              sx={{ width: "100%", height: { lg: 600 } }}
            ></Box>
          </Grid>

          {/* Second Block */}
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                borderBottom: 2,
                fontFamily: "Cormorant",
                fontWeight: "500",
                fontSize: { xs: 50, sm: 70, lg: 120 },
                color: "rgb(181,139,97)",
              }}
            >
              1
            </Typography>
            <Typography
              sx={{
                color: "rgb(45,45,45)",
                textAlign: "center",
                fontSize: { xs: 20, sm: 25, lg: 30 },
                fontFamily: "Cormorant Garamond",
              }}
            >
              BREAKING THE ICE
            </Typography>
            <Typography
              variant="body1"
              sx={{
                paddingTop: 5,
                textAlign: "center",
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily: "Cormorant Garamond",
                color: "rgb(45,45,45)",
              }}
            >
              Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt
              consequat nec potenti. Justo molestie amet vulputate aliquam.
            </Typography>
          </Grid>

          {/* Third Block */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component="img"
              src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757408241/Rectangle_442_vmq7qh.png"
              sx={{ width: "100%", height: { lg: 600 } }}
            ></Box>
          </Grid>

          {/* Fourth Block */}
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                borderBottom: 2,
                fontFamily: "Cormorant",
                fontWeight: "500",
                fontSize: { xs: 50, sm: 70, lg: 120 },
                color: "rgb(181,139,97)",
              }}
            >
              2
            </Typography>
            <Typography
              sx={{
                color: "rgb(45,45,45)",
                textAlign: "center",
                fontSize: { xs: 20, sm: 25, lg: 30 },
                fontFamily: "Cormorant Garamond",
              }}
            >
              PLANNING & PREPARATION
            </Typography>
            <Typography
              variant="body1"
              sx={{
                paddingTop: 5,
                textAlign: "center",
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily: "Cormorant Garamond",
                color: "rgb(45,45,45)",
              }}
            >
              Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt
              consequat nec potenti. Justo molestie amet vulputate aliquam.
            </Typography>
          </Grid>

          {/* Fifth Block */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component="img"
              src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757408240/Author_Bio_Photo_ohklep.png"
              sx={{ width: "100%", height: { lg: 600 } }}
            ></Box>
          </Grid>

          {/* Sixth Block */}
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                borderBottom: 2,
                fontFamily: "Cormorant",
                fontWeight: "500",
                fontSize: { xs: 50, sm: 70, lg: 120 },
                color: "rgb(181,139,97)",
              }}
            >
              3
            </Typography>
            <Typography
              sx={{
                color: "rgb(45,45,45)",
                textAlign: "center",
                fontSize: { xs: 20, sm: 25, lg: 30 },
                fontFamily: "Cormorant Garamond",
              }}
            >
              SESSION COVERAGE
            </Typography>
            <Typography
              variant="body1"
              sx={{
                paddingTop: 5,
                textAlign: "center",
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily: "Cormorant Garamond",
                color: "rgb(45,45,45)",
              }}
            >
              Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt
              consequat nec potenti. Justo molestie amet vulputate aliquam.
            </Typography>
          </Grid>

          {/* Seventh Block */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box
              component="img"
              src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757408241/Rectangle_450_vp67ns.png"
              sx={{ width: "100%", height: { lg: 600 } }}
            ></Box>
          </Grid>

          {/* Eigth Block */}
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                borderBottom: 2,
                fontFamily: "Cormorant",
                fontWeight: "500",
                fontSize: { xs: 50, sm: 70, lg: 120 },
                color: "rgb(181,139,97)",
              }}
            >
              4
            </Typography>
            <Typography
              sx={{
                color: "rgb(45,45,45)",
                textAlign: "center",
                fontSize: { xs: 20, sm: 25, lg: 30 },
                fontFamily: "Cormorant Garamond",
              }}
            >
              BREAKING THE ICE
            </Typography>
            <Typography
              variant="body1"
              sx={{
                paddingTop: 5,
                textAlign: "center",
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily: "Cormorant Garamond",
                color: "rgb(45,45,45)",
              }}
            >
              Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt
              consequat nec potenti. Justo molestie amet vulputate aliquam.
            </Typography>
          </Grid>
          {/* Ninth Block */}
          {show && (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component="img"
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757408241/Rectangle_449_i6aj0s.png"
                sx={{ width: "100%", height: { lg: 600 } }}
              ></Box>
            </Grid>
          )}
        </Grid>
      </Box>

      {/* Fourth Section */}

      {/* Fourth Section Main-Container */}
      <Stack
        direction="column"
        spacing={2}
        sx={{
          marginTop: 8,
          alignItems: "center",
        }}
      >
        {/* Fourth Section Heading */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            letterSpacing: "8px",
            color: "rgb(187,160,133)",
            textAlign: "center",
            fontSize: { xs: 20, sm: 30 },
            fontFamily: "Raleway",
          }}
        >
          FAQ
        </Typography>

        {/* Fourth Section Sub-Heading */}
        <Typography
          sx={{
            color: "rgb(79,79,79)",
            fontWeight: "100",
            textAlign: "center",
            fontSize: { xs: 40, sm: 50, md: 60 },
            fontFamily: "Cormorant Garamond",
          }}
          gutterBottom
        >
          Any Queries?
        </Typography>

        {/* FAQ QUESTIONS */}
        <Box component="div" sx={{ width: "80%" }}>

           {/* Question-one */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography component="span"
                sx={{
                  color:'rgb(45,45,45)',
                  fontFamily:'Cormorant Garamond',
                  fontSize: { xs: 15, sm: 25 },
                }}
              >
                WHAT IS YOUR PHOTOGRAPHY STYLE?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
              sx={{
                textAlign:'justify',    
                color:'rgb(45,45,45)',
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily:'Cormorant Garamond'
              }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Question-two */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography component="span"
                 sx={{
                  color:'rgb(45,45,45)',
                  fontFamily:'Cormorant Garamond',
                  fontSize: { xs: 15, sm: 25 },
                }}
              >
                HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
               sx={{
                textAlign:'justify',    
                color:'rgb(45,45,45)',
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily:'Cormorant Garamond'
              }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Question Three */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="span" 
                sx={{
                  color:'rgb(45,45,45)',
                  fontFamily:'Cormorant Garamond',
                  fontSize: { xs: 15, sm: 25 },
                }}
              >
                DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
               sx={{
                textAlign:'justify',    
                color:'rgb(45,45,45)',
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily:'Cormorant Garamond'
              }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Question-four */}
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="span" 
                sx={{
                  color:'rgb(45,45,45)',
                  fontFamily:'Cormorant Garamond',
                  fontSize: { xs: 15, sm: 25 },
                }}
              >
                CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
               sx={{
                textAlign:'justify',    
                color:'rgb(45,45,45)',
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily:'Cormorant Garamond'
              }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* Question-five */}
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography component="span" 
                sx={{
                  color:'rgb(45,45,45)',
                  fontFamily:'Cormorant Garamond',
                  fontSize: { xs: 15, sm: 25 },
                }}
              >
               HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography 
               sx={{
                textAlign:'justify',    
                color:'rgb(45,45,45)',
                fontSize: { xs: 18, sm: 20, lg: 25 },
                fontFamily:'Cormorant Garamond'
              }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Stack>
      <Footer/>
    </>
  );
}

export default Services;
