import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import MyStack from "../pages/MyStack";
import Experience from "../components/Experience";

const MyPortfolio = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-4 lg:px-8">
      <div id="home">
        <Home />
      </div>
      <div className="w-[870px] border-t border-gray-500 my-4 mx-auto"></div>

      <div id="experience">
        <Experience />
      </div>
      <div className="w-[870px] border-t border-gray-500 my-10 mx-auto"></div>

      <div id="portfolio">
        <Portfolio />
      </div>
      <div className="w-[870px] border-t border-gray-500 my-10 mx-auto"></div>

      <div id="mystack">
        <MyStack />
      </div>
      <div className="w-[870px] border-t border-gray-500 my-10 mx-auto"></div>

      <p className="text-sm text-white text-center px-4 mt-10">
        Copyright © {new Date().getFullYear()} Nur Cahyo Nugroho
      </p>

      {/* Tombol Scroll to Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 md:bottom-6 md:right-6 bg-primary text-black p-3 rounded-full shadow-md transition-all duration-300 hover:bg-opacity-80"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </div>
  );
};

export default MyPortfolio;
