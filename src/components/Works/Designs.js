import React from "react";
import "./Designs.scss";

import { Row, Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { main } from "./../datadesign.json";

function DesignProjects(props) {
  return (
    <Row className="design">
      {main.ProjectsDesign.map((p, i) => (
        <>
          <Col className="card-work-design">
            <NavLink
              to={`/projectdesign/${p.id}`}
              key={i}
              style={{ textDecoration: "none" }}
            >
                <div className="image-container" data-aos="zoom-in-up">
                  <img src={`ProjectsDesign/${p?.img}`} alt="imgwork" />{" "}
                  <div className="overlay">
                    {props.checkBox ? (
                      <p>{p.descriptionES}</p>
                    ) : (
                      <p>{p.description}</p>
                    )}
                  </div>
                </div>
            </NavLink>
          </Col>
        </>
      ))}
    </Row>
  );
}
export default DesignProjects;
