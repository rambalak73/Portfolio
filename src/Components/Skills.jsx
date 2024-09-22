import { NavLink } from "react-router-dom";
import skills from "./Skills.json"



const Skills = () => {
  return (
    <>

      <div className="flex mx-auto px-5 pt-24 pb-10 bg-gradient-to-b from-[#444] to-[#555] min-h-screen w-full z-10 rounded-3xl"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="h-auto bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="hover:rotate-12 h-20 w-20 rounded-full mx-auto shadow-md transition-transform duration-300 group-hover:rotate-6"
              />
              <div className="text-center text-white mt-4">
                <h1 className="font-bold font-serif text-xl">{skill.name}</h1>
                <p className="mt-3 text-sm">{skill.summary}</p>
                <a
                  href={skill.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <NavLink  to={`/skills/${skill.id}`}>
                  <button className="mt-5 bg-blue-600 p-2 px-4 rounded-full hover:bg-blue-800 transition-all duration-300 shadow-md">
                    Read More
                  </button></NavLink> 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
