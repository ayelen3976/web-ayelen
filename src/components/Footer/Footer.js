import React from 'react'
import './Footer.scss'
import {MDBContainer} from "mdbreact";
function Footer(){
    return(
        <div className="footer-copyright text-center py-3 footer">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a>Ayelen Fernandez</a>
        </MDBContainer>
      </div>
    )
}
export default Footer;