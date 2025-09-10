import {
  Box,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Input,
  TextField,
  Button,
  Stack
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Header2 from "../Components/Header2/Header2";



function Contact() {
  const show=useMediaQuery("(min-width:768px)");
  return (
    <>
    <Header2/>
      <Box  marginTop={5}>
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
        <Grid container spacing={3} sx={{margin:'auto',p:2}}>
            <Grid size={{xs:12,sm:6,lg:6}}>
                
                      <form action="https://formspree.io/f/xgvldndk" method="post">
                    <InputLabel
                    sx={{
                        color:'rgb(73,73,73)',
                        fontFamily:'Cormorant Garamond',
                        fontSize:{xs:15,sm:18,lg:30}
                    }}
                    >
                        Your Name
                    </InputLabel>
                    <FormControl fullWidth>
                        <Input type="text" name="'Name" />
                    </FormControl>
                     <InputLabel 
                      sx={{
                        color:'rgb(73,73,73)',
                        fontFamily:'Cormorant Garamond',
                        fontSize:{xs:15,sm:18,lg:30},
                        marginTop:2
                    }}
                     >
                        Contact
                        </InputLabel>
                    <FormControl fullWidth>
                        <Input type="number" name="number"/>
                    </FormControl>
                     <InputLabel 
                      sx={{
                        color:'rgb(73,73,73)',
                        fontFamily:'Cormorant Garamond',
                        fontSize:{xs:15,sm:18,lg:30},
                        marginTop:2
                    }}
                     >Event Dates</InputLabel>
                    <FormControl fullWidth>
                        <Input type="date" name="Date of Event"/>
                    </FormControl>
                     <InputLabel   sx={{
                        color:'rgb(73,73,73)',
                        fontFamily:'Cormorant Garamond',
                        fontSize:{xs:15,sm:18,lg:30},
                        marginTop:2
                    }}>Event Details</InputLabel>
                    <FormControl fullWidth>
                        <TextField multiline rows={6.5} name="Event Details" />
                    </FormControl>
                     <Button variant="contained" 
             type="submit"
             sx={{
              backgroundColor:'rgb(233,225,217)',
              color:'rgb(69,69,69)',
              marginTop:2
            
             }}
             >Submit</Button>
                </form>
          
              
            </Grid>
            {
              show &&( <Grid size={{xs:12,sm:6,lg:6}}>
                <Box component={'img'}
                  src="https://res.cloudinary.com/dcruh7av2/image/upload/v1757490238/Rectangle_501_1_fmm13x.png"
                  height={{xs:200,sm:430,lg:500}}
                  width={'100%'}
                >

                </Box>
            </Grid>)
            }
          
             

        </Grid>
       
       
      </Box>
    </>
  );
}
export default Contact;
