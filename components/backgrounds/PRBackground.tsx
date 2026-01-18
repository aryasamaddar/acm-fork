"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const prIcons = ["🎤", "📣", "🤝", "🌐", "💼", "📱", "✨", "🎯"];

export default function PRBackground() {
    const [floatingIcons, setFloatingIcons] = useState<{ id: number; icon: string; x: number; y: number; delay: number }[]>([]);

    useEffect(() => {
        const icons = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            icon: prIcons[Math.floor(Math.random() * prIcons.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
        }));
        setFloatingIcons(icons);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50" />

            {/* Floating PR icons */}
            {floatingIcons.map((item) => (
                <motion.div
                    key={item.id}
                    className="absolute text-4xl"
                    style={{
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                        opacity: 0.25,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 2,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut",
                    }}
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <motion.line
                    x1="10%" y1="20%" x2="40%" y2="60%"
                    stroke="rgb(6, 182, 212)"
                    strokeWidth="2"
                    animate={{
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.line
                    x1="60%" y1="30%" x2="90%" y2="70%"
                    stroke="rgb(14, 165, 233)"
                    strokeWidth="2"
                    animate={{
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
                <motion.circle
                    cx="40%" cy="60%" r="8"
                    fill="rgb(6, 182, 212)"
                    animate={{
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.circle
                    cx="60%" cy="30%" r="8"
                    fill="rgb(14, 165, 233)"
                    animate={{
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                    }}
                />
            </svg>

            {/* Large megaphone icon */}
            <motion.div
                className="absolute top-10 left-20 text-8xl opacity-10"
                animate={{
                    x: [0, 10, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                📢
            </motion.div>

            <motion.div
                className="absolute bottom-10 right-20 text-8xl opacity-10"
                animate={{
                    x: [0, -10, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            >
                🌐
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-sky-500/5"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
