import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"; // Your Navbar component
import Skills from "./Components/Skills";
import Balak from "./Components/Balak";
import About from "./Components/About";
import Home from "./Components/Home";
import Rating from "./Components/Rating";
import Random from "./Components/Random";
import SkillDetail from "./Components/SkillDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-600 min-h-screen xl:p-10 sm:p-0 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="/skills/:skillId" element={<SkillDetail/>} />
          <Route path="skills:id" element={<Skills />} />
          <Route path="Balak" element={<Balak />} />
          <Route path="About" element={<About />} />
          <Route path="Rating" element={<Rating />} />
          <Route path="Random" element={<Random />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
