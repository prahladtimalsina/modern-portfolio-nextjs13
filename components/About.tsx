import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="images/prahlad.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Hear is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background{" "}
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          molestias nesciunt nobis dicta, saepe molestiae vitae velit, illum
          amet ratione culpa dolorem deleniti cupiditate asperiores! Vero,
          soluta? Quasi quod eum minus suscipit obcaecati consequatur cumque
          nisi hic, soluta modi aut, dolorem cum at, ducimus maiores qui Error
          omnis maiores autem at voluptates.
        </p>
      </div>
    </motion.div>
  );
}
