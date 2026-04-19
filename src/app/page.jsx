"use client";

import React from "react";
import style from "./page.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import OrbitSkills from "@/components/OrbitSkills/OrbitSkills";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Project/Project";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ChatBot from "@/components/ChatBot/ChatBot";


export default function Home() {
  return (
    <div>
      {/* HOME */}
      <h3 id="home" className={style.home}>_</h3>
      <section className={style.fullSection}>
        <main className={style.intro}>
          <div className={style["intro-left"]}>
            <h1>
              Hi<span>👋</span>, I'm <span>Kamalraj&nbsp;</span>,
              <br />
              a MERN, Next.js & Python Full Stack Developer
            </h1>

            <div className={style.small_about}>
              <p>
                Passionate full stack developer skilled in
                MERN stack and Python, focused on building
                modern, user-friendly web applications and
                constantly learning new technologies.
              </p>

              <div className={style.socials}>
                <a href="https://github.com/Kamalrajkamalraj960" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/kamalraj-n-s-6898752a0/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/_.kaamaal._/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>

            </div>
          </div>

          <div className={style["intro-right"]}>
            <OrbitSkills />
          </div>
        </main>
      </section>

      {/* ABOUT */}
      <section id="about" className={style.section}>
        <About />
      </section>

      {/* SKILLS */}
      <section id="skills" className={style.section}>
        <Skills />
      </section>

      {/* PROJECTS */}
      <section id="project" className={style.section}>
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact" className={style.section}>
        <Contact />
      </section>

      <Footer />

      <ChatBot />

    </div>
  );
}
