"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const facultyIcons = ["🎓", "📚", "🏛️", "✨", "📖", "🌟", "🎯", "💡"];

export default function FacultySponsorBackground() {
    const [floatingIcons, setFloatingIcons] = useState<{ id: number; icon: string; x: number; y: number; delay: number }[]>([]);

    useEffect(() => {
        const icons = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            icon: facultyIcons[Math.floor(Math.random() * facultyIcons.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
        }));
        setFloatingIcons(icons);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient background - Deep blue and gold for academic prestige */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-amber-50" />

            {/* Floating faculty icons */}
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
                    x1="15%" y1="25%" x2="50%" y2="70%"
                    stroke="rgb(79, 70, 229)"
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
                    x1="70%" y1="20%" x2="90%" y2="80%"
                    stroke="rgb(217, 119, 6)"
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
                    cx="50%" cy="70%" r="8"
                    fill="rgb(79, 70, 229)"
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
                    cx="70%" cy="20%" r="8"
                    fill="rgb(217, 119, 6)"
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

            {/* Large faculty-related icons */}
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
                🎓
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
                📚
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-amber-500/5"
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
