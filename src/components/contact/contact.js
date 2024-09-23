import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './style.css';
import { FaFacebookF,FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Typography } from '@mui/material';

import coffeeShop from '../../images/coffe8.webp'; // Sample coffee shop image



const Contact = () => {
    return (
        <section id="contact" className="contact-section">

            <h3>Contact Us</h3>
            <div className="contact-container">
                <div className="social-media-contact">

                    <div className="social-icons-contact">
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <FaFacebookF />
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', marginLeft: '8px' }} // Adjust spacing if needed
                            >
                                www.facebook.com
                            </a>

                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <FaInstagram />
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', marginLeft: '8px' }} // Adjust spacing if needed
                            >
                                www.instagram.com
                            </a>

                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <FaTwitter />
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', marginLeft: '8px' }} // Adjust spacing if needed
                            >
                                www.twitter.com
                            </a>

                        </div>

                        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <FaLinkedinIn />
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: 'inherit', marginLeft: '8px' }} // Adjust spacing if needed
                            >
                                www.linkedin.com
                            </a>

                        </div>

                    </div>
                </div>
                <div className="contact-text-container">

                <div className="contact_content_form">
                            <form className="contact_content_form_controlasWrapper">
                                <div>
                                    <input required name="name" className="inputName" type="text" />
                                    <label htmlFor="name" className="namelabel">Name</label>
                                </div>
                                <div>
                                    <input required name="email" className="inputEmail" type="email" />
                                    <label htmlFor="email" className="emaillabel">Email</label>
                                </div>
                                <div>
                                    <textarea required name="message" className="inputDescription" rows="5" />
                                    <label htmlFor="message" className="Descriptionlabel">Description</label>
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>

                </div>
            </div>
            <Box className="footer" sx={{
            backgroundColor: '#282c34',
            color: 'white',
            padding: '20px',
            textAlign: 'center',
        }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <Link href="https://facebook.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
                    <FaFacebook />
                </Link>
                <Link href="https://twitter.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
                    <FaTwitter />
                </Link>
                <Link href="https://instagram.com" target="_blank" sx={{ color: 'white', mx: 1 }}>
                    <FaInstagram />
                </Link>
            </Box>
            <Typography variant="body2">
                © {new Date().getFullYear()} thebrewcoffeeshop. All rights reserved.
            </Typography>
        </Box>
            
        </section>
    );
}

export default Contact;
