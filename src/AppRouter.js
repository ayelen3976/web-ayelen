import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PrincipalScreen} />
        <ScrollTop>
          <Route path="/project/:id" component={WorkDetail} />
        </ScrollTop>
      </Switch>
    </Router>
  );
}
const PrincipalScreen = () => (
  <div>
    <Navbar />

    <div
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
      }}
    >
      <Home />
      <About />

      <Resume />

      <Technologies />
      <Works />

      <Contact />
      <Footer />
    </div>
    <ParticleComponent></ParticleComponent>
    <ParticleComponent></ParticleComponent>
    <ParticleComponent></ParticleComponent>
    <ParticleComponent></ParticleComponent>
  </div>
);
export default AppRouter;
