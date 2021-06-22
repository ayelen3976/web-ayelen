import React, { useEffect } from "react";
import "./CelularJava.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { AiOutlineArrowLeft } from "react-icons/ai";
function CelJava(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="content-images">
      <div className="cel-img1">
        <img
          src={`/projects/${props.project?.data?.img1}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="cel-img2">
        <img
          src={`/projects/${props.project?.data?.img2}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="text-cel" data-aos="fade-left">
        <p>It was my first project in java is a app of desktop</p>
        <p className="tech-cel"> Technologies</p>
        <ul>
          <li>Java: I used the editor netbeans to developer it</li>
          <li>Swing: I use javaSwing to have styles in the frames</li>
          <li>JFrame: to create the menus and the panels</li>
          <li>MySQL: I used this database to save the data </li>
        </ul>
      </div>

      <div className="cel-img3">
        <img
          src={`/projects/${props.project?.data?.img3}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="cel-img4">
        <img
          src={`/projects/${props.project?.data?.img4}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="cel-img5">
        <img
          src={`/projects/${props.project?.data?.img5}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="cel-img6" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img6}`} alt="img" />
      </div>
    </div>
  );
}
export default CelJava;
