import { Box, Button, Container, Grid, Typography } from "@mui/material";
import coffe7 from '../../images/coffe7.jpeg';
import coffe2 from '../../images/coffe2.jpeg'
import coffe3 from '../../images/coffe3.jpeg';
import coffe4 from '../../images/coffe4.jpeg'
import coffe5 from '../../images/coffee5.jpeg';
import coffe6 from '../../images/coffe6.jpeg'
import './style.css';


const _appFeatured2 = [
  {
    
    coverUrl: coffe7,
  },
  {
   
    coverUrl: coffe2,
  },
  {
  
    coverUrl: coffe3,
  },
 
];
const menu2=
[
    {
      
        coverUrl: coffe4,
      },
      {
      
        coverUrl: coffe5,
      },
      {
        
        coverUrl: coffe6,
      },
];
const menu3=
[
    {
      
        coverUrl: coffe4,
      },
      {
      
        coverUrl: coffe5,
      },
      {
        
        coverUrl: coffe6,
      },
];

export const Gallery = () => (
    
  <Container className="gallery" maxWidth={false}sx={{ paddingBottom: 10,backgroundColor:'#f8eeee'}}> 
    
 <Box sx={{ textAlign: 'center', mb: 10 ,}}>
 
    <Typography variant="h3" sx={{ color: 'var(--yellow-theme-nav-background-color)',mb:5 }}>
      Gallery
    </Typography>
  
      

      <Grid container spacing={2}>
        {_appFeatured2.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{
              position: 'relative',
              textAlign: 'center',
              p: 0,
              height: 250,
              mt:'20px',
            }}>
              <img
                src={item.coverUrl}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
             
            </Box>
            
         
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box sx={{ flexGrow: 1,  mt: 0, p: 0, mb: 0 }}>
      {/* Headline 1 */}
     

      <Grid container spacing={2}>
        {menu2.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{
              position: 'relative',
              textAlign: 'center',
              p: 0,
              height: 250,
            }}>
              <img
                src={item.coverUrl}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
             
            </Box>
            
          
          </Grid>
        ))}
      </Grid>
    </Box>
    
  </Container>
);

export default Gallery;
