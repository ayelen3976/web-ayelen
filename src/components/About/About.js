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
          {props.checkBox ? (
            <>
              <p className="about-title fadeIn">Sobre mi</p>
              <p className="about-text fadeIn">
                Soy de Argentina, tengo 21 años, Estudio la carrera de
                Ingeniería informática en la Universidad de Buenos Aires. Me
                gusta programar y aprender cosas nuevas todos los días, también
                me gusta hacer deporte por las mañanas. mi sueño es viajar por
                el mundo y crear nuevos horizontes en mi vida. Hoy en día creo
                proyectos en mi tiempo libre propios y de forma freelance para
                abrirme camino en el mundo del trabajo y experiencia
              </p>
            </>
          ) : (
            <>
              <p className="about-title fadeIn">About me</p>
              <p className="about-text fadeIn">
                I am from Argentina, I am 21 years old, I am studying Computer
                Engineering at the University of Buenos Aires. I like
                programming and learning new things every day, I also like to
                play sports for the mornings. My dream is to travel the world
                and create new horizons in my life Today I create projects in my
                time free own and freelance to make my way in the world of work
                and experience
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
