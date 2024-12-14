import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Home</Link> |
        <Link to="/aboutus">About Us</Link> |
        <Link to="/moreinfo">More Info</Link>
      </nav>
    </header>
  );
};

export default Header;
