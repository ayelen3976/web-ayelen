import React from "react";
import "./Contact.scss";
import { Row, Col } from "react-bootstrap";
function Contact(props) {
  return (
    <div className="contact">
      <div className="line"></div>
      <h2 style={{ marginTop: "10%" }}>Contacto</h2>
      <Row>
        <Col xs={5}>
          <h1 style={{ marginTop: "5%" }}>
            Listo para colaborar en tu próximo proyecto. <br></br>¡Contáctame y
            hagámoslo realidad!
          </h1>
        </Col>
        <Col>
          <div className="inputs">
            <form>
              {/* <form onSubmit={sendEmail}> */}
              <div className="input-box">
                <Col>
                  <p>Nombre</p>
                  <input
                    name="name"
                    placeholder="  Name"
                    type="text"
                    // onChange={(e) => handleInputChange(e)}
                    // value={input.name}
                  ></input>
                </Col>
                <Col>
                  <p>Email</p>

                  <input
                    name="email"
                    placeholder="  Your email"
                    type="text"
                    // value={input.email}
                    // onChange={(e) => handleInputChange(e)}
                  ></input>
                </Col>
              </div>

              <div className="input-box">
                <Col>
                  <p>Asunto</p>
                  <input
                    name="subject"
                    placeholder="  Subject"
                    type="text"
                    // value={input.subject}
                    // onChange={(e) => handleInputChange(e)}
                  ></input>
                </Col>
                <Col>
                  <p>Celular</p>
                  <input
                    name="subject"
                    placeholder="  Subject"
                    type="text"
                    // value={input.subject}
                    // onChange={(e) => handleInputChange(e)}
                  ></input>
                </Col>
              </div>
              <div className="textarea-box">
                <p>Mensaje</p>
                <textarea
                  name="message"
                  placeholder="  Message"
                  type="text"
                  // value={input.message}
                  // onChange={(e) => handleInputChange(e)}
                ></textarea>
              </div>

              <div className="div-btn">
                {props.checkBox ? (
                  <button>Enviar</button>
                ) : (
                  <button>Submit</button>
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
