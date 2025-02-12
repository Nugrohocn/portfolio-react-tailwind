import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiUser } from "react-icons/bi";
import ShinyText from "../components/ShinyText";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animasi hanya aktif sekali saat di-scroll

  return (
    <motion.div
      className="container mx-auto max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 px-4 text-white pb-16"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
      }}
    >
      <div className="w-full mx-auto px-4 mt-8">
        {/* Animasi Judul */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold"
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
            {" "}
            <BiUser /> Experience
          </span>
        </motion.h2>
        <motion.p
          className="text-base md:text-lg mb-5 text-gray-400 text-justify"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            },
          }}
        >
          Navigating diverse environments with adaptability and expertise for
          holistic solutions.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 h-auto md:h-72 px-4 md:px-4"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          {/* Gambar */}
          <motion.div
            className="w-full md:w-32 h-auto md:h-32 rounded-full px-3 py-3 relative"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <img
              src="img/msd1.png"
              className="w-full h-full object-cover hover:text-primary"
              alt="Experience"
            />
          </motion.div>

          {/* Informasi Pekerjaan */}
          <motion.div
            className="mt-6 sm:mt-0 w-full text-justify"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <h1 className="text-md md:text-lg">Software Engineer</h1>
            <h1 className="text-xl md:text-2xl font-bold">
              <ShinyText
                text="PT Media Sarana Digitalindo"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <span className="text-md">26 Agustus 2024 - 4 Januari 2025</span>

            {/* Deskripsi Pekerjaan */}
            <motion.div
              className="flex gap-3 mt-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <span className="flex justify-center px-6 py-2 text-sm md:text-base font-semibold border border-primary rounded-full text-primary">
                Internship
              </span>
              <span className="flex justify-center px-6 py-2 text-sm md:text-base font-semibold border border-primary rounded-full text-primary">
                Onsite
              </span>
            </motion.div>

            <motion.div
              className="mt-4 p-2 transition duration-500 w-full"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <div className="text-sm md:text-base w-full flex flex-col text-justify">
                <span>
                  As an intern, I contributed to the development of a tourism
                  recommendation system in Karanganyar Regency using the
                  Knowledge Base Recommendation method with Laravel.
                  Additionally, I was involved in SEO optimization through
                  Google Search Console and wrote articles to enhance the
                  website’s visibility and search engine ranking.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Experience;
