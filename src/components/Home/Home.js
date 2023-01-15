import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import img from "./../../assets/banner3.jpeg"
import img2 from "./../../assets/bannerdark.jpg"
// import desk from "./../../assets/desk.png";
import "react-toggle/style.css";
import DarkMode from "../DarkMode/DarkMode";

function Home(props) {

  const [checktheme, setCheckTheme] = useState(true)
  console.log(props.checkBox, 'error ahr');
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  var themec = localStorage.getItem("theme");
  console.log(themec)

  const bannerStyle = { 
   backgroundImage: `url(${checktheme ? `${img}` : `${img2}`})`,
  
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#38373717",
    overflow: 'scroll',
    padding: "10% 0px 8% 0px",
  backgroundAttachment: "fixed"
 
}





  return (
    <div className="home" id="home" style={bannerStyle}>
      <MDBContainer>
        <DarkMode setCheckTheme={setCheckTheme} />

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
