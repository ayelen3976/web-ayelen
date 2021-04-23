import React from "react";
import "./Resume.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiGovernmentFill } from "react-icons/ri";
import { FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import {BsFillBriefcaseFill} from 'react-icons/bs'
function Resume() {
  return (
    <div className="resume">
      <VerticalTimeline className="resume-timeline">
     
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">Codo a Codo</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Testing QA
          </h4>
          <p>I'm learning testing QA</p>
          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>april 2021 - august 2021</p>
        </VerticalTimelineElement>
      <VerticalTimelineElement
       
       className="vertical-timeline-element--work"
       contentStyle={{ background: "#212121", color: "#fff" }}
       contentArrowStyle={{ borderRight: "7px solid   black" }}
       iconStyle={{ background: "#212121", color: "#fff" }}
       icon={<FaLaptopCode />}
     >
       <h3 className="vertical-timeline-element-title">Seduca</h3>
       <h4 className="vertical-timeline-element-subtitle">
         Java 
       </h4>
       <p>I'm learning Java </p>
       <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>march 2021 - june 2021</p>
     </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<BsFillBriefcaseFill />}
        >
          <h3 className="vertical-timeline-element-title">Alkemy</h3>
          <h4 className="vertical-timeline-element-subtitle">experience working</h4>
          <p>
          We make a pageweb to a NGO, so I get experience as developer junior
          </p>
          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
            january 2021 - march 2021{" "}
          </p>
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
          <p>
            I became a fullstack developer with the bootcamp online.Iearned
            backend and frontend
          </p>
          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>
            june 2020 - december 2020{" "}
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          id='technologies'
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#212121", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid   black" }}
          iconStyle={{ background: "#212121", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            Juan Bautista Alberdi School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachellor in comunication
          </h4>

          <p>Bachellor in orientation comunication</p>
          <p style={{ color: "rgba(240, 235, 235, 0.5)" }}>2015-2019</p>
        </VerticalTimelineElement>
     
      </VerticalTimeline>
    </div>
  );
}
export default Resume;
