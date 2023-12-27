import React, { useState } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";


function Navbar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
      

        <ul className={click ? "nav-options active" : "nav-options"}>
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
                  { props.checkBox? <a>AYELEN</a> :  <a>AYELEN</a> }
                
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
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                   { props.checkBox ? <a>CONTACTO</a> : <a>CONTACT</a> }
        
              </Link>
          </li>
          <li className="option mobile-option" onClick={closeMobileMenu}  style={{ color:"#FF2372 !important" }}>
           <a  className="translate-btn" style={{ color:"#FF2372 !important" }} onClick={(()=>(props.setCheckBox(!props.checkBox)))}>
        
              { props.checkBox ? "ES" : "EN" }
            </a>
            </li> 
        </ul>
      </div>
       <ul className="translatein">
         
          <li onClick={closeMobileMenu}>
            <a  className="translate-btn" style={{ color:"#FF2372"}} onClick={(()=>(props.setCheckBox(!props.checkBox)))}>
            { props.checkBox ? "ES" : "EN" }
           
            </a>
          </li>
        </ul> 
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
