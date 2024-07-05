import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ServiceCount from "./ServiceCount";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ParticlesContainer from "./ParticlesContainer";
const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      <ParticlesContainer />
      <Header />
      <Home />
      <ServiceCount />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
