import React, { useState } from 'react';
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './style.css';

const _appFeatured2 = [
  { title: 'Susain', description: "I just had a shot of the house espresso, and it was incredible! The rich, bold flavor packed a punch, with a perfect crema on top. It’s the ideal pick-me-up for those busy mornings!", coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhdi1JLYRVMthD5E2x0ZuikBIlZOLXRydug&s", rating: 5 },
  { title: 'Peter', description:"I tried their cold brew for the first time, and it was a game changer! Smooth and refreshing, it had just the right amount of sweetness without any bitterness. Perfect for a hot summer day!", coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0F-mqqp5wr_20zADD786y2phDzl0wDD85ng&s", rating: 4 },
  { title: 'Luna', description: "The cappuccino here is simply divine! The balance of velvety microfoam and robust espresso is perfect. Each sip is a delightful experience, and it’s beautifully presented as well!", coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmlNvmc0VWEB0GZHJfNclxGU2jEuTHAXl9A&s", rating: 5 },
  { title: 'Franklin', description: "I absolutely loved the flat white! The silky texture of the milk blended beautifully with the rich espresso, creating a harmonious flavor. It's the perfect drink for anyone who loves a creamy coffee!"

, coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQECqbyOvB6owkOOAeS_IRP2tmJTSSSPtUG4A&s", rating: 3 },
  { title: 'Anthony', description: "I enjoyed the pour-over coffee, and it was fantastic! The meticulous brewing process really brought out the unique flavor notes, with a bright acidity and a smooth finish. You can taste the quality!", coverUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5O1_hTfKd9ta7YXWgrRwS9yyGA0KCFEy-rA&s", rating: 5 },
];

const StarRating = ({ rating }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0' }}>
      {[...Array(5)].map((_, index) => (
        <span key={index} style={{ color: index < rating ? 'yellow' : 'gray', fontSize: '20px' }}>
          ★
        </span>
      ))}
    </div>
  );
};

export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % _appFeatured2.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? _appFeatured2.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getDisplayedImages = () => {
    const imagesToDisplay = [];
    for (let i = 0; i < 3; i++) {
      imagesToDisplay.push(_appFeatured2[(currentIndex + i) % _appFeatured2.length]);
    }
    return imagesToDisplay;
  };

  return (
    <Container className="testimonial" maxWidth={false}>
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography variant="h3" sx={{ color: 'var(--yellow-theme-nav-background-color)' }}>
          Testimonial
        </Typography>
        <Box
          sx={{
            width: '50%',
            height: '4px',
            backgroundColor: '#333',
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

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 10, textAlign: 'center' }}>
        <IconButton onClick={prevSlide} sx={{ color: 'black', fontSize: '1rem' }}>
          <FaArrowLeft />
        </IconButton>

        <Grid container spacing={2} sx={{ width: '80%' }}>
          {getDisplayedImages().map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  textAlign: 'center',
                  height: 250,
                }}
              >
                <img
                  src={item.coverUrl}
                  alt={item.title}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    border: '4px solid yellow',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ color: 'white', mt: 1 }}>
                {item.title}
              </Typography>
              <StarRating rating={item.rating} /> {/* Add the StarRating component */}
              <Typography variant="body2" sx={{ color: 'var(--yellow-theme-background-color)' }}>
                {item.description}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <IconButton onClick={nextSlide} sx={{ color: 'black', fontSize: '1rem' }}>
          <FaArrowRight />
        </IconButton>
      </Box>

      {/* Dots for navigation */}
      <div className='dot'>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
          {_appFeatured2.map((_, index) => (
            <Box
              key={index}
              onClick={() => goToSlide(index)}
              sx={{
                width: currentIndex === index ? '10px' : '6px',  // Bigger active dot
                height: currentIndex === index ? '10px' : '6px', // Bigger active dot
                margin: '0 6px',
                borderRadius: '50%',
                backgroundColor: currentIndex === index ? 'yellow' : 'gray',
                cursor: 'pointer',
                transition: 'all 0.3s ease',  // Smooth transition
              }}
            />
          ))}
        </Box>
      </div>
    </Container>
  );
};

export default Testimonial;
