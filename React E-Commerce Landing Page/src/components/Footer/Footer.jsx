import React from 'react'
import './Footer.css';
import footer_logo from '../assets/logo_big.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} />
                <p className='mt-4'>E-Commerce Landing Page</p>
            </div>
            <ul className="footer-links">
            <Link to='/company'><li>Company</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/offices'><li>Offices</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} />
                </div>
                <div className='footer-icons-container'>
                    <img src={pintester_icon} />
                </div>
                <div className='footer-icons-container'>
                    <img src={whatsapp_icon} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>&copy; Copyright 2024 - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer