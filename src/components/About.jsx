import { useState } from "react";

function About() {
  return (
    <>
      <div>
        <h1 className="text-4xl mb-16 mx-4">Organization</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-60 ">
        <div className="w-full md:w-24 h-24 rounded-full relative mb-4 md:mb-0 ">
          <img
            src="img/hmpti.png"
            className="w-full h-full object-cover hover:text-primary"
            alt="About"
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-md">Divisi Kominfo</h1>
            <h1 className="text-2xl font-bold">
              Himpunan Mahasiswa Prodi Teknik Informatika
            </h1>
            <span className="text-sm text-primary font-bold">2022 - 2024</span>
          </div>

          <div className="mt-6  rounded-md shadow-md transition duration-500 w-full md:w-[450px]">
            <div className="text-sm mx-6 lg:mx-0">
              <span>
                I am responsible for creating and managing microblog content as
                well as developing kaleidoscope content to commemorate
                significant days posted on Instagram. Additionally, I serve as
                the Documentation Division in various seminar, webinar, and
                other organizational activities, while coordinating the media
                team to ensure smooth content production and communication
                within the organization.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
