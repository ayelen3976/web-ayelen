import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './ProjectDesigns.scss'
import { Row, Container } from "react-bootstrap";
function ProjectDesigns(props) {

    useEffect(() => {
        Aos.init({
            duration: 3000,
        });
    }, []);
    return (
        <div className="project-design">
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
                                {props.project?.data?.descES}
                            </p>

                        </div>
                    </Row>
                </Container>
            </div>


        </div>
    )
}
export default ProjectDesigns;