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
          <div
            className="about-col"
            data-aos={responsive.matches ? "" : "fade-right"}
          >
            {props.checkBox ? (
              <>
                <h1>Sobre mi</h1>

                <p className="about-text">
                  Hola!, Mi Nombre es Ayelen Fernandez, Soy de Argentina, tengo
                  22 años, Estudio la carrera de Ingeniería informática en la
                  Universidad de Buenos Aires. Soy una profesional apasionada y
                  dedicada en Desarrollo, Programación y Diseño. Mi visión es
                  liderar empresas hacia la excelencia, trabajando arduamente
                  para potenciar sus productos o servicios. Con una mente
                  creativa y siempre ávida de aprender, me sumerjo en cada
                  proyecto con el objetivo de encontrar soluciones innovadoras.
                  Mi compromiso es no solo cumplir, sino superar las
                  expectativas, contribuyendo al éxito y crecimiento de cada
                  empresa que lidero. Mi trayectoria está marcada por la
                  adaptabilidad y el deseo constante de enfrentar nuevos
                  desafíos. Creo que la juventud es una ventaja que impulsa la
                  creatividad, la adaptabilidad y el aprendizaje continuo.
                </p>
              </>
            ) : (
              <>
                <h1>About me</h1>

                <p className="about-text">
                  Hello! My name is Ayelen Fernandez. I am from Argentina and I
                  am 22 years old. I am currently pursuing a degree in Computer
                  Engineering at the University of Buenos Aires. I am a
                  passionate and dedicated professional in Development,
                  Programming, and Design. My vision is to lead companies to
                  excellence by working diligently to enhance their products or
                  services. With a creative mind and a constant thirst for
                  learning, I immerse myself in each project with the goal of
                  finding innovative solutions. My commitment is not just to
                  meet expectations but to exceed them, contributing to the
                  success and growth of every company I lead. My journey is
                  characterized by adaptability and a constant desire to face
                  new challenges. I believe that youth is an advantage that
                  drives creativity, adaptability, and continuous learning.
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
