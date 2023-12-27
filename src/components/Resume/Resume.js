import React from "react";
import "./Resume.scss";
import { Row, Col } from "react-bootstrap";
import ellipse from "./../../assets/Ellipse4.png";
import Section from "./Sections/Section";
function Resume() {
  return (
    <div className="Resume-style">
      <h1>Mi resumen</h1>
      <Row>
        <Col className='col-img'>
          <img src={ellipse} alt="img" />
        </Col>
        <Col xs={7}>
          <h3>Experiencia</h3>
          <Section />
          <Section />
        </Col>
      </Row>
      <div className="line"></div>
      <div style={{marginBottom: '3%'}}>
        <h2>Educación</h2>
      </div>
      <Row style={{margin: '2%'}}>
        <Col>
          <h4>Bachiller en comunicación</h4>
          <p>2009 - 2013</p>
          <p>Cambridge University</p>
        </Col>
        <Col>
          <h4>Bachiller en comunicación</h4>
          <p>2009 - 2013</p>
          <p>Cambridge University</p>
        </Col>
        <Col>
          <h4>Bachiller en comunicación</h4>
          <p>2009 - 2013</p>
          <p>Cambridge University</p>
        </Col>
      </Row>
    </div>
  );
}
export default Resume;
