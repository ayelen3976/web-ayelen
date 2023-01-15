import React from "react";
import "./Resume.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { RiGovernmentFill } from "react-icons/ri";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
function Resume(props) {
  return (
    <div className="resume">
      <VerticalTimeline className="resume-timeline">

      <VerticalTimelineElement
  
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
          Ingeniería informática
          </h3>
          {props.checkBox ? (
            <>
              <h4 className="vertical-timeline-element-subtitle">
              Universidad de Buenos Aires
              </h4>

              <p>      Actualmente me encuentro estudiando la carrea de Ingeniería informática en FIUBA</p>
            </>
          ) : (
            <>
              <h4 className="vertical-timeline-element-subtitle">
                Bachellor in comunication
              </h4>

              <p>Bachellor in orientation comunication</p>
            </>
          )}

          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>2015-2019</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Freelance</h3>
          {props.checkBox ? (
            <>
              <h4 className="vertical-timeline-element-subtitle">Trabajo</h4>
              <p>
                Estoy trabajando como freelance con clientes y creando mis propios proyectos 
              </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                mayo 2021 - presente
              </p>
            </>
          ) : (
            <>
              <h4 className="vertical-timeline-element-subtitle">Work</h4>
              <p>I am working as a freelance with clients and creating my own projects</p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                may 2021 - present
              </p>
            </>
          )}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="vertical-timeline-element-title">Anteia Empresa</h3>
          {props.checkBox ? (
            <>
              <h4 className="vertical-timeline-element-subtitle">
                Experiencia trabajando como dev junior
              </h4>
              <p>
              Es una empresa que trabaja con inteligencia artificial donde me toco estar en el equipo como Frontend junior, tambien diseñando y proponiendo ideas para cada proyecto nuevo que tocaba.
              </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                marzo 2021 - diciembre 2022{" "}
              </p>
            </>
          ) : (
            <>
              <h4 className="vertical-timeline-element-subtitle">
                experience working
              </h4>
              <p>
              It is a company that works with artificial intelligence where I had to be in the team as Junior Frontend, also designing and proposing ideas.
              </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
              march 2021 - december 2022{" "}
              </p>
            </>
          )}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Seduca</h3>
          <h4 className="vertical-timeline-element-subtitle">Java</h4>
          {props.checkBox ? (
            <>
              <p>Aprendi Java </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                marzo 2021 - junio 2021
              </p>
            </>
          ) : (
            <>
              <p>I learned Java </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                march 2021 - june 2021
              </p>
            </>
          )}
        </VerticalTimelineElement>
        

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Henry Bootcamp</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fullstack developer
          </h4>
          {props.checkBox ? (
            <>
              <p>
                I me converti en una developer Fullstack con el bootcamp
                realizado online, aprendi backend y frontend
              </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                june 2020 - december 2020{" "}
              </p>
            </>
          ) : (
            <>
              <p>
                I became a fullstack developer with the bootcamp online.Iearned
                backend and frontend
              </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                june 2020 - december 2020{" "}
              </p>
            </>
          )}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          id="technologies"
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Juan Bautista Alberdi School
          </h3>
          {props.checkBox ? (
            <>
              <h4 className="vertical-timeline-element-subtitle">
                Bachiller en comunicación
              </h4>

              <p>Bachiller en orientación de comunicación</p>
            </>
          ) : (
            <>
              <h4 className="vertical-timeline-element-subtitle">
                Bachellor in comunication
              </h4>

              <p>Bachellor in orientation comunication</p>
            </>
          )}

          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>2015-2019</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Resume;
