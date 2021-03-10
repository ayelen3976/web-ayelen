import React, {useRef} from "react";
import {useIntersection} from 'react-use'
import gsap from 'gsap';
import "./About.scss";
import { Row, Col } from "react-bootstrap";
import profile from "./../../assets/profile.jpg";
import {Animated} from "react-animated-css";
function About() {
    const sectionRef = useRef(null);
const intersection = useIntersection(sectionRef, {
    root:null,
    rootMargin:"0px",
    threshold:1
})
const fadeIn = element =>{
    gsap.to(element, 1, {
        opacity: 1,
        y:-60,
        ease:"power4.out",
        stagger:{
            amount:0.3
        }
    })
}
const fadeOut = element=>{
    gsap.to(element, 1, {
        opacity:0,
        y: -20,
        ease: 'power4.out'
    })
}
intersection && intersection.isIntersecting < 0.5
? fadeOut('.fadeIn') : fadeIn('.fadeIn')

  return (
    <div className="about" ref={sectionRef}>
       
      <Row className='rowe'>
        <Col>
          <img src={profile} />
        </Col>
        <Col className='about-col-2'>
        
        
          <p className='about-title fadeIn'>About me</p>
          <p className='about-text fadeIn'>
            I am from Argentina, I am 19 years old. I started in the IT world at
            the age of 16 with the idea of ​​learning new things, related to
            technology. I like to program and learn new things every day, I also
            like to do sports in the mornings. my dream is to travel for the world and to
            create new horizons in my life. Nowadays I create projects in my
            free time to make my way into the world of work and I am doing the
            entrance course at the University of Buenos Aires to study computer
            engineering
          </p>
<br id='resume'></br>
        </Col>
      </Row>

    </div>
  );
}
export default About;
