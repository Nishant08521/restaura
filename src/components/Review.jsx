import React from "react";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";
import { motion, stagger } from "framer-motion";

const containerVarients = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};
const iteamVarients = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12 " id="review">
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVarients}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <motion.p
          variants={iteamVarients}
          className=" mb-10 text-3xl font-light leading-normal lg:mx-40 tracking-tighter lg:mt-40 lg:text-[2.5rem]"
        >
          {REVIEW.content}
        </motion.p>
        <motion.div
          variants={iteamVarients}
          className="flex items-center justify-center gap-6"
        >
          <img
            src={xaviour}
            width={80}
            height={80}
            alt={REVIEW.name}
            className=" rounded-full border"
          />
          <div className="text-sm text-neutral-500">{REVIEW.profession}</div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={iteamVarients}
        viewport={{ once: true }}
        className=" mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
      >
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <motion.img
            variants={iteamVarients}
            key={index}
            src={customer}
            alt="customer"
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Review;
