import React from 'react'
import './Designs.scss'

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
                            <div className="col-1-tech" data-aos="fade-up" >

                                <img
                                    src={`ProjectsDesign/${p?.img}`}
                                    alt="imgwork"
                                />
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
export default DesignProjects;