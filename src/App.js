import React from 'react';
import { Element } from 'react-scroll'; // Import Element from react-scroll
import Appbar from './components/navbar/navbar'; // Import your Appbar component
import Home from './components/home/home'; // Import your Home component
import MenuComponent from './components/menu/menu'; // Import your Menu component
import About from './components/about/about'; // Import your About component
import Testimonial from './components/testimonial/testimonial';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div>
                <Appbar />
                
                <Routes>
                  
                   
                </Routes>
                
                <Element name="home" className="element">
                    <Home />
                </Element>
                <Element name="menu" className="element">
                    <MenuComponent />
                </Element>
                <Element name="about" className='element'>
                    <About />
                </Element>
                <Element name="testimonial" className='element'>
                    <Testimonial />
                </Element>
                <Element name="gallery" className='element'>
                    <Gallery />
                </Element>
                <Element name="contact" className='element'>
                    <Contact />
                </Element>
               
                   
            </div>
        </Router>
    );
}

export default App;
