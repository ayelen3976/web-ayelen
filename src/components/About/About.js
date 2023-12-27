import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.scss";
import { Row, Col } from "react-bootstrap";
import elipse1 from "./../../assets/Ellipse.png";
import elipse2 from "./../../assets/Ellipse2.png";
import elipse3 from "./../../assets/Ellipse3.png";

function About(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  var responsive = window.matchMedia("(max-width: 700px)");
  return (
    <div className="about">
      <div
        className="elipse-div"
        style={{ width: "100%", textAlign: "center" }}
        data-aos={responsive.matches ? "" : "zoom-in-left"}
      >
        <img src={elipse1} alt="elipse1" style={{ marginLeft: "10%" }} />
      </div>

      <Row className="row-about">
        <Col>
          <div className="about-col" data-aos="fade-right">
            <h1 style={{ padding: "0% 0% 0% 10%" }}>Sobre mi</h1>
            {props.checkBox ? (
              <>
                <p className="about-text">
                  Hola!, Mi Nombre es Ayelen Fernandez, Soy de Argentina, tengo
                  21 años, Estudio la carrera de Ingeniería informática en la
                  Universidad de Buenos Aires. Me gusta programar y aprender
                  cosas nuevas todos los días, también me gusta hacer deporte
                  por las mañanas. mi sueño es viajar por el mundo y crear
                  nuevos horizontes en mi vida. Hoy en día creo proyectos en mi
                  tiempo libre propios y de forma freelance para abrirme camino
                  en el mundo del trabajo y experiencia
                </p>
              </>
            ) : (
              <>
                <p className="about-text">
                  Hi, My name is Ayelen Fernandez, I am from Argentina, I am 21
                  years old, I am studying Computer Engineering at the
                  University of Buenos Aires. I like programming and learning
                  new things every day, I also like to play sports for the
                  mornings. My dream is to travel the world and create new
                  horizons in my life Today I create projects in my time free
                  own and freelance to make my way in the world of work and
                  experience
                </p>
              </>
            )}

            <br id="resume"></br>
          </div>
        </Col>
        <Col data-aos={responsive.matches ? "" : "zoom-in-left"}>
          <div style={{ textAlign: "center", marginLeft: "40%" }}>
            <img className="elipse-img" src={elipse3} alt="elipse1" />
          </div>
          <div style={{ marginTop: "20px" }}>
            <img
              className="elipse-img"
              src={elipse2}
              alt="elipse1"
              style={{
                textAlign: "center",
                marginLeft: "15%",
                marginTop: "5%",
              }}
            />
          </div>{" "}
        </Col>
      </Row>
    </div>
  );
}
export default About;
