import React, { useEffect } from "react";
import "./Amazon.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { AiOutlineArrowLeft } from "react-icons/ai";
function Amazon(props) {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className="content-images">
      <div className="amazon-img1">
        <img
          src={`/projects/${props.project?.data?.img1}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>
      <MDBContainer>
        <MDBRow className="cont-amazon">
          <MDBCol>
            <div className="amazon-img2">
              <img
                src={`/projects/${props.project?.data?.img2}`}
                alt="img"
                data-aos="fade-up"
              />
            </div>
          </MDBCol>{" "}
          <MDBCol>
            <div className="text-amazon" data-aos="fade-left">
              <p>
                I joined me a challenge to built a clone of amazon in five
                days with clever programming{" "}
              </p>
              <p className="tech-amazon"> Technologies</p>
              <ul>
                <li>React : developer the client part</li>
                <li>React Flip Move: animation in delete product</li>
                <li>React Bootstrap: slides of the home page and cart</li>
                <li>Stripe : process payments </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="amazon-img3">
        <img
          src={`/projects/${props.project?.data?.img3}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="amazon-img4">
        <img
          src={`/projects/${props.project?.data?.img4}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="amazon-img5">
        <img
          src={`/projects/${props.project?.data?.img5}`}
          alt="img"
          data-aos="fade-up"
        />
      </div>

      <div className="amazon-img6" data-aos="fade-up">
        <img src={`/projects/${props.project?.data?.img6}`} alt="img" />
      </div>
      <MDBContainer>
        <MDBRow className="res-text-amazon">
          <MDBCol>
            <div className="amazon-img7" data-aos="fade-right">
              <img src={`/projects/${props.project?.data?.img7}`} alt="img" />
            </div>
          </MDBCol>{" "}
          <MDBCol>
            <div className="res-amazon" data-aos="fade-left">
              <AiOutlineArrowLeft className="icon" />
              <p> This is in responsive format to mobile</p>
            </div>
          </MDBCol>{" "}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Amazon;
