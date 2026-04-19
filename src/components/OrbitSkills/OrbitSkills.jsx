import React from "react";
import styles from "./OrbitSkills.module.css";

const skills = [
    "html",
    "css",
    "javascript",
    "react",
    "sql",
    "mongodb",
    "express",
    "node",
    "python",
    "django",
    "nextjs",
];

export default function OrbitSkills() {
    return (
        <div className={styles.orbitWrapper}>
            <div className={styles.orbit}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={styles.icon}
                        style={{ "--i": index }}
                    >
                        <div className={styles.logoBox}>
                            <img src={`/skills/${skill}.png`} alt={skill} />
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.centerImage}>
                <img src="/intro.png" alt="Kamalraj" />
            </div>
        </div>
    );
}
