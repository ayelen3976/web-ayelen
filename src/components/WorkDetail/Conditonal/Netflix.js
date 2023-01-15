import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Netflix.scss";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Netflix(props) {
 
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="content-images">
      <div className="netflix-img1" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img1}`} alt="img" />
      </div>

      <MDBContainer>
        <MDBRow className="cont-netflix">
          <div className="text-netflix" data-aos="fade-left">
            <p>
              I joined me a challenge to built a clone of Netflix in one day
              with clever programming{" "}
            </p>
            <p className="tech-netflix"> Technologies</p>
            <ul>
              <li>React : developer the client part</li>
              <li>TMDBb api: api to get a list of differents movies </li>
              <li>Css: pure css styles</li>
            </ul>
          </div>
        </MDBRow>
      </MDBContainer>

      <div className="netflix-img2" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img2}`} alt="img" />
      </div>

      <MDBContainer>
        <MDBRow className="res-text-netflix">
          <MDBCol>
            <div className="netflix-img3" data-aos="fade-up-right">
              <img src={`/projects/${props.project?.data?.img3}`} alt="img" />
            </div>
          </MDBCol>{" "}
          <MDBCol>
            <div className="res-netflix" data-aos="fade-left">
              <AiOutlineArrowLeft className="icon" />
              <p> This is in responsive format to mobile</p>
            </div>
          </MDBCol>{" "}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Netflix;
