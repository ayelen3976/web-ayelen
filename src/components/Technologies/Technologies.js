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
import { MDBRow, MDBContainer } from "mdbreact";
import TechCard from "./TechCard";

function Technologies(props) {
  return (
    <div className="tech" >
      {/* <div className="linea">
  
        <hr />
      </div>
      <p className="linea1"> <span>Technologies</span> </p>
      <div className="linea">
     
        <hr />
      </div> */}
      {props.checkBox ? (
   <h2 className="linea"><span>Tecnologías</span></h2>
      ) : (
        <h2 className="linea"><span>Technologies</span></h2>
      )}


      <div className="tech-cards" >
     
          <MDBRow className="tech-cards-1"  id="technologies">
            <TechCard img={html} name="Html" />
            <TechCard img={css} name="Css" />
            <TechCard img={javascript} name="Javascript" />
            <TechCard img={react} name="React" />
            <TechCard img={redux} name="Redux" />
            <TechCard img={sass} name="Sass" />
            <TechCard img={bootstrap} name="Bootstrap" />
            <TechCard img={figma} name="Figma" />
          </MDBRow>
          <MDBRow className="tech-cards-2">
            <TechCard img={express} name="Express" />
            <TechCard img={nodejs} name="Nodejs" />
            <TechCard img={mysql} name="MySQL" />
            <TechCard img={sql} name="SQL" />
            <TechCard img={postgresql} name="Postgres" />
            <TechCard img={sequelize} name="Sequelize" />
            <TechCard img={tsimage} name="Typescript" />
      
          </MDBRow>
      
      </div>
    </div>
  );
}
export default Technologies;
