import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import twitter from '../assets/Assets/Twitter.svg';

const Header = () => {
  return (
    <div className="bg-cream">
      <div className="container-md py-3 d-flex justify-content-between align-items-center">
        <div className="bd-highlight">Chirp</div>
        <div className="d-flex align-items-center">
          <a href="#">Home</a>
          <a href="#" className="mx-3">
            Pricing
          </a>
          <a href="#" className="me-3">
            FAQ
          </a>
          <button className="btn btn-primary">
            <img src={twitter} className="me-2" alt="twitter" />
            Sign in with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
