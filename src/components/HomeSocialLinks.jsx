import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const HomeSocialLinks = ({ item, index }) => {
  const [isHover, setHover] = useState(false);
  return (
    <motion.a
      initial={{ opacity: 0, y : 25 }}
      animate={{ opacity: 1, y : 0 }}
      exit={{ opacity: 0, y : 25 }}
      transition={{delay: index * 0.1}}
      key={index}
      href={item.uril}
      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary relative p-[2px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {isHover && (
          <motion.div
            className={`absolute inset-0 blur-md bg-gradient-to-br from-primary to-secondary -z-10`}
          ></motion.div>
        )}
        <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
          <item.Icon className={`text-texlight`} />
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
