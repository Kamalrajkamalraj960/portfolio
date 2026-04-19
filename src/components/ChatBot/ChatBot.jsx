"use client";

import { useState } from "react";
import styles from "./ChatBot.module.css";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userText = input;

        setMessages((prev) => [...prev, { role: "user", text: userText }]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: userText }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                { role: "bot", text: data.reply || "No response" },
            ]);

        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { role: "bot", text: "Error connecting to AI 😢" },
            ]);
        }

        setLoading(false);
    };

    return (
        <>
            <button
                className={styles.toggle}
                onClick={() => setOpen(!open)}
            >
                <img
                    src="https://static.thenounproject.com/png/1156284-200.png"
                    alt="Chat Icon"
                    className={styles.icon}
                />
            </button>

            <div
                className={`${styles.chatbox} ${open ? styles.open : styles.closed
                    }`}
            >

                <div className={styles.header}>
                    K_AI
                    <img
                        src="https://static.thenounproject.com/png/1156284-200.png"
                        alt="Chat Icon"
                        className={styles.logo}
                    />
                </div>

                <div className={styles.messages}>
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={
                                msg.role === "user"
                                    ? styles.userMsg
                                    : styles.botMsg
                            }
                        >
                            {msg.text}
                        </div>
                    ))}

                    {loading && (
                        <div className={styles.botMsg}>
                            <span className={styles.dots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    )}

                </div>

                <div className={styles.inputArea}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask anything about this site..."
                        onKeyDown={(e) =>
                            e.key === "Enter" && sendMessage()
                        }
                    />

                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    );
}
