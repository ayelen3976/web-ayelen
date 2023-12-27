import React, { useEffect } from "react";
import Aos from "aos";
import imgbnner from "./../../assets/HomeBanner.png";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-toggle/style.css";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";

function Home(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="home" id="home">
      <div style={{ display: "flex" }}>
        <div className="div-left">
          <p style={{ fontSize: "42px", fontWeight: "bold" }}>
            AYELEN FERNANDEZ<br></br>Líder Creativa en Desarrollo, Programación,
            Diseño e Innovación
          </p>
          <div className="social-links" style={{ width: "100%" }}>
            <div className="icon-style">
              <div>
                <a
                  href="https://www.instagram.com/ayefernandez0211/"
                  target="_blank"
                >
                  {" "}
                  <AiOutlineInstagram className="icon" />
                </a>
              </div>
              <div>
                <a href="https://github.com/ayelen3976" target="_blank">
                  {" "}
                  <AiFillGithub className="icon" />
                </a>
              </div>
              <div>
                <a href="https://wa.me/1125152015?text=¡Hola!" target="_blank">
                  {" "}
                  <AiOutlineWhatsApp className="icon" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/ayelen-fernandez-783286187/"
                  target="_blank"
                >
                  {" "}
                  <AiFillLinkedin className="icon" />
                </a>
              </div>

              <div>
                <a
                  href="https://drive.google.com/file/d/1_E-YaKnWVuwkXZ1lewJR_YRWrdcLJvK4/view?usp=sharing"
                  target="_blank"
                >
                  {" "}
                  <IoMdDownload className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ blackgroundColor: "white", width: "100%" }}>
          <img
            src={imgbnner}
            alt="img-home"
            style={{ float: "right", height: "80%", width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
