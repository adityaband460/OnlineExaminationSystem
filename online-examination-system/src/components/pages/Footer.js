import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>

      </section>
      <div className='footer-links'>

        <div className='footer-link-wrapper'>
        <div className='footer-link-items'>
            <h2>Pune</h2>
            <Link to='/admin-register' className="link-ad" >
              2nd, 3rd, 4th & 5th floor, IT-6 building,
                 Qubix Business Park Private Limited 
                   Special Economic Zone, Plot No 2,
                 Blue Ridge Township, Rajiv Gandhi Infotech Park,
                  Phase 1, Hinjewadi, Pune, Maharashtra 411057
            </Link>
           
          </div>
          <div className='footer-link-items'>
          <h2>Mumbai</h2>
            <Link to='/admin-register' className="link-ad">
            Mind Space SEZ (Serene Properties), 
            Thane-Belapur Road, Airoli,
             Navi Mumbai, Maharashtra 400708
            </Link>
            </div>

          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/ContactUs'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        

          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/admin-register'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          
         
          <div className='footer-link-items'>
            <h2>Follow Us</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <MdDashboard className="navbar-icon"></MdDashboard>
              KAPS
            </Link>
          </div>
          <small className='website-rights'>KAPS © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to={'//www.instagram.com/poetrybysaniya/'}
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
           
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;