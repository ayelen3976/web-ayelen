import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Works.scss";
import { Col } from "react-bootstrap";
import { MDBContainer, MDBRow } from "mdbreact";
import { NavLink } from "react-router-dom";
import { main } from "./../data.json";

function Work(props) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="works-tech" id="work">
      <MDBContainer>
        <MDBRow className="row-tech">
          {main.projects.map((p) => (
            <>
              <Col className="card-work">
                <NavLink
                  to={`/project/${p.id}`}
                  key={p.id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col-1-tech">
                    <div>
                      <img
                        src={`projects/${p?.img}`}
                        alt="imgwork"
                        data-aos="fade-up"
                      />
                    </div>
                    <div className="col-1-body">
                      <button className="btn-work">
                        {" "}
                        <p className="title">{p.name}</p>
                      </button>
                      {props.checkBox ? (
                        <p className="description">{p.descriptionES}</p>
                      ) : (
                        <p className="description">{p.description}</p>
                      )}
                    </div>
                  </div>
                </NavLink>
              </Col>
            </>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Work;
