import { useState, useEffect } from "react";
import tours from "./tour.json";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineNotListedLocation } from "react-icons/md";

const Balak = () => {
  const [next, setNext] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNext((prevNext) => (prevNext === tours.length - 1 ? 0 : prevNext + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <>
      <div className="bg-gradient-to-b from-[#444] to-[#555] min-h-screen p-10 md:p-20 rounded-3xl">
        {/* Slider Section */}
        
          <div className="relative h-64 w-full sm:h-48 md:h-64 lg:h-64 rounded-3xl overflow-hidden bg-[#FFA500]">
            <img className="h-64 w-full object-cover rounded-3xl"
              src={tours[next].slider_url}
              alt={`slider-image-${next}`}
            />
          </div>

        {/* Content Section */}
        <div className="mt-10">
          <h1 className="text-white text-3xl font-bold text-center mb-8">
            Let's Bang On the tour page:
          </h1>

          <div className="flex flex-col gap-8">
            {tours.map((tour, index) => (

              <div className="flex flex-col lg:flex-row items-center gap-8" key={index} >
                <div className="lg:w-1/3 w-full">
                  <img className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-80 rounded-2xl transform transition duration-500 hover:scale-105"
                    src={tour.spiritual_image_url}
                    alt={`tour-${index}`}
                  />
                </div>

                <div className="lg:w-2/3 w-full flex flex-col justify-center space-y-4">
                  <h1 className="flex items-center text-pink-400 font-bold text-2xl md:text-3xl"> <CiLocationArrow1 className="mr-2" /> {tour.name} </h1>

                  <li className="text-green-300 list-none flex items-center text-lg md:text-xl"> <MdOutlineNotListedLocation className="mr-2" /> Famous places: {tour.famous_temples} </li>

                  <p className="text-gray-200"> <span className="text-xl md:text-2xl font-semibold text-blue-950">Summary: <br /> </span> {tour.summary} </p>
                
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Balak;
