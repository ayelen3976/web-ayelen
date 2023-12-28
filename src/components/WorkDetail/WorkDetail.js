import React, { useState, useEffect } from "react";
import "./WorkDetail.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { main } from "../data.json";
import {mainreal} from "../datarealprojects.json"
import { AiFillGithub } from "react-icons/ai";
import ProjectDetail from './ProjectDetail/ProjectDetail'
import Footer from "./../Footer/Footer";
function WorkDetail(props) {
  const { id } = useParams();

  const [project, setProject] = useState();
  useEffect(() => {
    // Combina ambos conjuntos de datos (main.projects y mainreal.projects)
    const allProjects = [...main.projects, ...mainreal.projects];
    
    // Encuentra el proyecto por ID en el conjunto combinado
    let filteredData = allProjects.find((p) => p.id === parseInt(id));

    setProject(filteredData);
  }, [id]);

  function Buttons() {
    if (!project?.data.deploy && !project?.data.repo) {
      return (
        <div className="buttons">
          {props.checkBox ? (<p>Código y Link pronto! 👩‍💻</p>) : (<p>Code and deploy Soon! 👩‍💻</p>)  }
  
        </div>
      );
    } else if (!project?.data.deploy) {
      return (
        <div className="buttons">
          <button className="btn-one">
            {" "}
            <AiFillGithub className="icon-git" />{" "}
            <a href={project?.data.repo} target="_blank">Source Code</a>
          </button>
        </div>
      );
    } else if (!project?.data.repo) {
      return (
        <div className="buttons">
         
         <button className="btn-one">
            <a href={project?.data.deploy} target="_blank">Live Demo</a>
          </button>
        </div>
      );
    }else {
      return (
        <div className="buttons">
          <button className="btn-one">
            {" "}
            <AiFillGithub className="icon-git" />{" "}
            <a href={project?.data.repo} target="_blank">Source Code</a>
          </button>

          <button className="btn-one">
            <a href={project?.data.deploy} target="_blank">Live Demo</a>
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="workdetail">
        <NavLink to="/">
          <p className="back"> {props.checkBox ? "BACK TO HOME" : "VOLVER" }</p>
        </NavLink>
        {/* <DarkMode /> */}
        <p className="work"> {props.checkBox ? "work" : "proyecto" }</p>
        <p className="work-title">{project?.name}</p>

        <Buttons />
        <ProjectDetail project={project} checkBox={props.checkBox} />
        
      </div>
      <Footer />
    </div>
  );
}
export default WorkDetail;
