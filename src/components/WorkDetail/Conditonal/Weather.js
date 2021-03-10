import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Weather.scss";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Weather(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="content-images">
      <div className="weather-img1" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img1}`} alt="img" />
      </div>

      <MDBContainer>
        <MDBRow className="cont-weather">
          <div className="text-weather" data-aos="fade-left">
            <p>
              This is a challenge that I did for a company, which consisted of
              acquiring the climates of the 5 days of the week using an api.
            </p>
            <p className="tech-weather"> Technologies</p>
            <ul>
              <li>React : developer the client part</li>
              <li>react-bootstrap: css styles</li>
              <li>OpenWeather : api to get a list of differents countries </li>

              <li>axios: request the api </li>
            </ul>
          </div>
        </MDBRow>
      </MDBContainer>

      <div className="weather-img2" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img2}`} alt="img" />
      </div>

      <MDBContainer>
        <MDBRow className="res-text-weather">
          <MDBCol>
            <div className="weather-img3">
              <img src={`/projects/${props.project?.data?.img3}`} alt="img" />
            </div>
          </MDBCol>{" "}
          <MDBCol>
            <div className="res-weather" data-aos="fade-left">
              <AiOutlineArrowLeft className="icon" />
              <p> This is in responsive format to mobile</p>
            </div>
          </MDBCol>{" "}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Weather;
