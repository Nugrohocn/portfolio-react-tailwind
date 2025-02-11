import { Outlet } from "react-router-dom";
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlinePuzzle } from "react-icons/hi";

export default function Rootlayout() {
  // Function untuk smooth scroll
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="min-h-screen pb-16">
        <Outlet />
      </div>

      {/* Fixed Sidebar Navbar */}
      <div className="fixed left-20 top-1/2 -translate-y-1/2 text-center z-10">
        <div className="flex flex-col gap-4 text-white p-2">
          <button
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            onClick={() => handleScroll("home")}
          >
            <BiHomeAlt />
          </button>
          <button
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            onClick={() => handleScroll("experience")}
          >
            <BiUser />
          </button>
          <button
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            onClick={() => handleScroll("portfolio")}
          >
            <BiCodeAlt />
          </button>
          <button
            className="flex w-[50px] h-[50px] justify-center items-center cursor-pointer"
            onClick={() => handleScroll("mystack")}
          >
            <HiOutlinePuzzle />
          </button>
        </div>
      </div>
    </>
  );
}
