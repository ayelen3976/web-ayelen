import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Moscow.scss";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import 'bootstrap-css-only/css/bootstrap.min.css';
function Moscow(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="content-images">
      <div className="moscow-img1" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img1}`} alt="img" />
      </div>

      <MDBContainer>
        <MDBRow className="cont-moscow">
       <div className="text-moscow" data-aos="fade-down">
            <p>
              With My Team, built this Ecommerce FullStack in One Month with
              scrum methodology
            </p>
            <p className="tech-moscow"> Technologies</p>
            </div> 
            <MDBCol data-aos="fade-right">
              <p>FrontEnd</p>
              <ul>
                <li>React : developer the client part</li>
                <li>React-redux: save the data in the store</li>
                <li>ReactBootstrap: Styles modals, buttons, etc </li>
                <li>MaterialUi: Menutab , tables</li>
                <li>Toastify: notifications</li>
                <li>Axios: connection with api</li>
              </ul>
            </MDBCol>
            <MDBCol data-aos="fade-left">
        
              <p>BackEnd</p>
              <ul>
                <li>NodeJs: developer server part</li>
                <li>SQL: database to save the data </li>
                <li>Sequelize: built the tables and connect with db</li>
                <li>Express: used in routes, with methods request</li>
                <li>JWT:Authentication in users</li>
                <li>nodemailer: to send Email</li>

              </ul>
            </MDBCol>
          
        </MDBRow>
      </MDBContainer>

      <div className="moscow-img2" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img2}`} alt="img" />
      </div>

      <div className="moscow-img3" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img3}`} alt="img" />
      </div>

      <div className="moscow-img4" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img4}`} alt="img" />
      </div>

      <div className="moscow-img5" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img5}`} alt="img" />
      </div>
      <div className="moscow-img6" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img6}`} alt="img" />
      </div>
      <div className="moscow-img7" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img7}`} alt="img" />
      </div>
      <div className="moscow-img8" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img8}`} alt="img" />
      </div>
      <div className="moscow-img9" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img9}`} alt="img" />
      </div>
      <div className="moscow-img10" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img10}`} alt="img" />
      </div>
      <div className="moscow-img11" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img11}`} alt="img" />
      </div>
      <div className="moscow-img12" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img12}`} alt="img" />
      </div>
    </div>
  );
}
export default Moscow;
