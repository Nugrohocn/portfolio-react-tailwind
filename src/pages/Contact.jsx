import React from "react";
import {
  BsGithub,
  BsEnvelope,
  BsTelephone,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

export default function Contact() {
  return (
    <div
      id="contact"
      className="section min-h-screen container mx-auto flex items-center justify-center px-5 py-10 text-white"
    >
      {/* Left Side: Explanation */}
      <div className="w-full lg:w-1/2 text-center lg:text-left lg:px-10 mb-10 lg:mb-0">
        <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">
          Contact Me
        </h1>
        <p className="text-sm text-gray-400 animate__animated animate__fadeIn animate__delay-1s">
          Feel free to reach out to me using the icons below. I would be happy
          to hear from you!
        </p>

        <div className="mt-5 text-center space-y-4">
          <div className="flex items-center justify-center space-x-5">
            {/* Social Icons with Tooltip */}
            <a
              href="https://www.instagram.com/ngrhcc/"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-primary hover:bg-primary hover:text-gray-800 text-primary transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram" // Tooltip Text
            >
              <BsInstagram size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/nur-cahyo-nugroho-bb9171259/"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-primary hover:bg-primary hover:text-gray-800 text-primary transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn" // Tooltip Text
            >
              <BsLinkedin size={28} />
            </a>

            <a
              href="https://github.com/Nugrohocn"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-primary hover:bg-primary hover:text-gray-800 text-primary transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub" // Tooltip Text
            >
              <BsGithub size={28} />
            </a>

            <a
              href="mailto:nugrohocn6@gmail.com"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-primary hover:bg-primary hover:text-gray-800 text-primary transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Email" // Tooltip Text
            >
              <BsEnvelope size={28} />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=%2B6287739772955&text&type=phone_number&app_absent=0"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-primary hover:bg-primary hover:text-gray-800 text-primary transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Phone" // Tooltip Text
            >
              <BsTelephone size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
