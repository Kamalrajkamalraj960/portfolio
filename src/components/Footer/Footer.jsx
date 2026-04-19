"use client";

import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* Left */}
                <div className={styles.left}>
                    {/* LOGO */}
                    <a href="#home" className={styles.logo}>
                        <img src="/logo.png" alt="Logo" />
                    </a>
                    <p>MERN + Python Next Full Stack Developer</p>

                    <p className={styles.description}>
                        I create and develop scalable web applications by combining
                        clean UI design with strong engineering practices, optimized
                        performance, and practical system-level thinking.
                    </p>
                </div>

                {/* Middle Links */}
                <div className={styles.links}>
                    <p>💻 Open to Freelance Work</p>
                    <p>🚀 Building Full Stack Apps</p>
                    <p>📍 Based in India</p>
                    <p>⚡ Always learning new tech</p>
                    <a href="https://instagram.com/_.kaamaal._/" target="_blank" rel="noopener noreferrer">
                        _.kaamaal._
                    </a>
                </div>

                {/* Right Socials */}
                <div className={styles.social}>

                    <a
                        href="https://github.com/Kamalrajkamalraj960"
                        target="_blank"
                        className={styles.socialItem}
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kamalraj-n-s-6898752a0/"
                        target="_blank"
                        className={styles.socialItem}
                    >
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href="https://instagram.com/_.kaamaal._/"
                        target="_blank"
                        className={styles.socialItem}
                    >
                        <FaInstagram />
                        <span>Instagram</span>
                    </a>

                    <a
                        href="https://wa.me/6238473146"
                        target="_blank"
                        className={styles.socialItem}
                    >
                        <FaWhatsapp />
                        <span>WhatsApp</span>
                    </a>

                </div>

            </div>

            <div className={styles.bottom}>
                <hr />
                © {new Date().getFullYear()} Kamalraj. All rights reserved.
            </div>
        </footer>
    );
}
