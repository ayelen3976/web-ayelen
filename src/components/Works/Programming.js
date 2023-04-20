import React from  'react'
import './Programming.scss'
import { Row, Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { main } from "./../data.json";

function ProgrammingProjects(props){
  console.log(props, 'this props')
    return(


<Row className="programming">


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
</Row>

   )
}
export default ProgrammingProjects;