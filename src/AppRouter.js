import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Technologies from "./components/Technologies/Technologies";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/Variants/ScrollTop";
import ParticleComponent from "./components/Variants/particles";
import WorkDetail from "./components/WorkDetail/WorkDetail";
function AppRouter() {
  const [checkBox, setCheckBox] = useState(false)

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={()=><PrincipalScreen checkBox={checkBox} setCheckBox={setCheckBox}/>} />
        <ScrollTop>
          <Route path="/project/:id" component={()=><WorkDetail/>} />
        </ScrollTop>
      </Switch>
    </Router>
  );
}
const PrincipalScreen = (props) => (
 
        <div>

 <Navbar checkBox={props.checkBox} setCheckBox={props.setCheckBox}/> 

<div
  style={{
    position: "absolute",
    left: "0",
    // top: "0",
    width: "100%",
    height: "100%",
  }}
>
  <Home checkBox={props.checkBox} setCheckBox={props.setCheckBox}/>
  <About checkBox={props.checkBox} setCheckBox={props.setCheckBox}/>

  <Resume checkBox={props.checkBox} setCheckBox={props.setCheckBox}/>

  <Technologies checkBox={props.checkBox} setCheckBox={props.setCheckBox}/>
  <Works checkBox={props.checkBox} setCheckBox={props.setCheckBox}/>

  <Contact checkBox={props.checkBox} setCheckBox={props.setCheckBox}/>
  <Footer />
</div>
{/* <ParticleComponent></ParticleComponent>
<ParticleComponent></ParticleComponent>
<ParticleComponent></ParticleComponent>
<ParticleComponent></ParticleComponent> */}
</div>


);
export default AppRouter;
