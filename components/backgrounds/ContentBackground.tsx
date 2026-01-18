"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const contentIcons = ["📝", "✍️", "📰", "🎬", "📸", "🎨", "💬", "📢"];

export default function ContentBackground() {
    const [floatingIcons, setFloatingIcons] = useState<{ id: number; icon: string; x: number; y: number; delay: number }[]>([]);

    useEffect(() => {
        const icons = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            icon: contentIcons[Math.floor(Math.random() * contentIcons.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
        }));
        setFloatingIcons(icons);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50" />

            {/* Floating content icons */}
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
                        rotate: [0, 10, -10, 0],
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

            {/* Large quote marks */}
            <motion.div
                className="absolute top-10 left-20 text-9xl font-serif text-rose-400 opacity-15"
                animate={{
                    x: [0, 10, 0],
                    rotate: [0, 2, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                "
            </motion.div>

            <motion.div
                className="absolute bottom-10 right-20 text-9xl font-serif text-pink-400 opacity-15"
                animate={{
                    x: [0, -10, 0],
                    rotate: [0, -2, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            >
                "
            </motion.div>

            {/* Floating text lines */}
            <motion.div
                className="absolute top-1/4 right-16 w-48 space-y-2 opacity-20"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <div className="h-2 bg-rose-300 rounded w-full" />
                <div className="h-2 bg-rose-300 rounded w-3/4" />
                <div className="h-2 bg-rose-300 rounded w-5/6" />
                <div className="h-2 bg-rose-300 rounded w-1/2" />
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-pink-500/5"
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
