import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./About.scss";
import { Row, Col } from "react-bootstrap";
import profile2 from "./../../assets/profile2.jpeg";

function About(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="about">
      <Row className="rowe">
        {/* <Col>
          <img src={profile2} />
        </Col> */}
        <Col className="about-col-2" data-aos="fade-left">
          {props.checkBox? (
            <>
              <p className="about-title fadeIn">Sobre mi</p>
              <p className="about-text fadeIn">
                Soy de Argentina, tengo 20 años. Comencé el mundo de la
                informatica a los 16 años con la idea de aprender cosas nuevas,
                relacionados con la tecnología. Me gusta programar y aprender
                cosas nuevas todos los días, también me gusta hacer deporte por
                las mañanas. mi sueño es viajar por el mundo y crear nuevos
                horizontes en mi vida. Hoy en día creo proyectos en mi tiempo
                libre para abrirme camino el mundo del trabajo y estoy haciendo
                el curso de ingreso a la Universidad de Buenos Aires para
                estudiar Ingeniería en Computación.
              </p>
            </>
          ) : (
            <>
              <p className="about-title fadeIn">About me</p>
              <p className="about-text fadeIn">
                I am from Argentina, I am 20 years old. I started in the IT
                world at the age of 16 with the idea of ​​learning new things,
                related to technology. I like to program and learn new things
                every day, I also like to do sports in the mornings. my dream is
                to travel for the world and to create new horizons in my life.
                Nowadays I create projects in my free time to make my way into
                the world of work and I am doing the entrance course at the
                University of Buenos Aires to study computer engineering.
              </p>
            </>
          )}

          <br id="resume"></br>
        </Col>
      </Row>
    </div>
  );
}
export default About;
