import { BsArrowRight } from "react-icons/bs";

function Experience() {
  return (
    <>
      <div className="px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl my-4"> Education</h1>
      </div>

      {/* Univ */}
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-48 px-4 md:px-8 justify-center items-center md:justify-start md:items-start">
        <div className="w-24 h-24 rounded-full px-2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src="img/udb.png"
            className="w-full h-full object-cover hover:text-primary"
            alt="University Logo"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-md md:text-lg text-center md:text-left">
            Informatics Engineering
          </h1>
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
            Universitas Duta Bangsa Surakarta
          </h1>
          <span className="text-sm md:text-base text-primary font-bold border border-primary px-6 py-2 rounded-full">
            2021 - Now
          </span>
        </div>
      </div>

      {/* SMA */}
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-48 px-4 md:px-8 mt-4 justify-center items-center md:justify-start md:items-start">
        <div className="w-24 h-24 rounded-full px-2 flex justify-center items-center mb-4 md:mb-0">
          <img
            src="img/muhi.png"
            className="w-full h-full object-cover hover:text-primary"
            alt="SMA Logo"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-md md:text-lg text-center md:text-left">
            Ilmu Pengetahuan Alam
          </h1>
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
            SMA Muhammadiyah 1 Karanganyar
          </h1>
          <span className="text-sm md:text-base text-primary font-bold border border-primary px-6 py-2 rounded-full">
            2016 - 2019
          </span>
        </div>
      </div>
    </>
  );
}

export default Experience;
