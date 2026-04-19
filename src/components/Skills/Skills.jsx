"use client";

import React, { useState } from "react";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";

import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from "react-icons/fa";

import {
    SiNextdotjs, SiExpress, SiMongodb, SiPostman, SiVercel, SiRender, SiPython, SiDjango, SiMysql
} from "react-icons/si";

export default function Skills() {
    const [filter, setFilter] = useState("All");

    const skills = [
        { name: "HTML5", icon: <FaHtml5 />, level: 95, type: "Frontend", xp: 4200 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90, type: "Frontend", xp: 4000 },
        { name: "JavaScript", icon: <FaJs />, level: 75, type: "Frontend", xp: 3800 },
        { name: "React", icon: <FaReact />, level: 90, type: "Frontend", xp: 4500 },
        { name: "Next.js", icon: <SiNextdotjs />, level: 90, type: "Frontend", xp: 3200 },

        { name: "Node.js", icon: <FaNodeJs />, level: 80, type: "Backend", xp: 3000 },
        { name: "Express.js", icon: <SiExpress />, level: 75, type: "Backend", xp: 2800 },
        { name: "Python", icon: <SiPython />, level: 75, type: "Backend", xp: 2500 },
        { name: "Django", icon: <SiDjango />, level: 65, type: "Backend", xp: 2200 },

        { name: "MongoDB", icon: <SiMongodb />, level: 75, type: "Database", xp: 2700 },
        { name: "MySQL", icon: <SiMysql />, level: 70, type: "Database", xp: 2600 },

        { name: "Git", icon: <FaGitAlt />, level: 80, type: "Tools", xp: 3500 },
        { name: "GitHub", icon: <FaGithub />, level: 85, type: "Tools", xp: 3500 },
        { name: "Postman", icon: <SiPostman />, level: 80, type: "Tools", xp: 3000 },
        { name: "Vercel", icon: <SiVercel />, level: 99, type: "Tools", xp: 2800 },
        { name: "Render", icon: <SiRender />, level: 95, type: "Tools", xp: 2600 },
    ];

    const filtered =
        filter === "All" ? skills : skills.filter(s => s.type === filter);

    return (
        <section className={styles.skillsPage}>

            <h1 className={styles.title}>My Skills</h1>

            {/* FILTER BUTTONS */}
            <div className={styles.filters}>
                {["All", "Frontend", "Backend", "Database", "Tools"].map((item) => (
                    <button
                        key={item}
                        onClick={() => setFilter(item)}
                        className={filter === item ? styles.activeBtn : ""}
                    >
                        {item}
                    </button>
                ))}
            </div>

            {/* GRID */}
            <div className={styles.grid}>

                {filtered.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}

            </div>

        </section>
    );
}

/* ================= SKILL CARD ================= */
function SkillCard({ skill }) {

    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
        >

            {/* ICON + NAME */}
            <div className={styles.top}>
                <span className={styles.icon}>{skill.icon}</span>
                <h3>{skill.name}</h3>
            </div>

            {/* PROGRESS BAR */}
            <div className={styles.bar}>
                <div
                    className={styles.fill}
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>

            {/* EXTRA INFO */}
            <div className={styles.bottomInfo}>
                <p>{skill.level}%</p>
                <span>XP: {skill.xp}</span>
            </div>

        </motion.div>
    );
}
