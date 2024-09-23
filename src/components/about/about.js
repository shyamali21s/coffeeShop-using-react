import React from 'react';
import './style.css';
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from 'react-icons/fa';

import coffeeShop from '../../images/coffe8.webp'; // Sample coffee shop image

import Appbar from '../navbar/navbar';

const About = () => {
    return (
        <section id="about" className="about-section">
           
            <h3>About Us</h3>
            <div className="about-container">
                <div className="about-image-container">
                    <img className="about-image" src={coffeeShop} alt="Coffee Shop" />
                </div>
                <div className="about-text-container">
                    
                    <p>
                        Welcome to <strong>The Brew Spot</strong>, your cozy neighborhood coffee shop! Whether you need a quick caffeine fix to start your day or a place to unwind with friends, we have you covered.
                    </p>
                   
                    <p>
                        At The Brew Spot, it’s not just about coffee—it’s about the experience. Step into our warm, inviting space, soak in the aroma, and relax as we serve you the perfect cup. Welcome to your new favorite coffee spot!
                    </p>
                     {/* Social Media Section */}
            <div className="social-media">
                <h4>Connect with us</h4>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
                </div>
            </div>
        </section>
    );
}

export default About;
