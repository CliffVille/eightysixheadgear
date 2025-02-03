"use client";

import { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [paintColor, setPaintColor] = useState("red");
    const [blotches, setBlotches] = useState([]);

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });

            const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
            setPaintColor(colors[Math.floor(Math.random() * colors.length)]);
        };

        const dropBlotch = (e) => {
            setBlotches((prevBlotches) => [
                ...prevBlotches,
                {
                    id: Date.now(),
                    x: e.clientX - 10,
                    y: e.clientY - 10,
                    color: "red",
                },
            ]);
        };

        const playTickSound = () => {
            const audio = new Audio("./tick_sound.mp3");
            audio.play().catch(err => console.warn("Audio play blocked until user interacts:", err));
        };

        document.addEventListener("mousemove", updateCursorPosition);
        document.addEventListener("click", dropBlotch);
        document.body.style.cursor = "none";

        document.querySelectorAll("a").forEach(link => {
            link.style.cursor = "none";
            link.style.position = "relative";
            link.style.transition = "color 0.3s ease-in-out";
        });

        document.querySelectorAll("a").forEach(link => {
            link.addEventListener("mouseenter", () => {
                link.style.color = "red";
                link.style.textShadow = "0 5px 5px rgba(255, 0, 0, 0.8)";
                playTickSound();
            });

            link.addEventListener("mouseleave", () => {
                link.style.color = "";
                link.style.textShadow = "";
            });
        });

        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
            document.removeEventListener("click", dropBlotch);
            document.body.style.cursor = "auto";
            document.querySelectorAll("a").forEach(link => {
                link.style.cursor = "auto";
            });
        };
    }, []);

    return (
        <>
            <div
                className="fixed pointer-events-none z-50 w-40 h-40 bg-contain bg-no-repeat"
                style={{
                    left: `${cursorPosition.x - 70}px`, 
                    top: `${cursorPosition.y - 70}px`,
                    backgroundImage: "url('/gun.svg')",
                    filter: `drop-shadow(0px 0px 6px ${paintColor})`,
                }}
            />
        </>
    );
};

export default CustomCursor;