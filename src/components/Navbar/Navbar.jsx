"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            {/* LOGO */}
            <a href="#home" className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
            </a>

            {/* HAMBURGER */}
            <div
                className={styles.hamburger}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* LINKS */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
