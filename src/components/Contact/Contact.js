import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Contact.scss";
import emailjs from "emailjs-com";
import swal from "sweetalert";

import { Row, Col } from "react-bootstrap";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import {GrLocationPin} from  'react-icons/gr'
import { FaDownload } from "react-icons/fa";
import { BiPhone } from "react-icons/bi";
function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    if (!input.name || !input.email || !input.subject || !input.message) {
      return swal({
        icon: "error",
        text: "Fields cannot be empty",
      });
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input.email
      )
    ) {
      setInput({ ...input, email: "" });
      return swal({
        icon: "error",
        text: "Oops! The email is not correct!",
      });
    }
    emailjs
      .sendForm(
        "service_a83gqg8",
        "template_bvet4rp",
        e.target,
        "user_rEMZ0lhwsBHsrG0n6572C"
      )
      .then(
        (result) => {
          swal({
            icon: "success",
            text: "Thanks for contacting me!",
          });
          setInput({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  /*   function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_a83gqg8', 'template_bvet4rp', e.target, 'user_rEMZ0lhwsBHsrG0n6572C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text, 'qeu');
      })
      e.target.reset()
  } */
  return (
    <div className="contact" id="contact">
            <div className="social-links">
                  <a href="https://www.instagram.com/ayefernandez0211/">
                    {" "}
                    <AiOutlineInstagram className="icon" />
                  </a>
                  <a href="https://twitter.com/ayee018">
                    {" "}
                    <AiOutlineTwitter className="icon" />
                  </a>
                  <a href="https://github.com/ayelen3976">
                    {" "}
                    <AiFillGithub className="icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/ayelen-fernandez-783286187/">
                    {" "}
                    <AiFillLinkedin className="icon" />
                  </a>
                </div>
      <Row className="rowe-contact">
        <Col sm={5} data-aos="fade" className="col-detail">
          <p className="pepa">Contact Details</p>
          <div className="details">
            <p>Ayelen Fernandez</p>
            <p> <GrLocationPin/>  Argentina, Buenos Aires</p>
            <p>
              {" "}
              <BiPhone />  +54 9 11 2515-2015
            </p>
            <p>
              {" "}
              <AiOutlineMail />  ayee_01@live.com
            </p>
            </div>
            <Row>
            <Col className='col-download'>
                <div className="download">
                  <a
                    href="https://drive.google.com/file/d/1KOEDTJm0123aF-C9cgUHlIQqHCgOobTm/view?usp=sharing"
                    target="_blank"
                  >
                    {" "}
                    <FaDownload className="down-icon" />
                    Donwload Resume
                  </a>
                </div>
              </Col>
           
        
            </Row>
          
        </Col>
        <Col sm={7} data-aos="fade" className="col-email">
          <p className="pepe"> Lets work together or talk</p>
          <div className="inputs">
            <form onSubmit={sendEmail}>
              <input
                name="name"
                placeholder="  Name"
                type="text"
                onChange={(e) => handleInputChange(e)}
                value={input.name}
              ></input>

              <input
                name="email"
                placeholder="  Your email"
                type="text"
                value={input.email}
                onChange={(e) => handleInputChange(e)}
              ></input>

              <input
                name="subject"
                placeholder="  Subject"
                type="text"
                value={input.subject}
                onChange={(e) => handleInputChange(e)}
              ></input>

              <textarea
                name="message"
                placeholder="  Message"
                type="text"
                value={input.message}
                onChange={(e) => handleInputChange(e)}
              ></textarea>
              <button className="btn-submit">Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Contact;
