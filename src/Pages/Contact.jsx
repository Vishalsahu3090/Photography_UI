import {
  Box,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Input,
  TextField,
  Button,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Header2 from "../Components/Header2/Header2";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";

function Contact() {
  const show = useMediaQuery("(min-width:768px)");
  return (
    <>
      <Header2 />
      <Box marginTop={5}>
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
          CONTACT
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
          GET IN TOUCH
        </Typography>

        {/* Grid Container */}
        <Grid container spacing={3} sx={{ margin: "auto", p: 2 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
            <form action="https://formspree.io/f/xgvldndk" method="post">
              <InputLabel
                sx={{
                  color: "rgb(73,73,73)",
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 15, sm: 18, lg: 30 },
                }}
              >
                Your Name
              </InputLabel>
              <FormControl fullWidth>
                <Input type="text" name="'Name" />
              </FormControl>
              <InputLabel
                sx={{
                  color: "rgb(73,73,73)",
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 15, sm: 18, lg: 30 },
                  marginTop: 2,
                }}
              >
                Contact
              </InputLabel>
              <FormControl fullWidth>
                <Input type="number" name="number" />
              </FormControl>
              <InputLabel
                sx={{
                  color: "rgb(73,73,73)",
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 15, sm: 18, lg: 30 },
                  marginTop: 2,
                }}
              >
                Event Dates
              </InputLabel>
              <FormControl fullWidth>
                <Input type="date" name="Date of Event" />
              </FormControl>
              <InputLabel
                sx={{
                  color: "rgb(73,73,73)",
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 15, sm: 18, lg: 30 },
                  marginTop: 2,
                }}
              >
                Event Details
              </InputLabel>
              <FormControl fullWidth>
                <TextField multiline rows={6.5} name="Event Details" />
              </FormControl>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  backgroundColor: "rgb(233,225,217)",
                  color: "rgb(69,69,69)",
                  marginTop: 2,
                }}
              >
                Submit
              </Button>
            </form>
          </Grid>
          {show && (
            <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
              <Box
                component={"img"}
                src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757490238/Rectangle_501_1_fmm13x.png"
                height={{ xs: 200, sm: 430, lg: 500 }}
                width={"100%"}
              ></Box>
            </Grid>
          )}
        </Grid>
      </Box>

      {/* Section two */}
      <Grid container marginTop={5}>
        {
          show &&(
            <Grid size={{ xs: 6, sm: 6, lg: 6 }}>
          <Box
            component={"img"}
            src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757566741/Rectangle_467_taxuzl.png"
            width={"100%"}
            height={{ xs: 250, sm: 300, lg: 600 }}
          />
        </Grid>
          )
        }

        {/* Third Section */}
        
        <Grid size={{ xs: 12, sm: 6, lg: 6 }}>
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              border: 1,
              height: { xs: 250, sm: 300, lg: 600 },
              gap: 2,
              p:2
            }}
          >
            <Box
              component={"div"}
              sx={{
                display: "flex",
                gap: 2,
                width:'50%'
              }}
            >
              <MailOutlinedIcon sx={{fontSize:{lg:40},color:'rgb(189,139,97)'}} />
              <Typography variant="body2" sx={{fontSize:{lg:20}}}>demo@gmail.com</Typography>
            </Box>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <LocationOnOutlinedIcon sx={{fontSize:{lg:40},color:'rgb(189,139,97)'}}/>
              <Typography variant="body2" sx={{fontSize:20}}>
                1st floor, One centre, 120, 56 Dukan St, Chappan Dukan, New
                Palasia, Indore, Madhya Pradesh 451010
              </Typography>
            </Box>

             <Box
              component={"div"}
              sx={{
                display: "flex",
                gap: 2,
              }}
            >
              <PhoneAndroidOutlinedIcon sx={{fontSize:{lg:40}, color:'rgb(189,139,97)'}} />
              <Typography variant="body2" sx={{fontSize:{lg:20}}}>
                123456789
              </Typography>
            </Box>

            
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Contact;
