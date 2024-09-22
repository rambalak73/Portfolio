import React from "react";
import Rating from './Rating'
export default function About() {
  return (
    <>
      {/* Page1 */}
      <div className="flex pt-[50px] flex-col md:flex-row bg-gradient-to-b from-[#444] to-[#555] min-h-screen p-20 rounded-3xl text-justify w-full">
        {/* Left */}
        <div className="flex items-center justify-center md:w-1/2">
          <img
            className="object-cover w-full max-w-md border-4 border-gray-900 shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 transition-all duration-300"
            src="/Images/about.jpeg"
            alt="Rambalak Shahu"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col w-full md:w-1/2 p-4 text-gray-100">
          <h1 className="text-2xl font-semibold mb-4 text-yellow-300">
            About Me:
          </h1>
          <p className="text-lg mb-4">
            <span className="text-3xl font-bold text-yellow-400">
              I’m Rambalak Shahu,
            </span>
            and my journey from a small village in Gaura, Sitamarhi, to the
            world of tech has been nothing short of an adventure. Growing up in
            a close-knit community, I always felt a strong pull towards
            exploring new ideas and solving problems. My curiosity and passion
            led me to pursue a B.Tech in Computer Science and Engineering at
            Maharishi Markandeshwar (Deemed to be University), where I’ve been
            able to turn my dreams into reality.
          </p>
          <h1 className="text-2xl font-semibold mb-4 text-yellow-300">
            How It All Started:
          </h1>
          <p className="text-lg">
            <span className="text-3xl font-bold text-yellow-400">
              Imagine a quiet village
            </span>{" "}
            where every sunrise brings new possibilities. That’s where my story
            began. With a thirst for knowledge and a drive to make something of
            myself, I worked hard to excel in my studies, achieving 75% in 10th
            grade and 76% in 12th grade. These accomplishments set the stage for
            my adventure into the world of technology.
          </p>
        </div>
      </div>

      {/* Page2 */}
      <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#555] to-[#444] h-full p-4">
        <div className="flex flex-col items-center justify-center p-4 w-full md:w-1/2 text-gray-100">
          <h1 className="text-2xl font-semibold mb-4 text-yellow-300">
            Turning Dreams into Reality:
          </h1>
          <p className="text-lg mb-4">
            <span className="text-3xl font-bold text-yellow-400">
              At university,
            </span>
            I immersed myself in coding and development. From building
            full-stack applications like the Airbnb Full Stack Project to
            creating practical tools like the Axis Bank Passbook Printing
            Software, I’ve loved every challenge along the way. My internship at
            Codesoft Technology was a pivotal moment, where I honed my skills in
            C++ and learned how to tackle real-world tech problems.
          </p>

          <div className="text-yellow-300 mt-8">
            <h1 className="font-semibold text-lg mb-2">
              I’ve also had the chance to work on some exciting projects:
            </h1>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-bold text-yellow-400">ShopEase:</span> An
                e-Commerce platform designed to make online shopping seamless
                and enjoyable.
              </li>
              <li>
                <span className="font-bold text-yellow-400">Wanderlust:</span> A
                project inspired by Airbnb that combines my skills in web
                development and database management.
              </li>
              <li>
                <span className="font-bold text-yellow-400">Imagina:</span> A
                hardware-based Ayurvedic vending machine that merges modern
                technology with traditional wellness practices.
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
            What Drives Me:
          </h1>
          <p className="text-lg">
            When
            <span className="text-3xl font-bold text-yellow-400">
              I’m not coding,
            </span>
            you’ll find me traveling, blogging, or enjoying a good movie. I love
            exploring new places, diving into new ideas, and connecting with
            people from all walks of life. My journey has taught me the value of
            perseverance and adaptability, and I’m excited to see where it takes
            me next.
          </p>
        </div>

        <div className="flex items-center justify-center p-4 md:w-1/2 w-full">
          <img
            className="object-cover w-full max-w-md border-4 border-gray-800 shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 transition-all duration-300"
            src="/Images/about2.jpeg"
            alt="Tech Journey"
          />
        </div>
      </div>

      <form action="" className="bg-gray-300 flex items-center justify-center">
        <Rating/>
        <input
          type="text"
          placeholder="Share your Experience"
          className="rounded-full mr-5 p-2 m-2 bg-white border border-gray-300"
        />
        <button className="bg-cyan-800 text-white rounded-lg p-2 hover:bg-cyan-600 ">
          Submit
        </button>
      </form>
      <p className="text-center bg-gray-300 pb-4">
        Thank you for stopping by my portfolio. I hope you find inspiration in
        my story and feel free to reach out if you’d like to connect or
        collaborate!
      </p>
    </>
  );
}
