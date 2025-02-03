"use client";

import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Headbands", href: "/headbands" },
  { name: "Apparel", href: "/apparel" },
  { name: "Custom", href: "/custom" },
  { name: "About", href: "/about" },
];

export default function Sidebar() {
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
      setCurrentPath(window.location.pathname);
    }, []);

  return (
    <div className="h-screen w-64 bg-transparent text-black text-center flex flex-col justify-between items-center p-4">
        <div className="flex justify-center mb-6">
            <Link href="/">
                <Image 
                    src="/logo.png"
                    alt="EightysixGear"
                    width={50}
                    height={50}
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