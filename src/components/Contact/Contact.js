import React, { useEffect, useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import { Row, Col } from "react-bootstrap";
function Contact(props) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault();

    if (
      !input.name ||
      !input.email ||
      !input.subject ||
      !input.message ||
      !input.phone
    ) {
      return swal({
        icon: "error",
        text: props.checkBox
          ? "Debe llenar todos los campos!"
          : "FIELDS CANNOT BE EMPTY",
      });
    } else if (!/^[0-9]+$/.test(input.phone)) {
      setInput({ ...input, phone: "" });
      return swal({
        icon: "error",
        text: props.checkBox
          ? "Oops! El número de celular debe contener solo números"
          : "Oops! The phone number should only contain numbers.",
      });
    } else if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        input.email
      )
    ) {
      setInput({ ...input, email: "" });
      return swal({
        icon: "error",
        text: props.checkBox
          ? "Oops!, El email no es correcto!"
          : "Oops! The email is not correct!",
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
            text: props.checkBox
              ? "GRACIAS POR ENVIAR TU MENSAJE!"
              : "THANKS FOR CONTACT ME!",
          });
          setInput({
            name: "",
            email: "",
            phone: "",
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

  let responsive = window.matchMedia("(max-width: 700px)");

  return (
    <div className="contact">
      <div className="line"></div>
      {props.checkBox ? (
        <h2 style={{ marginTop: "10%" }}>Contacto</h2>
      ) : (
        <h2 style={{ marginTop: "10%" }}>Contact</h2>
      )}
      <Row>
        <Col xs={responsive.matches ? 0 : 5}>
          {props.checkBox ? (
            <h1 style={{ marginTop: "5%" }}>
              Listo para colaborar en tu próximo proyecto. <br></br>¡Contáctame
              y hagámoslo realidad!
            </h1>
          ) : (
            <h1 style={{ marginTop: "5%" }}>
              Ready to collaborate on your next project. <br></br>Contact me and
              let's make it happen!
            </h1>
          )}
        </Col>
        <Col>
          <div className="inputs">
            <form onSubmit={sendEmail}>
              <div className="input-box">
                <Col>
                  <p>Nombre</p>
                  <input
                    name="name"
                    placeholder={props.checkBox ? "Nombre completo" : "Name"}
                    type="text"
                    onChange={(e) => handleInputChange(e)}
                    value={input.name}
                  ></input>
                </Col>
                <Col>
                  <p>Email</p>

                  <input
                    name="email"
                    placeholder={
                      props.checkBox
                        ? "ejemplo@tuemail.com"
                        : "example@tuemail.com"
                    }
                    type="text"
                    value={input.email}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                </Col>
              </div>

              <div className="input-box">
                <Col>
                  <p>Asunto</p>
                  <input
                    name="subject"
                    placeholder={props.checkBox ? "Asunto" : "Subject"}
                    type="text"
                    value={input.subject}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                </Col>
                <Col>
                  <p>Celular</p>
                  <input
                    name="phone"
                    placeholder={
                      props.checkBox ? "(+54 1129384894)" : "(+54 1129384894)"
                    }
                    type="phone"
                    value={input.phone}
                    onChange={(e) => handleInputChange(e)}
                  ></input>
                </Col>
              </div>
              <div className="textarea-box">
                <p>Mensaje</p>
                <textarea
                  name="message"
                  placeholder={
                    props.checkBox
                      ? "Por favor, escribí tu mensaje aca"
                      : "Please, write your message here"
                  }
                  type="text"
                  value={input.message}
                  onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>

              <div className="div-btn">
                {props.checkBox ? (
                  <button style={{ cursor: "pointer" }}>Enviar</button>
                ) : (
                  <button style={{ cursor: "pointer" }}>Submit</button>
                )}
              </div>
            </form>
          </div>{" "}
        </Col>
      </Row>
    </div>
  );
}
export default Contact;
