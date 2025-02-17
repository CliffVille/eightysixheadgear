"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedTextEffect = () => {
    const originalText = "EIGHTYSIX HEADGEAR";

    const [animatedText, setAnimatedText] = useState(
        originalText.split("").map((char) => ({
            char,
            color: "text-white",
        }))
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimatedText((prevText) =>
                prevText.map((item) => ({
                    char: item.char,
                    color: Math.random() > 0.7 ? "text-red-600" : "text-white",
                }))
            );
        }, 700);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute left-[8%] top-1/2 transform -translate-y-1/2">
            <h1 className="text-[6rem] font-bold tracking-wide text-white relative leading-none flex gap-1">
                {animatedText.map((item, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.05,
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                        className={`inline-block ${item.color}`}
                    >
                        {item.char}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
};

export default AnimatedTextEffect;
