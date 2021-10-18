import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";

// import desk from "./../../assets/desk.png";
import "react-toggle/style.css";
import DarkMode from "../DarkMode/DarkMode";

function Home(props) {
  console.log(props.checkBox, 'error ahr');
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="home" id="home">
      <MDBContainer>
        <DarkMode />

        <MDBRow>
          <MDBCol>
            <div className="type-div" data-aos="flip-up">
              <div className="typewriter">
              {props.checkBox ? (
                     <Typewriter
                     autoStart="true"
                     onInit={(typewriter) => {
                       typewriter
                         .typeString("Hola, Bienvenido a mi portfolio")
                         .callFunction(() => {})
                         .start();
                     }}
                   />
                  ) : (
                    <Typewriter
                    autoStart="true"
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("Hi, welcome to my Portfolio")
                        .callFunction(() => {})
                        .start();
                    }}
                  />
                  )}
        
              </div>
              {props.checkBox ? (
                        <div className="contenedor">
             
                        <p>Soy</p>
                        <ul>
                          <li>Ayelen Fernandez</li>
                          <li>FullStack Developer</li>
        
                          <li>de Argentina</li>
                        </ul>
                      </div>
                  ) : (
                    <div className="contenedor">
             
                    <p>I'm</p>
                    <ul>
                      <li>Ayelen Fernandez</li>
                      <li>FullStack Developer</li>
    
                      <li>from Argentina</li>
                    </ul>
                  </div>
                  )}
        
            </div>
          </MDBCol>
          {/*     <MDBCol className='home-img'>
   

  

    <img src={desk}/>  
    
     </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Home;
