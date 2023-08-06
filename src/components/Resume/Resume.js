import React from "react";
import "./Resume.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
function Resume(props) {
  return (
    <div className="resume">
      <VerticalTimeline className="resume-timeline costum-line">

        <VerticalTimelineElement

          className="vertical-timeline-element--work  "
          contentStyle={{ background: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
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

              <p>      Actualmente me encuentro estudiando la carrera de Ingeniería informática en FIUBA</p>
            </>
          ) : (
            <>
              <h4 className="vertical-timeline-element-subtitle">

                Informatics Engineering
                Buenos Aires' University
              </h4>

              <p>I am currently studying Computer Engineering at FIUBA
              </p>
            </>
          )}

          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>2022 - presente</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Freelance</h3>
          
          {props.checkBox ? (
            <>
              <h4 className="vertical-timeline-element-subtitle"></h4>
              <p>
               Trabajo como freelance con clientes Diseñando y desarrollando proyectos 
              </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                enero 2021 - presente
              </p>
            </>
          ) : (
            <>
              <h4 className="vertical-timeline-element-subtitle"></h4>
              <p>I am working as a freelance with clients and creating my own projects</p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                january 2021 - present
              </p>
            </>
          )}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="vertical-timeline-element-title">Anteia Empresa</h3>
          {props.checkBox ? (
            <>
              <h4 className="vertical-timeline-element-subtitle">
                Experiencia trabajando como developer junior
              </h4>
              <p>
                Es una empresa que trabaja con inteligencia artificial donde me toco estar en el equipo como Frontend junior, tambien diseñando y proponiendo ideas para cada proyecto nuevo que teniamos que desarrollar.
              </p>
              <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
                mayo 2021 - enero 2023{" "}
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
                may 2021 - january 2023{" "}
              </p>
            </>
          )}
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Henry Bootcamp</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Fullstack developer
          </h4>
          {props.checkBox ? (
            <>
              <p>
                Me converti en una developer Fullstack con el bootcamp
                realizado de forma online, aprendi backend y frontend
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
          contentStyle={{ background: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
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

              <p>Bachiller en comunicación</p>
            </>
          ) : (
            <>
              <h4 className="vertical-timeline-element-subtitle">
                Bachellor in comunication
              </h4>

              <p>Bachellor in orientation comunication</p>
            </>
          )}

          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>2014 - 2019</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Resume;
