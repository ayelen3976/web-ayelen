import React from "react";
import "./Programming.scss";
import { Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { mainreal } from "./../datarealprojects.json";
function RealProjects(props) {
    let responsive = window.matchMedia("(max-width: 700px)");

  return (
    <Row className="programming">
      {mainreal.projects.map((p) => (
        <>
          <Col className="card-work">
            <NavLink
              to={`/project/${p.id}`}
              key={p.id}
              style={{ textDecoration: "none" }}
            >
              <div className="col-1-tech">
                <div className="image-container" data-aos={responsive.matches ? 'zoom-in-up' : "zoom-in-up"}>
                  <img src={`projects/${p?.img}`} alt="imgwork" />
                  <div className="overlay">
                    {props.checkBox ? (
                      <p>{p.descriptionES}</p>
                    ) : (
                      <p>{p.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </NavLink>
          </Col>
        </>
      ))}
    </Row>
  );
}
export default RealProjects;
