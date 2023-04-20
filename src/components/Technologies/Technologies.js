import React from "react";
import "./Technologies.scss";
import sql from "./../../assets/database-system.png";
import sequelize from "./../../assets/sequelize.png";
import bootstrap from "./../../assets/bootstrap.png";
import css from "./../../assets/css.png";
import html from "./../../assets/html.png";
import express from "./../../assets/express.png";
import javascript from "./../../assets/javascript.png";
import redux from "./../../assets/redux.png";
import mysql from "./../../assets/mysql.png";
import nodejs from "./../../assets/node-js.png";
import react from "./../../assets/react.png";
import postgresql from "./../../assets/postgresql.png";
import tsimage from "./../../assets/ts.png"
import figma from "./../../assets/figma.png"
import sass from "./../../assets/sass.png";
import { Col } from "react-bootstrap";
import TechCard from "./TechCard";

function Technologies(props) {
  return (
    <div className="tech" >
      {props.checkBox ? (
   <h2 className="linea"><span>Tecnologías</span></h2>
      ) : (
        <h2 className="linea"><span>Technologies</span></h2>
      )}


      <div className="tech-cards" >
     
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={html} name="Html" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
      
          <TechCard img={css} name="Css" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={javascript} name="Javascript" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={react} name="React" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={redux} name="Redux" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={sass} name="Sass" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={bootstrap} name="Bootstrap" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={figma} name="Figma" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={express} name="Express" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
           
          <TechCard img={nodejs} name="Nodejs" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={mysql} name="MySQL" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={sql} name="SQL" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={postgresql} name="Postgres" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={sequelize} name="Sequelize" />
          </Col>
          <Col className="tech-cards-1"  id="technologies">
          <TechCard img={tsimage} name="Typescript" />
          </Col>

     
    
      
      </div>
    </div>
  );
}
export default Technologies;
