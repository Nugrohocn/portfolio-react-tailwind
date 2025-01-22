import React, { useState } from "react";
import { BsArrowRightSquareFill, BsGithub, BsFileCode } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      judul: "Rekta (Rekomendasi Wisata)",
      deskripsi:
        "Rekta is a recommendation system designed to help users find recommendations tailored to their preferences. This system utilizes the Knowledge-Based Recommendation method to deliver relevant and accurate results.",
      bahasa: "Laravel, Bootstrap, Javascript, MySQL",
      github:
        "https://github.com/Nugrohocn/Sistem-Rekomendasi-Wisata-Knowledge-Base-Recommendation",
      gambar: "img/portofolio/rekta.png",
    },
    {
      id: 2,
      judul: "Movie Database",
      deskripsi:
        "A movie database built using TailwindCSS and utilizing data from the OMDB API to dynamically display movie information.",
      bahasa: "HTML, Javascript, TailwindCSS",
      github: "https://github.com/Nugrohocn/movie-database-tailwindCSS",
      gambar: "img/portofolio/movie-database.png",
    },
    {
      id: 3,
      judul: "Poska (Pasar Online Surakarta)",
      deskripsi:
        "An online marketplace designed to simplify the process of finding vegetable products while efficiently connecting farmers and buyers online.",
      bahasa: "Codeigniter, MySQL",
      github: "https://github.com/Nugrohocn/project-uas-semester3",
      gambar: "img/portofolio/poska.png",
    },
    {
      id: 4,
      judul: "K-Means Clustering",
      deskripsi:
        "This application allows users to perform data clustering based on price, sales, and other features. Users can customize the number of clusters and view the results interactively, including cluster visualizations and centroids.",
      bahasa: "Python",
      github: "https://github.com/Nugrohocn/k-means_Clustering",
      gambar: "img/portofolio/kmeans.png",
    },
    {
      id: 5,
      judul: "Segorogunung Hill Climb",
      deskripsi:
        "A tourism website offering various travel packages, accommodations, and focusing on trip experiences using jeeps.",
      bahasa: "HTML, CSS",
      github: "https://github.com/Nugrohocn/Segorogunung-Hill-Climb",
      gambar: "img/portofolio/sgg.png",
    },
    {
      id: 6,
      judul: "Split Bill",
      deskripsi:
        "A web application for splitting the bill among friends, making it easy to manage expenses and ensure everyone pays their fair share.",
      bahasa: "React JS",
      github: "https://github.com/Nugrohocn/split-bill-reactJS",
      gambar: "img/portofolio/Split-Bill.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    // Jika indeks saat ini adalah yang terakhir, kembali ke 0
    setActiveIndex((prevIndex) => (prevIndex + 1) % portfolio.length);
  };

  const currentPortfolio = portfolio[activeIndex];

  return (
    <div
      id="home"
      className="section container mx-auto max-w-full flex items-center justify-center flex-wrap lg:flex-nowrap gap-10 px-5"
    >
      {/* Bagian Gambar */}
      <div className=" w-full sm:w-1/2 max-w-lg aspect-video overflow-hidden border-2 border-white rounded-xl">
        <img
          src={currentPortfolio.gambar}
          alt={currentPortfolio.judul}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Bagian Deskripsi */}
      <div className="w-full sm:w-1/2 text-primary text-center sm:text-left">
        <h1 className="text-xl text-primary font-bold mb-4 flex justify-center sm:justify-start">
          <BsFileCode />
          <span className="ml-2">PORTFOLIO</span>
        </h1>
        <h1 className="text-3xl font-semibold text-white mb-2">
          {currentPortfolio.id}. 
          <TypeAnimation
            key={activeIndex} // Menambahkan key agar merender ulang saat activeIndex berubah
            sequence={[currentPortfolio.judul, 3000]}
            wrapper="span"
            speed={5}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>

        <p className="text-sm text-white max-w-xl sm:text-md mt-2">
          {currentPortfolio.deskripsi}
        </p>

        <div className="flex items-center justify-center sm:justify-start mt-2">
          <span className="h-9 rounded-lg flex justify-center text-sm text-primary items-center px-4 py-1">
            {currentPortfolio.bahasa}
          </span>
        </div>
        <a
          href={currentPortfolio.github}
          className="w-full sm:w-1/2 h-9 rounded-full flex justify-center text-sm text-white items-center border border-white hover:scale-105 transition duration-200 mt-4 sm:mt-6 px-6 py-2 mx-auto sm:mx-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub /> <span className="ml-4">Source Code</span>
        </a>
      </div>

      {/* Tombol Next */}
      <div className="text-primary text-2xl mt-4 sm:mt-0">
        <button type="button" className="hover:scale-110" onClick={handleNext}>
          <BsArrowRightSquareFill />
        </button>
      </div>
    </div>
  );
}
