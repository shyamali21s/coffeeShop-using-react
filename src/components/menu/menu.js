import { Box, Container, Grid, Typography } from "@mui/material";
import coffe7 from '../../images/coffe7.jpeg';
import coffe2 from '../../images/coffe2.jpeg';
import coffe3 from '../../images/coffe3.jpeg';
import coffe4 from '../../images/coffe4.jpeg';
import coffe5 from '../../images/coffee5.jpeg';
import coffe6 from '../../images/coffe6.jpeg';
import './style.css';

const _appFeatured2 = [
  { title: 'Cappuccino', description: 'Price: $25', coverUrl: coffe7 },
  { title: 'Espresso', description: 'Price: $30.5', coverUrl: coffe2 },
  { title: 'Americano', description: 'Price: $10.5', coverUrl: coffe3 },
];

const menu2 = [
  { title: 'Latte', description: 'Price: $10', coverUrl: coffe4 },
  { title: 'Mocha', description: 'Price: $15', coverUrl: coffe5 },
  { title: 'French', description: 'Price: $20', coverUrl: coffe6 },
];

export const MenuComponent = () => (
  <Container className="menu" maxWidth={false} sx={{ paddingBottom: 5 }}> {/* Add padding to the bottom */}
    <Box sx={{ textAlign: 'center', mb: 10 }}>
      <Typography variant="h3" sx={{ color: 'var(--yellow-theme-sub-text-color)' }}>
        Our Menu
      </Typography>
      <Box
        sx={{
          width: '50%',
          height: '4px',
          backgroundColor: 'yellow',
          margin: '0 auto',
          animation: 'line-animation 2s infinite',
          '@keyframes line-animation': {
            '0%': { transform: 'scaleX(0)' },
            '50%': { transform: 'scaleX(1)' },
            '100%': { transform: 'scaleX(0)' },
          },
        }}
      />
    </Box>

    <Box sx={{ flexGrow: 1, mt: 0, p: 0, mb: 10 }}>
      <Grid container spacing={2}>
        {_appFeatured2.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ position: 'relative', textAlign: 'center', p: 0, height: 250 }}>
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
            <Typography variant="h6" sx={{ color: 'var(--yellow-theme-subtitle-text-color)', mt: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box sx={{ flexGrow: 1, mt: 0, p: 0, }}> {/* Increase the mb value here as well if needed */}
      <Grid container spacing={2}>
        {menu2.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ position: 'relative', textAlign: 'center', p: 0, height: 250 }}>
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
            <Typography variant="h6" sx={{ color: 'var(--yellow-theme-subtitle-text-color)', mt: 1 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default MenuComponent;
