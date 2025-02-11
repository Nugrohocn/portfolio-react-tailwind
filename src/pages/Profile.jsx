import React, { useState } from "react";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skill from "../components/Skill";
import About from "../components/About";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      id="home"
      className="section container mx-auto max-w-4xl min-h-screen flex flex-col lg:flex-row text-white justify-between"
    >
      {/* kiri */}
      <div className="w-full lg:w-[358px] p-4 mb-8 lg:mb-0">
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl font-bold py-2">Profile</h1>
          <p className="py-4 text-sm lg:text-base">
            Navigating diverse environments with adaptability and expertise for
            holistic solutions.
          </p>
          <button
            onClick={() => handleTabChange("experience")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "experience" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => handleTabChange("education")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "education" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Education
          </button>
          {/* <button
            onClick={() => handleTabChange("skill")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "skill" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Skill
          </button> */}
          <button
            onClick={() => handleTabChange("about")}
            className={`my-4 w-full h-10 bg-gray-800 hover:bg-primary hover:text-slate-800 rounded-lg flex justify-center items-center text-md ${
              activeTab === "about" ? "bg-primary text-slate-800" : ""
            }`}
          >
            Organization
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="w-full lg:w-[537px] h-full ml-0 lg:ml-4">
        {activeTab === "experience" && <Experience />}
        {activeTab === "education" && <Education />}
        {/* {activeTab === "skill" && <Skill />} */}
        {activeTab === "about" && <About />}
      </div>
    </div>
  );
}
