import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Contact2.scss";
import emailjs from "emailjs-com";
import swal from "sweetalert";

import { Row, Col } from "react-bootstrap";


function Contact(props) {
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
        text:props.checkBox ? "Debe llenar todos los campos!" : "FIELDS CANNOT BE EMPTY",
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
            text: props.checkBox ? "GRACIAS POR ENVIAR TU MENSAJE!" : "THANKS FOR CONTACT ME!",
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

      <Row className="rowe-contact" style={{justifyContent: 'center'}}>
        <div data-aos="fade" className="col-email" style={{ width: "45%" }}>
          {props.checkBox ? (
            <p className="email-title">¡VAMOS A TRABAJAR JUNTOS!</p>
          ) : (
            <p className="email-title"> LET'S WORKS TOGETHER!</p>
          )}

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
              {props.checkBox ? (
                <button className="btn-submit">Enviar</button>
              ) : (
                <button className="btn-submit">Submit</button>
              )}
            </form>
          </div>
        </div>
        <div data-aos="fade" className="col-detail" style={{ width: "40%", minHeight: "45vh", position: "relative" }}>

      
          <div style={{ minHeight: "45vh", width: "100%", border: " 1px solid #FF2372 ", borderRadius: '5px', position: "absolute", bottom: "0", paddingLeft: "5%"}}>


            {props.checkBox ? (
              <p className="contact-title">CONTACTO</p>
            ) : (
              <p className="contact-title">CONTACT</p>
            )}

            <div className="details">
              <p>Ayelen Fernandez</p>
              <p>
                Argentina, Buenos Aires
              </p>
              <p>
                +54 9 11 2515-2015
              </p>
              <p>
                ayee_01@live.com
              </p>
            </div>

          </div>


        </div>

      </Row>
    </div>
  );
}
export default Contact;
