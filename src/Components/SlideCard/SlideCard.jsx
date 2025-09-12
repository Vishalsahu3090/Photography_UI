
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function SlideCard({pic}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex' , height:{xs:300,sm:300,lg:500},justifyContent:"center",backgroundColor:'#E9E1D9'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' ,width:{xs:200,sm:300,lg:400}, paddingLeft:8,paddingTop:{xs:8,sm:10,lg:15}}}>
          <Typography component="div" variant="h5"  sx={{textAlign:"center",fontSize:{xs:15,sm:25,lg:30}}}>
            Showcasing your Big Day in a Memorable & Unforgettable way.
          </Typography>
          <Typography component="div" variant="h5"  sx={{textAlign:"center",fontSize:{xs:15,sm:25,lg:30},paddingTop:5}}>
            ALIA & RANBIR
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 400, marginTop:2, marginBottom:2 }}
        image={pic}
        alt="Live from space album cover"
      />
    </Card>
  );
}
