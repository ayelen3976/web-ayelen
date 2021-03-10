import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./SomosMas.scss";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
function SomosMas(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="content-images">
      <div className="somosmas-img1"  data-aos="fade-up">
      <p>Continues in process ...</p>
        <img src={`/projects/${props.project?.data?.img1}`} alt="img" />
      </div>
      <MDBContainer>
        <MDBRow className="cont-somosmas">
          <div className="text-somosmas" data-aos="fade-down">
            <p>
              With My Team, built this Ecommerce FullStack in One Month with
              scrum methodology
            </p>
            <p className="tech-somosmas"> Technologies</p>
          </div>
          <MDBCol data-aos="fade-right">
            <p>FrontEnd</p>
            <ul>
              <li>React : developer the client part</li>
              <li>React-redux: save the data User </li>
              <li>Sweet Alert: notifications  </li>
              <li>formik: control forms inputs</li>
              <li>Axios: connection with api</li>
            </ul>
          </MDBCol>
          <MDBCol data-aos="fade-left">
            <p>BackEnd</p>
            <ul>
              <li>NodeJs: developer server part</li>
              <li>MySQL: database to save the data </li>
              <li>Sequelize: built the tables and connect with db</li>
              <li>Express: used in routes, with methods request</li>
              <li>JWT:Authentication in users</li>
              <li>SendGrid: send a email</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="somosmas-img2" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img2}`} alt="img" />
      </div>

      <div className="somosmas-img3" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img3}`} alt="img" />
      </div>
      <div className="somosmas-img4" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img4}`} alt="img" />
      </div>

      <div className="somosmas-img5" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img5}`} alt="img" />
      </div>

      <div className="somosmas-img6" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img6}`} alt="img" />
      </div>
      <MDBContainer>
      <MDBRow className="res-somosmas">
          <div data-aos="fade-somosmas">
            <p> This is in responsive format to mobile ...</p>
          </div>
        </MDBRow>
        <MDBRow className="res-somosmas">
          <MDBCol>
            <div className="somosmas-img7" data-aos="fade-right">
              <img src={`/projects/${props.project?.data?.img7}`} alt="img" />
            </div>
          </MDBCol>
          <MDBCol>
            <div className="somosmas-img8" data-aos="fade-left">
              <img src={`/projects/${props.project?.data?.img8}`} alt="img" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default SomosMas;
