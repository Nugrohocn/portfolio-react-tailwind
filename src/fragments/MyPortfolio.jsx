import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Import ikon panah ke atas
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import MyStack from "../pages/MyStack";
import Experience from "../components/Experience";
// import SplashCursor from "../components/SplashCursor";

const MyPortfolio = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* <SplashCursor /> */}
      <div id="home">
        <Home />
      </div>
      <div className="w-full max-w-[870px] border-t border-gray-500 mt-4 mx-auto"></div>
      <div className="w-full text-white min-h-screen" id="experience">
        <Experience />
      </div>
      <div className="w-full max-w-[870px] border-t border-gray-500 mt-4 mx-auto"></div>
      <div className="w-full text-white min-h-screen" id="portfolio">
        <Portfolio />
      </div>
      <div className="w-full max-w-[870px] border-t border-gray-500 mt-4 mx-auto"></div>
      <div className="w-full text-white min-h-screen" id="mystack">
        <MyStack />
      </div>
      <div className="w-full max-w-[870px] border-t border-gray-500 mt-4 mx-auto"></div>
      <p className="text-sm text-white mt-4">
        Copyright © {new Date().getFullYear()} Nur Cahyo Nugroho
      </p>

      {/* Tombol Scroll to Top */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-black p-3 rounded-full shadow-md transition-all duration-300"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </div>
  );
};

export default MyPortfolio;
