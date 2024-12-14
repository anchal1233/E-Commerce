import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll'; // Import for smooth scrolling
import Slider from 'react-slick';
import CustomerMain from './customerviews/CustomerMain';
import VenderMain from './venderviews/VenderMain';
import AdminMain from './adminviews/AdminMain';
import AdminLogin from './adminviews/AdminLogin';
import AdminReg from './adminviews/AdminReg';
import CustomerLogin from './customerviews/CustomerLogin';
import CustomerReg from './customerviews/CustomerReg';
import VenderLogin from './venderviews/VenderLogin';
import VenderReg from './venderviews/VenderReg';
import AdminHome from './adminviews/AdminHome';

import './index.css';
import myImage4 from './w1.webp';
import myImage5 from './w2.webp';
import myImage6 from './w3.webp';
import myImage7 from './w2.webp';
// circle images
import myImageA from './c1.avif';
import myImageB from './c2.avif';
import myImageC from './c3.avif';
import myImageD from './c4.avif';
import myImageE from './c5.avif';
import myImageF from './c6.avif';
import myImageG from './c7.avif';

// Footer component
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Your E-Commerce Platform. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

function MainPage() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const AboutUs = () => (
    <Element name="aboutus" className="section"> {/* Element for smooth scrolling */}
      <h1>About Us</h1>
      <p>
        Welcome to our E-Commerce platform! We are dedicated to providing the best experience for
        both customers and vendors. Our goal is to create a user-friendly, secure, and reliable
        platform where customers can find what they need, and vendors can showcase and sell their products.
      </p>
    </Element>
  );

  const WelcomePage = () => (
    <Element name="home" className="welcome-section"> {/* Element for smooth scrolling */}
      <h1>Welcome to Our E-Commerce Platform</h1>
      <p>Your one-stop solution for connecting customers with vendors!</p>
    </Element>
  );

  return (
    <div className="main-page">
      <Router>
        <div className="navbar">
          <ScrollLink to="home" smooth={true} duration={300}> {/* Smooth scroll to home */}
            <span className="nav-link">Home</span>
          </ScrollLink>
          <ScrollLink to="aboutus" smooth={true} duration={300}> {/* Smooth scroll to About Us */}
            <span className="nav-link">About Us</span>
          </ScrollLink>

          {/* Dropdown Menu */}
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className="dropdown-link">More Info</span>
            {dropdownVisible && (
              <div className="dropdown-content">
                <Link to="/adminmain">Admin</Link>
                <Link to="/vendermain">Vendor</Link>
                <Link to="/customermain">Customer</Link>
              </div>
            )}
          </div>
        </div>

        {/* Slider under the navigation bar */}
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={1000}
          className="image-gallery"
        >
          <div>
            <img src={myImage4} alt="slider 1" />
          </div>
          <div>
            <img src={myImage5} alt="slider 2" />
          </div>
          <div>
            <img src={myImage6} alt="slider 3" />
          </div>
          <div>
            <img src={myImage7} alt="slider 4" />
          </div>
        </Slider>

        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <div>
            <img src={myImageA} alt="circle 1" />
          </div>
          <div>
            <img src={myImageB} alt="circle 2" />
          </div>
          <div>
            <img src={myImageC} alt="circle 3" />
          </div>
          <div>
            <img src={myImageD} alt="circle 4" />
          </div>
          <div>
            <img src={myImageE} alt="circle 5" />
          </div>
          <div>
            <img src={myImageF} alt="circle 6" />
          </div>
          <div>
            <img src={myImageG} alt="circle 7" />
          </div>
        </Slider>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/adminmain" element={<AdminMain />} />
          <Route path="/adminmain/adminlogin" element={<AdminLogin />} />
          <Route path="/adminmain/adminreg" element={<AdminReg />} />
          <Route path="/adminmain/adminhome" element={<AdminHome />} />
          <Route path="/customermain" element={<CustomerMain />} />
          <Route path="/customermain/customerlogin" element={<CustomerLogin />} />
          <Route path="/customermain/customerreg" element={<CustomerReg />} />
          <Route path="/vendermain" element={<VenderMain />} />
          <Route path="/vendermain/venderlogin" element={<VenderLogin />} />
          <Route path="/vendermain/venderreg" element={<VenderReg />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        
        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default MainPage;
