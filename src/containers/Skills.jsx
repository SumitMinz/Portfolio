import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";
const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            My Skills and Work Experience
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            As an aspiring software engineer, I bring a strong skill set to the
            table. Firstly, my proficiency in Data Structures and Algorithms
            (DSA) allows me to tackle complex problems efficiently. I’ve honed
            my problem-solving abilities through rigorous practice and analysis.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            {" "}
            Secondly, my experience extends to full stack development,
            particularly with the MERN stack (MongoDB, Express.js, React,
            Node.js). I’ve successfully delivered end-to-end web applications,
            from database design to front-end interfaces.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lastly, my knack for creative and logical thinking ensures that I
            approach challenges with a fresh perspective.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard
            skill={"Data Structures and Algorithms"}
            percentage={"95%"}
            color={"#C80036"}
            move={true}
          />
          <SkillCard skill={"C++"} percentage={"98%"} color={"#4B70F5"} />
          <SkillCard
            skill={"Node.JS"}
            percentage={"85%"}
            color={"#F3FF90"}
            move={true}
          />
          <SkillCard
            skill={"Express.JS"}
            percentage={"80%"}
            color={"#FFC700"}
          />
          <SkillCard
            skill={"React.JS"}
            percentage={"70%"}
            color={"#FF7F3E"}
            move={true}
          />
          <SkillCard
            skill={"MongoDB.JS"}
            percentage={"88%"}
            color={"#219C90"}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
