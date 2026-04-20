import React from "react";
import styles from "./Project.module.css";

const projectData = [
    {
        title: "Portfolio Website",
        desc: "Modern responsive portfolio built using Next.js and CSS Modules.",
        tech: "Next.js • React • CSS",
        image: "/projects/portfolio.png",
        live: "https://portfolio-sooty-ten-x3j3y1gnqb.vercel.app/",
        github: "https://github.com/Kamalrajkamalraj960/portfolio",
    },
    {
        title: "Task Manager",
        desc: "Manage tasks with priority, deadlines and productivity tracking.",
        tech: "React • Express • MongoDB",
        image: "/projects/todo.png",
        live: "https://to-do-list-five-blue-89.vercel.app/",
        github: "https://github.com/Kamalrajkamalraj960/To-Do-List",
    },
    {
        title: "CRUD Application",
        desc: "Full-featured CRUD application with a modern UI and robust backend.",
        tech: "React • Node.js • MongoDB",
        image: "/projects/crud.png",
        live: "https://mern-frontend-phi-ashy.vercel.app/",
        github: "https://github.com/Kamalrajkamalraj960/MERN_CRUD_APP",
    },
    {
        title: "Kerala Fitness Planner",
        desc: "Smart fitness web app that generates personalized 7-day Kerala diet plans with BMI, calorie targets, history tracking, and PDF download.",
        tech: "MERN Stack • MongoDB • Vercel • Render",
        image: "/projects/keralafitness.png",
        live: "https://kerala-fitness-planner.vercel.app/",
        github: "https://github.com/Kamalrajkamalraj960/kerala-fitness-planner",
    },
    {
        title: "Chat Application",
        desc: "Realtime messaging app with authentication and ongoing live updates (currently in development).",
        tech: "React • Node.js • Socket.io",
        image: "/projects/chat.png",
    },
    {
        title: "E-Commerce Store",
        desc: "Full-featured shopping website with cart, checkout, and admin panel (currently in development).",
        tech: "MERN Stack • MongoDB",
        image: "/projects/ecommerce.png",
    },
];

export default function Projects() {
    return (
        <section className={styles.projects} id="projects">
            <div className={styles.heading}>
                <h2>My Projects</h2>
                <p>Some works that showcase my skills and creativity.</p>
            </div>

            <div className={styles.grid}>
                {projectData.map((project, index) => (
                    <div className={styles.card} key={index}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className={styles.image}
                        />

                        <div className={styles.content}>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <span>{project.tech}</span>

                            {(project.live || project.github) && (
                                <div className={styles.buttons}>
                                    {project.live && (
                                        <a href={project.live} target="_blank">
                                            Live
                                        </a>
                                    )}

                                    {project.github && (
                                        <a href={project.github} target="_blank">
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
