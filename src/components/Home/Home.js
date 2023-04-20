import React, { useEffect, } from "react";
import Aos from "aos";
import imgbnner from './../../assets/HomeBanner.png'
import Typewriter from 'typewriter-effect';
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "react-toggle/style.css";


function Home(props) {

  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);




  return (

    <div className="home" id="home"  >
      <div style={{ display: "flex" }}>
        <div  className='typewritter-txt' style={{ placeSelf: "center", width: "100%", textAlign: 'center' }}>
     

<Typewriter


  options={{
    strings:props.checkBox ? ['SOY AYELEN FERNANDEZ', ' SOY FULLSTACK DEVELOPER', 'SOY UX/UI DESIGNER'] : ['I´M AYELEN FERNANDEZ', 'I´M FULLSTACK DEVELOPER', 'I´M UX/UI DESIGNER'],
    autoStart: true,
    loop: true,
    
  }}
/>


        </div>


        <div style={{ blackgroundColor: "white", width: "100%" }}>
          <img src={imgbnner} alt="img-home" style={{ float: "right", height: "80%", width: "90%" }} />

        </div>
      </div>




    </div>
  );
}
export default Home;
