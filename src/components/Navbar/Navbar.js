import React, { useState } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";
import ButtonTranslate from "../ButtonTranslate/ButtonTranslate";
function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
  

      <div className="header">
        <Animated animationIn="fadeInDown">
          <ul
            className={click ? "nav-options active" : "nav-options"}
            data-animation="center"
          >
            <li className="option" onClick={closeMobileMenu}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
               { props.checkBox ? <a>INICIO</a> :  <a>HOME</a>   }
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
              >
                  { props.checkBox? <a>AYELEN</a> :  <a>ABOUT</a> }
                
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                   { props.checkBox  ? <a>RESUMEN</a> : <a>RESUME</a> }
             
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link
                to="technologies"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                   { props.checkBox ? <a>TECNOLOGÍA</a> :   <a>TECHNOLOGIES</a> }
               
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                   { props.checkBox ? <a>PROYECTOS</a> : <a>WORK</a> }
          
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                   { props.checkBox ? <a>CONTACTO</a> : <a>CONTACT</a> }
        
              </Link>
            </li>
            <li className="option-button" onClick={closeMobileMenu}>
       
                <ButtonTranslate checkBox={props.checkBox} setCheckBox={props.setCheckBox}/>
          
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
    </div>
  );
}
export default Navbar;
