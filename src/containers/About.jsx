import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[2px] rounded-md relative">
            <img
              src={about}
              className="w-full rounded-sm h-auto object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wide text-justify">
            👋 Hi there! I’m currently a B.Tech student at the Indian Institute
            of Information Technology (IIIT RANCHI) in Ranchi. My major is Electronics
            and Communication Engineering, and I’m maintaining a CGPA of 8.85.
            🎓
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            {" "}
            But that’s not all—I’m also passionate about Data Structures and
            Algorithms (DSA) and web development. Whether it’s optimizing code
            or crafting user-friendly interfaces, I’m always up for a coding
            challenge! 💻🌐
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Let’s connect and explore the exciting world of tech together! 🚀😊
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
