import React from "react";
import "./Resume.scss";
import { Row, Col } from "react-bootstrap";
import ellipse from "./../../assets/Ellipse4.png";
import Section from "./Sections/Section";
import { resume } from "../resume.json";
function Resume(props) {
  return (
    <div className="Resume-style">
      {props.checkBox ? <h1>Mi resumen</h1> : <h1>Resume</h1>}
      <Row>
        <Col className="col-img" xs={5}>
          <img src={ellipse} alt="img" />
        </Col>
        <Col>
          {props.checkBox ? <h3>Experiencia</h3> : <h3>Experience</h3>}
          {resume.experience.map((i) => (
            <div className="section">
              <Section checkBox={props.checkBox} data={i} />
            </div>
          ))}
        </Col>
      </Row>
      <div className="line"></div>
      <div style={{ marginBottom: "3%" }}>
        <h2>Educación</h2>
      </div>
      <Row style={{ margin: "2%" }}>
        {resume.education.map((k) => (
          <Col>
            <h4>{k.title}</h4>
            {props.checkBox ? <p>{k.yearES}</p> : <p>{k.yearEN}</p>}

            <p style={{ fontZise: "26px", fontWeight: "600" }}>
              {k.university}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Resume;
