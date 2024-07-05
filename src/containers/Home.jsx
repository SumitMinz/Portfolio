import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";
const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello it's me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              Sumit Minz
            </span>
          </h2>
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              words={["a Developer", "a Software Engineer"]}
              speed={100}
            />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            👋 Hi there! I’m an aspiring software engineer with a passion for
            problem-solving and creating efficient, elegant solutions. My
            journey began with mastering Data Structures and Algorithms (DSA),
            where I honed my logical thinking and algorithmic skills. 🧠💡{" "}
          </p>
          <p className="text-base text-texlight mt-3 text-center lg:text-left">
            But that’s not all—I’ve also delved into the exciting world of MERN
            stack development. From building robust backends with Node.js and
            Express, to crafting dynamic frontends using React, I thrive on
            turning ideas into functional, user-friendly applications. 🚀🌐
          </p>
          <p className="text-base text-texlight mt-3 text-center lg:text-left">
            Whether it’s optimizing code, debugging, or architecting scalable
            systems, I’m ready to tackle the challenges that come my way. Let’s
            build something amazing together! 💻🔧
          </p>
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks item={item} index={index} />
                ))}
            </AnimatePresence>
          </div>
          <a
            href="https://drive.google.com/file/d/1FNfykC7krlpo9lFs-_GOMMEEfOUxojRB/view?usp=drive_link"
            style={{ boxShadow: "insert 0px 0px 10px rgba(255, 255, 255, 0.3)" }}
            className="mt-12 border border-[rbga(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p
              className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
            >
              Resume
            </p>
          </a>
        </div>

        {/* IMAGE DIV */}
        <div className="w-full h-full flex items-start justify-center lg:items-center ">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            src={Hero}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
