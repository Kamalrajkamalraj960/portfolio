"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Project.module.css";

/**
 * Project data — reuses the exact titles, descriptions, images and links that
 * already existed in the portfolio. `technologies`, `features` and `status`
 * are derived directly from the real descriptions (nothing fabricated).
 */
const projects = [
    {
        id: "portfolio",
        title: "Portfolio Website",
        shortDescription: "Personal developer portfolio",
        description:
            "Modern responsive portfolio built using Next.js and CSS Modules.",
        image: "/projects/portfolio.png",
        technologies: ["Next.js", "React", "CSS"],
        features: [
            "Fully responsive design",
            "Interactive project showcase",
            "AI chat assistant",
            "Smooth motion animations",
        ],
        status: "Live",
        liveUrl: "https://portfolio-sooty-ten-x3j3y1gnqb.vercel.app/",
        githubUrl: "https://github.com/Kamalrajkamalraj960/portfolio",
    },
    {
        id: "task-manager",
        title: "Task Manager",
        shortDescription: "Productivity task tracker",
        description:
            "Manage tasks with priority, deadlines and productivity tracking.",
        image: "/projects/todo.png",
        technologies: ["React", "Express", "MongoDB"],
        features: [
            "Priority management",
            "Deadline scheduling",
            "Productivity tracking",
        ],
        status: "Live",
        liveUrl: "https://to-do-list-five-blue-89.vercel.app/",
        githubUrl: "https://github.com/Kamalrajkamalraj960/To-Do-List",
    },
    {
        id: "crud-app",
        title: "CRUD Application",
        shortDescription: "Full-featured CRUD app",
        description:
            "Full-featured CRUD application with a modern UI and robust backend.",
        image: "/projects/crud.png",
        technologies: ["React", "Node.js", "MongoDB"],
        features: [
            "Create, read, update & delete",
            "Modern responsive UI",
            "Robust Node.js backend",
        ],
        status: "Live",
        liveUrl: "https://mern-frontend-phi-ashy.vercel.app/",
        githubUrl: "https://github.com/Kamalrajkamalraj960/MERN_CRUD_APP",
    },
    {
        id: "kerala-fitness",
        title: "Kerala Fitness Planner",
        shortDescription: "Personalized diet planner",
        description:
            "Smart fitness web app that generates personalized 7-day Kerala diet plans with BMI, calorie targets, history tracking, and PDF download.",
        image: "/projects/keralafitness.png",
        technologies: ["MERN Stack", "MongoDB", "Vercel", "Render"],
        features: [
            "Personalized 7-day diet plans",
            "BMI & calorie targets",
            "History tracking",
            "PDF download",
        ],
        status: "Live",
        liveUrl: "https://kerala-fitness-planner.vercel.app/",
        githubUrl: "https://github.com/Kamalrajkamalraj960/kerala-fitness-planner",
    },
    {
        id: "expense-manager",
        title: "Next.js Expense Manager",
        shortDescription: "Full-stack expense tracker",
        description:
            "Full-stack expense tracking web application built with Next.js. Includes user authentication, budget tracking, transaction management, and real-time dashboard analytics with a clean UI.",
        image: "/projects/expense-manager.png",
        technologies: ["Next.js", "React", "MongoDB", "Vercel", "Tailwind CSS"],
        features: [
            "User authentication",
            "Budget tracking",
            "Transaction management",
            "Real-time dashboard analytics",
        ],
        status: "Live",
        liveUrl: "https://next-js-final-project-sage.vercel.app/",
        githubUrl: "https://github.com/Kamalrajkamalraj960/Next.js-final-project",
    },
    {
        id: "hospital-management",
        title: "Hospital Management System",
        shortDescription: "Django healthcare platform",
        description:
            "Full-stack hospital management web application built with Django. Features secure patient and doctor authentication, appointment booking, doctor dashboard, patient report uploads, department management, and responsive healthcare UI design.",
        image: "/projects/hospital-management.png",
        technologies: ["Django", "Python", "SQLite", "Bootstrap 5", "Render"],
        features: [
            "Secure patient & doctor auth",
            "Appointment booking",
            "Doctor dashboard",
            "Patient report uploads",
            "Department management",
        ],
        status: "Live",
        liveUrl: "https://hospital-management-u7z9.onrender.com/login/",
        githubUrl:
            "https://github.com/Kamalrajkamalraj960/project_5_hospitalManagement-main",
    },
    {
        id: "student-management",
        title: "Student Management System",
        shortDescription: "Django student CRUD app",
        description:
            "Full-stack student management web application built with Django. Features complete CRUD operations, student image uploads, search functionality, dark mode, responsive dashboard UI, and secure database management.",
        image: "/projects/student-management.png",
        technologies: ["Django", "Python", "SQLite", "Bootstrap 5", "Render"],
        features: [
            "Complete CRUD operations",
            "Student image uploads",
            "Search functionality",
            "Dark mode",
            "Responsive dashboard UI",
        ],
        status: "Live",
        liveUrl: "https://students-management-system-fig6.onrender.com/",
        githubUrl: "https://github.com/Kamalrajkamalraj960/student_management_system",
    },
    {
        id: "taskify",
        title: "Taskify Task Management System",
        shortDescription: "MERN task manager",
        description:
            "Modern full-stack task management web application built with the MERN stack. Features secure JWT authentication, task CRUD operations, status filtering, search functionality, dark mode, responsive dashboard UI, and MongoDB Atlas cloud database integration.",
        image: "/projects/taskify.png",
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "Tailwind CSS",
            "Render",
            "Vercel",
        ],
        features: [
            "Secure JWT authentication",
            "Task CRUD operations",
            "Status filtering & search",
            "Dark mode",
            "MongoDB Atlas integration",
        ],
        status: "Live",
        liveUrl: "https://taskify-machine-testing-from-vossia.vercel.app/",
        githubUrl:
            "https://github.com/Kamalrajkamalraj960/Machine-testing-from-vossial-seed",
    },
    {
        id: "kadawave",
        title: "KadaWave Ecommerce Platform",
        shortDescription: "MERN ecommerce platform",
        description:
            "Modern full-stack ecommerce web application built with the MERN stack. Features secure JWT authentication, admin dashboard, product CRUD operations, Cloudinary image uploads, shopping cart system, order management, responsive premium UI, MongoDB Atlas cloud database integration, and automated admin email notifications for customer orders.",
        image: "/projects/kadawave.png",
        technologies: [
            "React",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "Tailwind CSS",
            "Cloudinary",
            "Nodemailer",
            "Render",
            "Vercel",
        ],
        features: [
            "Secure JWT authentication",
            "Admin dashboard & product CRUD",
            "Cloudinary image uploads",
            "Shopping cart & order management",
            "Automated email notifications",
        ],
        status: "Live",
        liveUrl: "https://mern-ecommerce-kadawala.vercel.app/",
        githubUrl: "https://github.com/Kamalrajkamalraj960/Mern-Ecommerce_KadaWala",
    },
    {
        id: "chat-app",
        title: "Chat Application",
        shortDescription: "Realtime messaging app",
        description:
            "Realtime messaging app with authentication and ongoing live updates (currently in development).",
        image: "/projects/chat.png",
        technologies: ["React", "Node.js", "Socket.io"],
        features: [
            "Realtime messaging",
            "User authentication",
            "Live updates",
        ],
        status: "In Development",
    },
];

