"use client";

import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const showToast = (msg) => {
        setToast(msg);
        setTimeout(() => setToast(""), 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                showToast("Message Sent Successfully ✅");
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                showToast("Failed to Send ❌");
            }
        } catch (error) {
            showToast("Something went wrong ❌");
        }

        setLoading(false);
    };

    return (
        <section className={styles.contact} id="contact">
            <div className={styles.heading}>
                <h2>Contact Me</h2>
                <p>Have a project or idea? Let's talk.</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={loading}>
                    {loading ? <span className={styles.loader}></span> : "Send Message"}
                </button>
            </form>

            {toast && <div className={styles.toast}>{toast}</div>}
        </section>
    );
}
