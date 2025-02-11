import React from "react";
import { motion } from "framer-motion";
import { BiCodeAlt } from "react-icons/bi";

export default function Portfolio() {
  const portfolio = [
    {
      id: 1,
      judul: "Movie Database",
      title: "A movie database built using TailwindCSS",
      github: "https://github.com/Nugrohocn/movie-database-tailwindCSS",
      gambar: "img/portofolio/movie.png",
    },
    {
      id: 2,
      judul: "Find Nation",
      title: "A web application to explore countries",
      github: "https://github.com/Nugrohocn/find-nation",
      gambar: "img/portofolio/find.png",
    },
    {
      id: 3,
      judul: "Split Bill",
      title: "A web splitting the bill among friends",
      github: "https://github.com/Nugrohocn/split-bill-reactJS",
      gambar: "img/portofolio/Split-Bill.png",
    },
    {
      id: 4,
      judul: "Rekta (Rekomendasi Wisata)",
      title: "Recommendation system using Knowledge-Based Recommendation",
      github:
        "https://github.com/Nugrohocn/Sistem-Rekomendasi-Wisata-Knowledge-Base-Recommendation",
      gambar: "img/portofolio/rekta-2.png",
    },
    {
      id: 5,
      judul: "K-Means Clust",
      title: "Perform data clustering",
      github: "https://github.com/Nugrohocn/k-means_Clustering",
      gambar: "img/portofolio/kemans-2.png",
    },
    {
      id: 6,
      judul: "Smart Village Aikmel",
      title: "Population data collection website",
      github: "https://github.com/Nugrohocn/",
      gambar: "img/portofolio/aikmel.png",
    },
    {
      id: 7,
      judul: "Poska (Pasar Online Surakarta)",
      title: "Online marketplace for vegetable products",
      github: "https://github.com/Nugrohocn/project-uas-semester3",
      gambar: "img/portofolio/poska-2.png",
    },
  ];

  return (
    <motion.div
      className="w-full text-white min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
      }}
    >
      <div className="max-w-4xl mx-auto px-6 my-10">
        {/* Animasi Judul */}
        <motion.h2
          className="text-3xl font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { y: -50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <span className="flex gap-3 mb-3">
            <BiCodeAlt /> Showcase
          </span>
        </motion.h2>
        <motion.p
          className="text-lg mb-7 text-gray-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            },
          }}
        >
          My Project that I have made.
        </motion.p>

        {/* Grid Layout */}
        <motion.div
          className="grid gap-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto",
            gridTemplateAreas: `
              "poska poska movie kmeans"
              "rekta rekta rekta rekta"
              "splitbill findnation aikmel aikmel"
            `,
          }}
        >
          {portfolio.map((item, index) => {
            const area = [
              "movie",
              "findnation",
              "splitbill",
              "rekta",
              "kmeans",
              "aikmel",
              "poska",
            ];
            return (
              <motion.div
                key={item.id}
                className="relative border border-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 p-5 h-[300px]"
                style={{ gridArea: area[index] }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full h-44 object-cover rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                />
                <motion.div
                  className="py-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                >
                  <h3 className="text-lg font-bold">{item.judul}</h3>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
