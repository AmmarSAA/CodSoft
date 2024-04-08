import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import './Header.css';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("shop");

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    toggleNav();
  };

  return (
    <>
      <Navbar sticky='top' className="colorChange">
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <img src={logo} alt="Brand Logo" />
            </Link>
          </Navbar.Brand>
          <div className={`navigation ${isNavExpanded ? 'active' : ''}`}>
            <ul className='nav-menu'>
              <li className={selectedMenu === "shop" ? 'selected' : ''}>
                <Link to='/' onClick={() => handleMenuSelect("shop")}>Home</Link>
                {selectedMenu === "shop" && <hr className="selected-bar" />}
              </li>
              <li className={selectedMenu === "mens" ? 'selected' : ''}>
                <Link to='/products' onClick={() => handleMenuSelect("mens")}>Products</Link>
                {selectedMenu === "mens" && <hr className="selected-bar" />}
              </li>
              <li className={selectedMenu === "womens" ? 'selected' : ''}>
                <Link to='/categories' onClick={() => handleMenuSelect("womens")}>Categories</Link>
                {selectedMenu === "womens" && <hr className="selected-bar" />}
              </li>
            </ul>
          </div>
          <div className="nav-login-cart">
            <Link to='/login'>
              <button>Login</button>
            </Link>
            <Link to='/cart'>
              <img src={cart_icon} alt="cart_icon" />
            </Link>
            <div className="nav-cart-count"></div>
          </div>
          <GiHamburgerMenu className="hamburger" size={28} onClick={toggleNav} />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
