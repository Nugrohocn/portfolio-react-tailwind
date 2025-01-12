import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

function Experience() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle dropdown

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle isOpen secara lebih eksplisit
  };

  return (
    <>
      <div className="px-4 md:px-8">
        {" "}
        {/* Added padding to the left and right */}
        <h1 className="text-3xl md:text-4xl my-4">My Experience</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-60 px-4 md:px-8">
        {" "}
        {/* Added padding to the left and right */}
        <div className="w-full md:w-24 h-auto md:h-24 rounded-full px-2 py-2 relative">
          <img
            src="img/msd1.png"
            className="w-full h-full object-cover hover:text-primary"
            alt="Experience"
          />
          <div className="flex gap-2 mt-4 md:mt-8">
            <span className="flex justify-center px-8 py-1 text-xs md:text-sm font-semibold border border-primary rounded-full text-primary">
              Internship
            </span>
            <span className="flex justify-center px-8 py-1 text-xs md:text-sm font-semibold border border-primary rounded-full text-primary">
              Onsite
            </span>
            <button
              onClick={toggleDropdown}
              className="flex justify-center items-center px-8 py-1 text-xs md:text-sm font-semibold border border-primary rounded-full text-primary cursor-pointer"
            >
              <BsArrowRight
                className={`transform transition duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>

          {/* Dropdown */}
          {isOpen && (
            <div className="mt-2 p-4 rounded-md shadow-md max-h-28 transition duration-500 w-[350px] md:w-[450px]">
              <div className="text-sm w-full flex flex-col">
                <div className="text-sm w-full">
                  <span>
                    During my internship, I contributed to designing posters and
                    banners for company marketing programs, developing websites,
                    and learning and applying SEO techniques for search engine
                    optimization. In addition, I also manage and improve website
                    performance to ensure optimal user experience.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="text-sm md:text-md">Software Engineer</h1>
          <h1 className="text-lg md:text-2xl font-bold">
            PT Media Sarana Digitalindo
          </h1>
          <span className="text-sm">26 Agustus 2024 - 4 Januari 2025</span>
        </div>
      </div>
    </>
  );
}

export default Experience;
