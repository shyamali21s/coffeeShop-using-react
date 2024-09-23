import React, { useState } from 'react';
import { Grid, Box, Typography, Button, Modal } from '@mui/material';
import { Link } from 'react-scroll';
import { ReactTyped } from 'react-typed';
import coffe from '../../images/coffee9.png';
import Contact from '../contact/contact';
import './style.css'
import OrderModal from './modal';
function Home() {
    const [openOrderModal, setOpenOrderModal] = useState(false);

    const handleOpenOrderModal = () => {
        setOpenOrderModal(true);
    };

    const handleCloseOrderModal = () => {
        setOpenOrderModal(false);
    };

    const items = [
        {
            id: '1',
            title:'The Brew Coffeeshop',
            subtitle: ['Start your day with us', 'Brewed to perfection'],
            description: 'Welcome to our coffee shop, explore a variety of coffee here..',
            coverUrl: coffe,
        },
    ];

    return (
        <div className="home" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
                {items.map((item) => (
                    <Grid item xs={12} key={item.id} container alignItems="center">
                        {/* Left side: Title and Description */}
                        <Grid item xs={12} sm={6}>
                            <Typography
                                variant="h6"
                                sx={{ color: 'var(--yellow-theme-subtitle-text-color)', fontWeight: 'bold', fontSize: "25px", textAlign: 'center' }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                variant="h5"
                                sx={{ color: 'var(--yellow-theme-main-color)', fontStyle: 'italic', textAlign: 'center' }}
                            >
                                <ReactTyped
                                    strings={item.subtitle}
                                    typeSpeed={90}
                                    backSpeed={90}
                                    backDelay={1000}
                                    loop={true}
                                    showCursor={true}
                                    cursorChar="|"
                                />
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: 'var(--yellow-theme-sub-text-color)', lineHeight: '1.5', fontStyle: "italic", fontSize: "20px", textAlign: 'center' }}
                            >
                                {item.description}
                            </Typography>

                            <Box sx={{ gap: 2, mt: 5, display: 'flex', justifyContent: 'center' }}>
                                <Button onClick={handleOpenOrderModal} sx={{
                                    bgcolor: '#f8bb12',
                                    color: 'white',
                                    border: '2px solid #b22222',
                                    borderRadius: '25px',
                                    padding: '10px 20px',
                                    '&:hover': {
                                        bgcolor: '#ffffff',
                                        color: '#b22222',
                                        border: '2px solid #b22222',
                                    },
                                    transition: 'all 0.3s ease',
                                }}>
                                    

                                    Order Now
                                </Button>
                                <OrderModal openOrderModal={openOrderModal} handleCloseOrderModal={handleCloseOrderModal} />

                                {/* Contact Us button */}
                                <Link to="contact" smooth={true} duration={500}>
                                    <Button sx={{
                                        bgcolor: '#4caf50',
                                        color: 'white',
                                        border: '2px solid #4caf50',
                                        borderRadius: '25px',
                                        padding: '10px 20px',
                                        '&:hover': {
                                            bgcolor: '#ffffff',
                                            color: '#4caf50',
                                            border: '2px solid #4caf50',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}>
                                        Contact Us
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>

                        {/* Right side: Image */}
                        <Grid item xs={12} sm={6} container justifyContent="flex-end">
                            <Box sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={item.coverUrl}
                                    alt={item.title}
                                    style={{ width: '100%', maxWidth: '800px', borderRadius: '50%' }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Grid>

            {/* Order Modal */}
           
        </div>
    );
}

export default Home;
