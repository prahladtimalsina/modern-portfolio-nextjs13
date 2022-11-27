import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import React, { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title> Prahlad | Home</title>
      </Head>

      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="hero" className="snap-start">
        <Skills />
      </section>
      <section id="hero" className="snap-start">
        <Projects />
      </section>
    </div>
  );
}

export default Home;
