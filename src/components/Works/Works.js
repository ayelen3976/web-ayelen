import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Works.scss";
import ProgrammingProjects from "./../Works/Programming";
import DesignProjects from "./../Works/Designs";
import RealProjects from "./RealProjects";

function Work(props) {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    // update the state to tab2
    setActiveTab("tab3");
  };
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="works-tech" id="work">
      <div className="Tabs">
        {/* Tab nav */}
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            {props.checkBox ? "Proyectos" : "UX/UI designer"}
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            {props.checkBox ? "Programacíon" : "Programming"}
          </li>
          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
          >
            {props.checkBox ? "Diseño UX/UI" : "UX/UI designer"}
          </li>
        </ul>
        <div className="outlet">
          {activeTab === "tab1" ? (
            <RealProjects checkBox={props.checkBox} />
          ) : activeTab === "tab2" ? (
            <ProgrammingProjects checkBox={props.checkBox} />
          ) : (
            <DesignProjects checkBox={props.checkBox} />
          )}{" "}
        </div>
      </div>
    </div>
  );
}
export default Work;
