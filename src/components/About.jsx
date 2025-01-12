import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

function About() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle dropdown

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle isOpen secara lebih eksplisit
  };

  return (
    <>
      <div>
        <h1 className="text-4xl my-4"> Organization</h1>
      </div>

      <div className="flex gap-4 h-60">
        <div className="w-24 h-24 rounded-full px-2 py-2 relative">
          <img
            src="img/hmpti.png"
            className="w-full h-full object-cover hover:text-primary"
            alt="About"
          />
          <div className="flex gap-2">
            <button
              onClick={toggleDropdown}
              className="flex justify-center items-center px-8 py-1 text-sm font-semibold mt-5 border border-primary rounded-full text-primary cursor-pointer"
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
            <div className=" mt-2 p-4  rounded-md shadow-md max-h-28  transition duration-500 w-[450px]">
              <div className="text-sm w-full flex flex-col">
                <div className="text-sm w-full">
                  <span>
                    I am responsible for creating and managing microblog content
                    as well as developing kaleidoscope content to commemorate
                    significant days posted on Instagram. Additionally, I serve
                    as the Documentation Division in various seminar, webinar,
                    and other organizational activities, while coordinating the
                    media team to ensure smooth content production and
                    communication within the organization
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-md">Divisi Kominfo</h1>
          <h1 className="text-2xl font-bold">
            Himpunan Mahasiswa Prodi Teknik Informatika
          </h1>
          <span className="text-sm text-primary font-bold">2022 - 2024</span>
        </div>
      </div>
    </>
  );
}

export default About;
