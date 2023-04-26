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

import WorkDetail from "./components/WorkDetail/WorkDetail";
import WorkDesigns from "./components/WorkDesigns/WorkDesigns";
function AppRouter() {
  const [checkBox, setCheckBox] = useState(true)
  localStorage.setItem("translateTxt", JSON.stringify(checkBox))
  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={()=><PrincipalScreen checkBox={checkBox} setCheckBox={setCheckBox}/>} />
        {/* Los checkbox pasando como el estado a los components detail desde app.js no funca, funciona el pasaje desde el componente padre a hijo */}
        <ScrollTop>

          <Route path="/project/:id" component={()=><WorkDetail />} />
          <ScrollTop>

          <Route path="/projectdesign/:id" component={()=><WorkDesigns />} />
        </ScrollTop>
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
  <Home checkBox={props.checkBox} />
  <About checkBox={props.checkBox}/>

  <Resume checkBox={props.checkBox} />

  <Technologies checkBox={props.checkBox} />
  <Works checkBox={props.checkBox} />

  <Contact checkBox={props.checkBox} />
  <Footer />
</div>

</div>


);
export default AppRouter;
