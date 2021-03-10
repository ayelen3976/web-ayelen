import React, { useEffect } from "react";
import "./Mine.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Mine(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="content-images">
      <div className="mine-img1">
        <img
          src={`/projects/${props.project?.data?.img1}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="text-mine" data-aos="fade-left">
        <p>My personal Portfolio built by me ❤️👩‍💻</p>
        <p className="tech-mine"> Technologies</p>
        <ul>
          <li>React : developer the Frontend part</li>
          <li>EmailJs: send me a email </li>
          <li>Sass: styles organization</li>
          <li>SweetAlert: Alert when you send me a message</li>
          <li>MDBbootstrap: css styles</li>

          <li>react-animated: animation in home</li>
          <li>aos: animation in scroll</li>
          <li>Css: pure css styles buttons, navbar</li>
        </ul>
      </div>

      {/* <div className="mine-img2">
        <img
          src={`/projects/${props.project?.data?.img2}`}
          alt="img"
          data-aos="fade-up"
        />
      </div> */}
    </div>
  );
}
export default Mine;
