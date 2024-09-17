import { NavLink } from "react-router-dom";
import React from "react";
import Typed from "typed.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faYoutube,faTwitter,faInstagram,faLinkedin,faGithub,} from "@fortawesome/free-brands-svg-icons";

//social media links
const SocialMedia = () => {
  return (
    <div className="flex items-center gap-7">
      
      
    <a className="hover:text-green-300 text-gra shadow-xl hover:rotate-6  shadow-blue-600 bg-blend-multiply " href="https://github.com/rambalak73" target="_blank"> <FontAwesomeIcon icon={faGithub} size="2x"  /></a>
    <a className="hover:text-green-300 text-gra shadow-xl hover:rotate-6  shadow-blue-600 bg-blend-multiply "  href="https://www.linkedin.com/in/rambalak73/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} size="2x"  /></a>
    <a className="hover:text-green-300 text-gra shadow-xl hover:rotate-6  shadow-blue-600 bg-blend-multiply " href="https://www.instagram.com/143_rishuu" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
    <a className="hover:text-green-300 text-gra shadow-xl hover:rotate-6  shadow-blue-600 bg-blend-multiply " href="https://www.facebook.com/itz.rishu.78/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
    <a className="hover:text-green-300 text-gra shadow-xl hover:rotate-6  shadow-blue-600 bg-blend-multiply " href="https://www.youtube.com/viralboyz78" target="_blank"> <FontAwesomeIcon icon={faYoutube} size="2x"  /></a>
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="flex top-[20px] flex-col h-screen w-full items-center justify-center text-center md:text-left md:w-1/2 p-8">
      <h1 className="font-serif text-5xl text-orange-800 font-bold py-4">
        Heyyy!!
      </h1>
      <h3 className="font-extrabold text-white text-4xl py-4">Balak Hu!!</h3>
      <SocialMedia />
      <p className="text-white text-justify md:text-left w-4/5">
        I’m a B.Tech Computer Science student specializing in web development
        and React, blending technical skills with creative projects. My
        portfolio showcases a journey of innovation, travel experiences, and a
        passion for storytelling.
      </p>
      <MyComponent />
      <div className="flex gap-4 mt-6">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1WSLrITo9zoCbtl9pt_t1Xep7tEw4CoIy/view?usp=sharing"
        >
          <button className="bg-blue-800 rounded-lg p-2 text-white hover:bg-blue-400 transition-all duration-300">
            Resume!!
          </button>
        </a>
        <NavLink
          to="/about"
          className="bg-yellow-800 rounded-lg p-2 text-white hover:bg-pink-400 transition-all duration-300"
        >
          Read MeEE
        </NavLink>
      </div>
    </div>
  );
};

// Image Section Component
const ImageSection = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full md:w-1/2 p-8">
      <img
        className="rounded-bl-full max-h-[70%] md:max-h-[80%] lg:max-h-[80%] shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-green-800"
        src="https://drive.google.com/file/d/1pFhPN3vURg_PYCY_B8iqVkx6rTv-WKs1/view?usp=sharing"
        alt="Home Image"
      />
    </div>
  );
};

// Typed js Animated text
function MyComponent() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["बालक", "|| बल", "|| बुद्धि ||"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex justify-center items-center w-full p-8 text-2xl">
      <span ref={el} className="text-4xl font-bold text-yellow-300" />
    </div>
  );
}

// Home Component
function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-gradient-to-b from-[#444] to-[#555] min-h-screen rounded-3xl">
      <Header />
      <ImageSection />
    </div>
  );
}

export default Home;
