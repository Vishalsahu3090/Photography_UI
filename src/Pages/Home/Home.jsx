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
import Header from "../../Components/Header/Header";
import PriceCard from "../../Components/Card/PriceCard";
import leaf from '../../assets/horizontal-leave.png';
import Bigleaf from '../../assets/big-leaf.png'
import AuthorBio from '../../assets/author-bio-photo.png'
import group1 from '../../assets/group1.png'
import group2 from '../../assets/group2.png'
import group3 from '../../assets/group3.png'
import env from '../../assets/env.png'
import featured1 from '../../assets/featured-1.png';
import featured2 from '../../assets/featured-2.png';
import contact from '../../assets/contact-img.png';
import Carousel from 'react-bootstrap/Carousel';
import SlideCard from "../../Components/SlideCard/SlideCard";
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import './Home.css'

function Home(){
    const show = useMediaQuery("(min-width:768px)");
    return(
    <>
    <Header/>

    {/* first section */}

    <div className="leaf-section">
        <img src={leaf}  />
        <p className="port">AWARD WINING PHOTOGRAPHY</p>
        <p className="leaf-para">Showcasing your big day in a memorable and unforgettable way.</p>
    </div>

    {/* second section */}

    <div className="about-author">
            <div className="author-img">
            <img src={AuthorBio} alt="author" />
            </div>
    
            <div className="author-content">
              <p style={{textAlign:"center"}}>Hello, My Name is Tessa</p>
              <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.</p>
              <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat.</p>
              <div className='img-btn'>
              <img src={Bigleaf} />
              <p className="author-name-para">Tessa.M</p>
              <button>Learn More</button>
              </div>
            </div>
    
           </div>

    {/* third section */}

    <div className="heading">
        <div className="port">SERVICES</div>
        <div className="high">What I Offer</div>
    </div>

    <div className="price-card-container">
        <PriceCard img={group1} venue="Wedding" price="$2999"/>
        <PriceCard img={group2} venue="Portrait" price="$399"/>
        <PriceCard img={group3} venue="Engagement" price="$1999"/>
    </div>

    {/* fourth section */}

        <div className="fourth-section-home">
            <div className="envolpe-border">
            <div className="envolpe-div">
                <img src={env} />
                <p className="env-head" style={{color:"#686868",textAlign:"center"}}>Creative, Passionate, Artistic</p>
                <p className="env-para">Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan </p>
            </div>
            </div>
        </div>

    {/* fiveth section */}

    <div className="heading">
        <div className="port">PORTFOLIO</div>
        <div className="high">Featured Story</div>
    </div>

        <div className="fiveth-section">
            <div className="featured-text">
                <p className="num">01</p>
                <p className="env-head" style={{color: '#414141'}}>Richardo & Michelle</p>
                <p className="env-para" style={{textAlign:"start"}}>Lorem ipsum dolor sit amet consecte Dignissim consectetur tristique purus vehicula felis velit.</p>
            </div>

            <div className="featured-images">
                <img src={featured1}/>
                <img src={featured2}/>
            </div>

        </div><br />
        <div className="fiveth-button">
         <button className="btn-more" >View Gallery</button>
        </div>

        {/* sixth section */}

        <div className="slider-section">
            <p className="venue" style={{textAlign:"center"}}>Client Testimonials</p>
        </div>

       <div className="slider-container">

        <Carousel>
      
      <Carousel.Item className="slide">
         <SlideCard pic={card1}/>
      </Carousel.Item>

      <Carousel.Item className="slide">     
          <SlideCard pic={card2}/>
      </Carousel.Item>
      
      <Carousel.Item className="slide">
          <SlideCard pic={card3}/>
      </Carousel.Item>
      
    </Carousel>
        </div>

        {/* eigth section */}

        <div>
            <p className="num-section-heading-eight" >HELPING COUPLES BRING TO LIFE <br />THEIR WEDDING DREAMS</p>
        </div>

        <div className="num-container">
            <div className="single-num">
                <p className="num-class">12</p>
                <p className="year-class">Years Experience</p>
            </div>

            <div className="single-num">
                <p className="num-class">10K</p>
                <p className="year-class">Photos Delivered</p>
            </div>

            <div className="single-num">
                <p className="num-class">300</p>
                <p className="year-class">Events Captured</p>
            </div>

            <div className="single-num">
                <p className="num-class">6</p>
                <p className="year-class">Awards</p>
            </div>

        </div>




        {/* contact-form-section */}
       
        <Box marginTop={5} sx={{backgroundColor:"#f8f8f8",paddingTop:4}} >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            letterSpacing: "8px",
            color: "rgb(187,160,133)",
            marginLeft:3,
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
            fontWeight: "300",
             marginLeft:3,
            fontSize: { xs: 25, sm: 35, md: 55 },
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
                Name
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
                Email
              </InputLabel>
              <FormControl fullWidth>
                <Input type="email" name="email" />
              </FormControl>
              

             
              <InputLabel
                sx={{
                  color: "rgb(73,73,73)",
                  fontFamily: "Cormorant Garamond",
                  fontSize: { xs: 15, sm: 18, lg: 30 },
                  marginTop: 2,
                }}
              >
                Message
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
                Send
              </Button>
            </form>
          </Grid>
          {show && (
            <Grid size={{ xs: 12, sm: 6, lg: 5 }}>
              <Box
                component={"img"}
                src={contact}
                height={{ xs: 200, sm: 430, lg: 600 }}
                width={"100%"}
              ></Box>
            </Grid>
          )}
        </Grid>
      </Box>


         
       </>
    );
}

export default Home;