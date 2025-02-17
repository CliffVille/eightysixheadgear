"use client";

import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = [

  { name: "Headbands", href: "/headbands" },
  { name: "Custom", href: "/custom" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export default function Sidebar() {
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
      setCurrentPath(window.location.pathname);
    }, []);

  return (
    <div className="h-screen w-64 bg-transparent text-black text-center flex flex-col justify-around items-center p-4 sticky">
        <div className="flex justify-center mb-6">
            <Link href="/">
                <Image 
                    src="/logo.png"
                    alt="EightysixGear"
                    width={150}
                    height={150}
                    priority
                />
            </Link>
        </div>

        <nav className="flex flex-col space-y-2">
            {navItems.map(({ name, href }) => (
                <Link
                    key={href}
                    href={href}
                    className={`p-3 rounded-lg transition ${
                        currentPath === href ? "underline font-bold" : "hover:underline"
                    }`}  
                >
                    {name}
                </Link>
            ))}
        </nav>
    </div>
  )
}