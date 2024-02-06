import React from 'react';
import { NavLink } from 'react-router-dom';
import './Homepage.css'; // Import the CSS file

function Homepage() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="nav-container">
        <nav>
          <ul className="nav-list">
            <li><NavLink exact to="/homepage">Home</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/studentarticle" activeClassName="active">Articles</NavLink></li>
            <li><NavLink to="/faqs">FAQs</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Homepage;