const CARDS_PER_GROUP = { desktop: 3, tablet: 2, mobile: 1 };

/** Slug used purely for stable animation keys / DOM ids. */
function useCardsPerGroup() {
    const [perGroup, setPerGroup] = useState(CARDS_PER_GROUP.desktop);

    useEffect(() => {
        const mqMobile = window.matchMedia("(max-width: 600px)");
        const mqTablet = window.matchMedia("(max-width: 980px)");

        const update = () => {
            if (mqMobile.matches) setPerGroup(CARDS_PER_GROUP.mobile);
            else if (mqTablet.matches) setPerGroup(CARDS_PER_GROUP.tablet);
            else setPerGroup(CARDS_PER_GROUP.desktop);
        };

        update();
        mqMobile.addEventListener("change", update);
        mqTablet.addEventListener("change", update);
        return () => {
            mqMobile.removeEventListener("change", update);
            mqTablet.removeEventListener("change", update);
        };
    }, []);

    return perGroup;
}

export default function Projects() {
    const prefersReducedMotion = useReducedMotion();
    const perGroup = useCardsPerGroup();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [groupIndex, setGroupIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const totalGroups = Math.max(1, Math.ceil(projects.length / perGroup));

    // Keep the group index valid when the responsive page size shrinks the
    // number of groups. Adjusting state during render is the React-endorsed
    // pattern here — it re-renders immediately without an extra paint.
    if (groupIndex > totalGroups - 1) {
        setGroupIndex(totalGroups - 1);
    }
    const safeGroupIndex = Math.min(groupIndex, totalGroups - 1);

    const visibleCards = useMemo(() => {
        const start = safeGroupIndex * perGroup;
        return projects
            .slice(start, start + perGroup)
            .map((project, i) => ({ project, index: start + i }));
    }, [safeGroupIndex, perGroup]);

    const activeProject = projects[selectedIndex];

    const goToGroup = (nextDirection) => {
        setDirection(nextDirection);
        setGroupIndex((g) => (g + nextDirection + totalGroups) % totalGroups);
    };

    const selectProject = (index) => setSelectedIndex(index);

    return (
        <section className={styles.projects} id="projects" aria-label="My projects">
            <div className={styles.heading}>
                <h2>My Projects</h2>
                <p>Some works that showcase my skills and creativity.</p>
            </div>

            <ActiveProject
                project={activeProject}
                prefersReducedMotion={prefersReducedMotion}
            />

            <ProjectSelector
                visibleCards={visibleCards}
                selectedIndex={selectedIndex}
                onSelect={selectProject}
                groupIndex={safeGroupIndex}
                totalGroups={totalGroups}
                direction={direction}
                onNavigate={goToGroup}
                prefersReducedMotion={prefersReducedMotion}
            />
        </section>
    );
}

/* ===================== ACTIVE PROJECT DISPLAY ===================== */
function ActiveProject({ project, prefersReducedMotion }) {
    const motionEnabled = !prefersReducedMotion;

    return (
        <div className={styles.activeWrap}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.article
                    key={project.id}
                    className={styles.active}
                    initial={motionEnabled ? { opacity: 0, y: 24 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={motionEnabled ? { opacity: 0, y: -18 } : { opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* LEFT — image + action buttons */}
                    <div className={styles.activeMedia}>
                        <div className={styles.activeImageFrame}>
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className={styles.activeImage}
                                loading="eager"
                            />
                            {project.status && (
                                <span
                                    className={`${styles.statusBadge} ${
                                        project.status === "Live"
                                            ? styles.statusLive
                                            : styles.statusDev
                                    }`}
                                >
                                    {project.status}
                                </span>
                            )}
                        </div>

                        <div className={styles.activeButtons}>
                            {project.liveUrl ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.primaryBtn}
                                >
                                    <FaExternalLinkAlt aria-hidden="true" />
                                    Live Project
                                </a>
                            ) : (
                                <span className={styles.disabledBtn} aria-disabled="true">
                                    <FaExternalLinkAlt aria-hidden="true" />
                                    Live coming soon
                                </span>
                            )}

                            {project.githubUrl ? (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.secondaryBtn}
                                >
                                    <FaGithub aria-hidden="true" />
                                    GitHub
                                </a>
                            ) : (
                                <span className={styles.disabledBtn} aria-disabled="true">
                                    <FaGithub aria-hidden="true" />
                                    Source private
                                </span>
                            )}
                        </div>
                    </div>

                    {/* RIGHT — details */}
                    <div className={styles.activeInfo}>
                        <h3 className={styles.activeTitle}>{project.title}</h3>
                        <p className={styles.activeDesc}>{project.description}</p>

                        <div className={styles.block}>
                            <h4 className={styles.blockLabel}>Tech Stack</h4>
                            <ul className={styles.badgeList}>
                                {project.technologies.map((tech) => (
                                    <li key={tech} className={styles.badge}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {project.features?.length > 0 && (
                            <div className={styles.block}>
                                <h4 className={styles.blockLabel}>Key Features</h4>
                                <ul className={styles.featureList}>
                                    {project.features.map((feature) => (
                                        <li key={feature} className={styles.feature}>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.article>
            </AnimatePresence>
        </div>
    );
}

/* ===================== PROJECT SELECTOR ===================== */
function ProjectSelector({
    visibleCards,
    selectedIndex,
    onSelect,
    groupIndex,
    totalGroups,
    direction,
    onNavigate,
    prefersReducedMotion,
}) {
    const slide = prefersReducedMotion ? 0 : 60;

    return (
        <div className={styles.selector}>
            <div className={styles.selectorHeader}>
                <span className={styles.selectorLabel}>Browse projects</span>
                <span className={styles.groupCounter} aria-live="polite">
                    {groupIndex + 1} / {totalGroups}
                </span>
            </div>

            <div className={styles.selectorTrackWrap}>
                <AnimatePresence mode="wait" custom={direction} initial={false}>
                    <motion.ul
                        key={groupIndex}
                        className={styles.cardRow}
                        custom={direction}
                        initial={{ opacity: 0, x: direction >= 0 ? slide : -slide }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction >= 0 ? -slide : slide }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                    >
                        {visibleCards.map(({ project, index }) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isSelected={index === selectedIndex}
                                onSelect={() => onSelect(index)}
                            />
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </div>

            <ProjectNavigation
                groupIndex={groupIndex}
                totalGroups={totalGroups}
                onNavigate={onNavigate}
            />
        </div>
    );
}

/* ===================== SINGLE SELECTOR CARD ===================== */
function ProjectCard({ project, isSelected, onSelect }) {
    return (
        <li className={styles.cardItem}>
            <button
                type="button"
                onClick={onSelect}
                aria-pressed={isSelected}
                aria-label={`Show ${project.title}`}
                className={`${styles.card} ${isSelected ? styles.cardSelected : ""}`}
            >
                <span className={styles.cardThumbFrame}>
                    <img
                        src={project.image}
                        alt=""
                        aria-hidden="true"
                        className={styles.cardThumb}
                        loading="lazy"
                    />
                    {isSelected && (
                        <span className={styles.cardSelectedTag}>Selected</span>
                    )}
                </span>
                <span className={styles.cardBody}>
                    <span className={styles.cardTitle}>{project.title}</span>
                    <span className={styles.cardTech}>
                        {project.technologies.slice(0, 2).join(" • ")}
                    </span>
                </span>
            </button>
        </li>
    );
}

/* ===================== GROUP NAVIGATION ===================== */
function ProjectNavigation({ groupIndex, totalGroups, onNavigate }) {
    const single = totalGroups <= 1;

    return (
        <div className={styles.nav}>
            <button
                type="button"
                className={styles.navBtn}
                onClick={() => onNavigate(-1)}
                disabled={single}
                aria-label="Show previous projects"
                title="Previous projects"
            >
                <FaChevronLeft aria-hidden="true" />
            </button>

            <ul className={styles.dots} aria-hidden="true">
                {Array.from({ length: totalGroups }).map((_, i) => (
                    <li
                        key={i}
                        className={`${styles.dot} ${
                            i === groupIndex ? styles.dotActive : ""
                        }`}
                    />
                ))}
            </ul>

            <button
                type="button"
                className={styles.navBtn}
                onClick={() => onNavigate(1)}
                disabled={single}
                aria-label="Show next projects"
                title="Next projects"
            >
                <FaChevronRight aria-hidden="true" />
            </button>
        </div>
    );
}
