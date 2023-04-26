import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './ProjectDetail.scss'
import { Row, Container } from "react-bootstrap";
function ProjectDetail(props) {

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="project-details">



      <div className="project-images" data-aos="fade-up">
        {props.project?.data?.images.map((image, i) => (
          <div className="item" key={i}>
            <img src={image.img} alt={"test"} key={i} />
          </div>
        ))}
        <Container>
          <Row className="cont-project">
            <div className="text-project" data-aos="fade-left">
              <p>
              {props.checkBox ? (props.project?.data?.descES) : (props.project?.data?.desc)}
              </p>

            </div>
          </Row>
        </Container>
      </div>


    </div>
  )
}
export default ProjectDetail