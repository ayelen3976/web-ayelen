import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './ProjectDetail.scss'
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
import { AiOutlineArrowLeft } from "react-icons/ai";
function ProjectDetail(props){
    console.log(props.project?.data?.img1)
    useEffect(() => {
        Aos.init({
          duration: 3000,
        });
      }, []);
    return(
        <div className="project-details">
        <div className="project-img1" data-aos="fade-up">
          <img src={`/projects/${props.project?.data?.img1}`} alt="img" />
        </div>
  
        <MDBContainer>
          <MDBRow className="cont-project">
            <div className="text-project" data-aos="fade-left">
              <p>
           {props.project?.data?.descES}
              </p>
            
            </div>
          </MDBRow>
        </MDBContainer>
  
        <div className="project-images" data-aos="fade-up">
          <img src={`/projects/${props.project?.data?.img2}`} alt="img" />
          <img src={`/projects/${props.project?.data?.img3}`} alt="img" />
          <img src={`/projects/${props.project?.data?.img4}`} alt="img" />
          <img src={`/projects/${props.project?.data?.img5}`} alt="img" />
          {!props.project?.data?.img6 ? "" : ( <img src={`/projects/${props.project?.data?.img6}`} alt="img" />) }
        </div>
  
  
      </div>
    )
}
export default ProjectDetail