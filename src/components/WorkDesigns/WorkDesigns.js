import React, { useState, useEffect } from "react";
import "./WorkDesigns.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { main } from "../datadesign.json";
import ProjectDesigns from "./ProjectDesigns/ProjectDesigns";
import Footer from "./../Footer/Footer";
function WorkDesigns(props) {
    const { id } = useParams();
    const [project, setProject] = useState();
    useEffect(() => {
        let filteredData = main?.ProjectsDesign.find((p) => p.id === parseInt(id));
        setProject(filteredData);
    }, []);


    function Buttons() {
        if (!project?.data.repo) {
            return (
                <div className="buttons">
                    {props.checkBox ? (<p>Repositorio pronto! 👩‍💻</p>) : (<p>Repo Soon! 👩‍💻</p>)}

                </div>
            );
        } else {
            return (
                <div className="buttons">
                    <button className="btn-one">

                        <a href={project?.data.repo} target="_blank">Source Code</a>
                    </button>

                </div>
            );
        }
    }

    return (
        <div>
            <div className="workdesigns">
                <NavLink to="/">
                    <p className="back"> {props.checkBox ? "VOLVER " : "BACK TO HOME"}</p>
                </NavLink>
        
                <p className="work"> {props.checkBox ? "proyecto" : "work"}</p>
                <p className="work-title">{project?.name}</p>

                <Buttons />


                <ProjectDesigns project={project} />

            </div>
            <Footer />
        </div>
    );
}
export default WorkDesigns;
