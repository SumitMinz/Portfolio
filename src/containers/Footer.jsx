import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";
function Footer() {
  return (
    <section>
      <div className="w-full flex flex-col items-center justify-center mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">Sumit Minz</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks item={item} index={index} />
              ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full mt-12">
        <div className="w-full flex flex-col items-center justify-center gap-3">
          <p className="text-texlight text-center">Sumit Minz</p>
          <p className="text-texlight text-center">sumitmanishminz@gmail.com</p>
          <p className="text-texlight text-center">
            sumit.21ug2001@iiitranchi.ac.in
          </p>
          <p className="text-texlight text-center">+91-9572191228</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
