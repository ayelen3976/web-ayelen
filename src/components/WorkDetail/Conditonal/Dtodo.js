import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Dtodo.scss";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";

function Dtodo(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="content-images">
      <div className="dtodo-img1" data-aos="fade-up">
        <p>Continues in process ...</p>
        <img src={`/projects/${props.project?.data?.img1}`} alt="img" />
      </div>

      <MDBContainer>
        <MDBRow className="cont-dtodo">
          <div className="text-dtodo" data-aos="fade-down">
            <p>
              With My bhavesh partner, built this Ecommerce FullStack . and we
              plan to do it complete, with an administrator panel, client, with
              a hosting in google and a payment method using "mercado pago"
            </p>
            <p className="tech-dtodo"> Technologies</p>
          </div>
          <MDBCol data-aos="fade-right">
            <p>FrontEnd</p>
            <ul>
              <li>React : developer the client part</li>
              <li>React-redux: save the data in the store</li>
              <li>ReactBootstrap: Styles, buttons,notifications, etc </li>
              <li>MDBootstrap: Menutab , tables</li>
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
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="dtodo-img2" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img2}`} alt="img" />
      </div>
      <div className="dtodo-img4" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img3}`} alt="img" />
      </div>
      <div className="dtodo-img4" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img4}`} alt="img" />
      </div>
      <div className="dtodo-img5" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img5}`} alt="img" />
      </div>
      <div className="dtodo-img6" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img6}`} alt="img" />
      </div>
      <div className="dtodo-img7" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img7}`} alt="img" />
      </div>
      <div className="dtodo-img8" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img8}`} alt="img" />
      </div>
      <div className="dtodo-img9" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img9}`} alt="img" />
      </div>
      <div className="dtodo-img10" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img10}`} alt="img" />
      </div>
      <div className="dtodo-img11" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img11}`} alt="img" />
      </div>
      <div className="dtodo-img12">
        <img src={`/projects/${props.project?.data?.img12}`} alt="img" />
      </div>
      <div className="dtodo-img13" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img13}`} alt="img" />
      </div>
      <div className="dtodo-img14" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img14}`} alt="img" />
      </div>
      <div className="dtodo-img15" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img15}`} alt="img" />
      </div>
      <div className="dtodo-img16" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img16}`} alt="img" />
      </div>
      <MDBContainer>
        <MDBRow className="res-dtodo">
          <div data-aos="fade-down">
            <p> This is in responsive format to mobile ...</p>
          </div>
        </MDBRow>
        <MDBRow className="res-dtodo">
          <MDBCol>
            <div className="dtodo-img17" data-aos="fade-right">
              <img src={`/projects/${props.project?.data?.img17}`} alt="img" />
            </div>
          </MDBCol>
          <MDBCol>
            <div className="dtodo-img18" data-aos="fade-left">
              <img src={`/projects/${props.project?.data?.img18}`} alt="img" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Dtodo;
