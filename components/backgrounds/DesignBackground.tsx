"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const designIcons = ["🎨", "🖌️", "✏️", "📐", "📏", "🖍️", "🖼️", "🖋️"];

export default function DesignBackground() {
    const [floatingIcons, setFloatingIcons] = useState<{ id: number; icon: string; x: number; y: number; delay: number }[]>([]);

    useEffect(() => {
        const icons = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            icon: designIcons[Math.floor(Math.random() * designIcons.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 3,
        }));
        setFloatingIcons(icons);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50" />

            {/* Floating design icons */}
            {floatingIcons.map((item) => (
                <motion.div
                    key={item.id}
                    className="absolute text-4xl"
                    style={{
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                        opacity: 0.3,
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

            {/* Large design-related icons */}
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
                🎨
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
                🖌️
            </motion.div>

            {/* Overlay gradient */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"
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