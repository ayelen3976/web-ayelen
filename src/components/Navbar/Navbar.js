import React, { useState } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
<Animated animationIn = "fadeInDown">
      <ul
        className={click ? "nav-options active" : "nav-options"}
        data-animation="center"
      >
         <li className="option" onClick={closeMobileMenu}>
          <Link to="home" spy={true} smooth={true} duration={2000} activeClass="active">
        
          <a>HOME</a>
   
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="about" spy={true} smooth={true} duration={2000} activeClass="active">
  
          <a>ABOUT</a>
   
        
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="resume" spy={true} smooth={true} offset={50} duration={2000}>
            <a>RESUME</a>
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="technologies" spy={true} smooth={true} offset={50} duration={2000}>
            <a>TECHNOLOGIES</a>
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="work" spy={true} smooth={true} offset={50} duration={2000}>
            <a>WORK</a>
          </Link>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <Link to="contact"  spy={true} smooth={true} offset={50} duration={2000} >
            <a>CONTACT</a>
          </Link>
        </li>
      </ul>
      </Animated>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" />
        ) : (
          <GiHamburgerMenu className="menu-icon" />
        )}
      </div>
      
    </div>
  );
}
export default Navbar;
