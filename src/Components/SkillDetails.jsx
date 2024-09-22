import { useParams } from "react-router-dom";
import skills from "./Skills.json";

const SkillDetail = () => {
  const { skillId } = useParams();
  const skill = skills.find(s => s.id === parseInt(skillId));

  return (
    <div className="bg-[#1F2B34] rounded-3xl pt-20 ">
      {skill ? (
        <>
          <h1 className="text-center text-white font-bold text-3xl md:text-4xl mb-6">Detailed Skill Page</h1>
          <h1 className="text-center text-2xl md:text-3xl font-bold text-orange-400 mb-8">{skill.name}</h1>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
              <img className="w-full h-auto max-h-80 object-contain hover:scale-105 " src={skill.detailedImage} alt={skill.name} />
            </div>

            <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col p-6 text-white">
              <h2 className="text-2xl font-semibold text-orange-300 mb-3">Topics:</h2>
              <ul className="list-disc ml-5 md:ml-10 text-gray-300 mb-6 space-y-2">
                {skill.subTopics.map((subTopic, index) => (
                  <li key={index}>{subTopic}</li>
                ))}
              </ul>

              <p className="text-gray-400 mb-6">{skill.longSummary}</p>

              <p className="mb-4"><strong className="underline text-orange-200">How to Start:</strong><br /> {skill.howToStart}</p>
              <p className="mb-6"><strong className="underline text-orange-200">Why Learn:</strong><br /> {skill.whyLearn}</p>

              <a href={skill.documentation} target="_blank" rel="noopener noreferrer">
                <button className="border-2 border-yellow-400 bg-[#3B4A58] hover:bg-yellow-400 hover:text-black transition-all text-white font-medium rounded-xl py-3 px-5">
                  Documentation: &#128279;
                </button>
              </a>
            </div>
          </div>
        </>
      ) : (
        <p className="text-white text-center">Skill not found.</p>
      )}
    </div>
  );
};

export default SkillDetail;
