import Header2 from '../../Components/Header2/Header2.jsx'
import Author from '../../assets/Author.png'
import Box from '@mui/material/Box'
import Vector from '../../assets/Vector.png'

import { Typography,Card,CardActions,CardMedia,CardContent,Button } from "@mui/material";

const About = () => {
  return (
    <>
      <Header2/>
       <Box
      sx={{
        maxWidth: "900px",
        paddingTop:"400px",
        margin:"auto",
        p: 15
      }}>
        <Typography variant="h4"  gutterBottom sx={{letterSpacing:"8px",color:"rgb(187,160,133)",textAlign:"center",fontSize:{xs:"20px",sm:"30px"}}}>
            ABOUT
        </Typography>
        <Typography  sx={{color:"rgb(79,79,79)",  fontWeight:'100', textAlign:"center"  ,fontSize:{xs:"20px",sm:"30px",md:"40px"}} }>
            MY STORY
        </Typography>
         </Box>

        <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap:"8rem",
        overflow: "hidden",
      }}
    >
      {/* Left Image */}
      <CardMedia
        component="img"
        image={Author}
        sx={{
          width: { xs: "500px", md: "660px" },
          height: { xs: '500px', md: "700px" },
          border: "1px solid black"
        }}
        
      />
      {/* <img /> */}

      {/* Right Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
        }}
      >
        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }} style={{paddingRight:"8rem"}}>
          Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec
          potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem.
          Velit tellus vitae massa sed egestas ornare pretium. Donec odio faucibus
          consectetur feugiat varius.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }} style={{paddingRight:"8rem"}}>
          Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec
          potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem.
          Velit tellus
        </Typography>

        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }} style={{paddingRight:"8rem"}}>
          Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec
          potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem.
          Velit tellus vitae massa sed egestas ornare pretium
        </Typography>

        <CardMedia
        component="img"
        image={Vector}
        sx={{
          width: { xs: "10px", md: "100px" },
          height: { xs: "10px", md: "100px" }
        }}
        style={{marginBottom:"20px",alignItems:"center"}}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e6dcd4",
            color: "#5a4a42",
            textTransform: "none",
            width: "fit-content",
            "&:hover": {
              backgroundColor: "#d9c8bd",
            },
            marginTop:"1rem",
            padding:"0.5rem 1rem"
          }}
        >
          View Portfolio
        </Button>
      </Box>
    </Card>
    
    </>
  )
}

export default About
