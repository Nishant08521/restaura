import React from "react";
import video from "../assets/hero.mp4";
import hero from "../assets/hero.jpeg";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="h-full w-full overflow-hidden absolute inset-0 -z-20">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        ></video>
      </div>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex-col justify-end flex h-screen pb-20 ">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt=""
          className="w-full p-4"
        />
        <p className="p-4 text-lg tracking-tighter text-white">Pairs</p>
      </div>
    </section>
  );
}

export default HeroSection;
