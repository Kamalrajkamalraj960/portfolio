"use client";

import React, { useEffect, useState } from "react";
import styles from "./About.module.css";

export default function About() {
    const [text, setText] = useState("");

    const roleText = "Full Stack Developer | MERN Stack | Problem Solver";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(roleText.slice(0, i));
            i++;
            if (i > roleText.length) clearInterval(interval);
        }, 60);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.about}>

            {/* HERO */}
            <div className={styles.hero}>
                <h1 className={styles.name}>About Me</h1>
                <h2 className={styles.role}>{text}</h2>
                <p className={styles.tagline}>
                    I build scalable and modern web applications.
                </p>
            </div>

            {/* GRID */}
            <div className={styles.grid}>
                <div className={styles.flex}>
                    {/* PROFILE */}
                    <div className={styles.profileCard}>
                        <div className={styles.avatar}></div>
                        <p className={styles.bio}>
                            A full-stack developer focused on building clean,
                            responsive, and high-performance web applications.
                            Skilled in the MERN stack and Python, with a strong
                            interest in crafting smooth user experiences and scalable
                            backend systems. Always exploring new technologies and
                            improving problem-solving skills through real-world projects.
                        </p>
                    </div>

                    {/* SKILLS */}
                    <div className={styles.skillsCard}>
                        <h3>Tech Skills</h3>

                        <Skill name="HTML" level={95} />
                        <Skill name="CSS" level={90} />
                        <Skill name="JavaScript" level={85} />
                        <Skill name="React" level={90} />
                        <Skill name="Next.js" level={80} />
                        <Skill name="Node.js" level={75} />
                        <Skill name="MongoDB" level={70} />
                    </div>

                </div>

                {/* STATS RINGS */}
                <div className={styles.statsGrid}>
                    <RingStat label="Projects" value={4} percent={70} />
                    <RingStat label="Technologies" value={7} percent={85} />
                </div>

                {/* EDUCATION */}
                <div className={styles.timelineCard}>
                    <h3>Education / Experience</h3>

                    <div className={styles.timeline}>

                        <Item
                            title="Full Stack Development Internship"
                            place="Gen Corpus Data Hub"
                            desc="Completed internship in MERN and Python full stack development, working on modern web applications, CRUD systems, backend APIs, responsive interfaces, debugging, teamwork collaboration, and real-world software development practices."
                        />

                        <Item
                            title="MERN Stack & Python Development Diploma"
                            place="Full Stack Training Program / Self Learning"
                            desc="Completed professional MERN stack training in MongoDB, Express.js, React.js, and Node.js, while also learning Python and Django through practical projects. Built full stack applications with frontend, backend, databases, REST APIs, authentication systems, deployment, and responsive UI development."
                        />

                        <Item
                            title="+2 Higher Secondary"
                            place="Rahmania HSS For Handicapped"
                            desc="Completed higher secondary education with focus on computer science and core academic subjects, strengthening analytical thinking, technical knowledge, teamwork, and learning confidence."
                        />

                        <Item
                            title="SSLC"
                            place="GHSS Medical College Campus School"
                            desc="Successfully completed secondary education with a strong academic foundation, developing discipline, communication skills, problem-solving ability, and an early interest in technology and computers."
                        />

                    </div>
                </div>

            </div>

            {/* ACTIONS */}
            <div className={styles.actions}>
                <a href="/cv.pdf" download className={styles.btnPrimary}>
                    Download CV
                </a>

                <a href="#contact" className={styles.btnSecondary}>
                    Contact Me
                </a>
            </div>

        </section>
    );
}

/* ================= SKILL ================= */
function Skill({ name, level }) {
    return (
        <div className={styles.skillBox}>
            <div className={styles.skillTop}>
                <span>{name}</span>
                <span>{level}%</span>
            </div>
            <div className={styles.bar}>
                <div className={styles.fill} style={{ width: `${level}%` }}></div>
            </div>
        </div>
    );
}

/* ================= TIMELINE ================= */
function Item({ title, place, desc }) {
    return (
        <div className={styles.item}>
            <span className={styles.dot}></span>
            <div>
                <h4>{title}</h4>
                <p className={styles.place}>{place}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    );
}

/* ================= RING STAT (FIXED) ================= */
function RingStat({ label, value, percent }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;

        const interval = setInterval(() => {
            start++;
            setCount(start);
            if (start === value) clearInterval(interval);
        }, 80);

        return () => clearInterval(interval);
    }, [value]);

    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className={styles.ringCard}>

            <div className={styles.circle}>
                <svg width="130" height="130">

                    {/* BACK */}
                    <circle
                        className={styles.bg}
                        cx="65"
                        cy="65"
                        r={radius}
                    />

                    {/* PROGRESS */}
                    <circle
                        className={styles.progress}
                        cx="65"
                        cy="65"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />

                </svg>

                <div className={styles.innerText}>
                    <h2>{count}+</h2>
                </div>
            </div>

            <p>{label}</p>
        </div>
    );
}
