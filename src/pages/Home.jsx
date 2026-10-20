import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.svg";

const Home = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-10 text-white">
      <div className="max-w-7xl w-11/12 mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <div className="text-center lg:text-left">

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Learn Without{" "}
            <span className="text-yellow-400">Limits</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Master web development, programming, and technology with
            interactive learning experiences designed to help you become an
            industry-ready developer.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <Link to="/signup">
              <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300">
                Get Started
              </button>
            </Link>

            <Link to="/login">
              <button className="border border-slate-500 px-6 py-3 rounded-lg hover:bg-slate-800 transition-all duration-300">
                Explore Courses
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-12">

            <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300">
              📘 Self Paced Learning
            </div>

            <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300">
              👨‍🏫 Expert Mentors
            </div>

            <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300">
              💻 Hands-on Projects
            </div>

            <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300">
              🚀 Career Focused
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="Learning Illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;