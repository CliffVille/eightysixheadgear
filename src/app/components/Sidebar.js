"use client";

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation"; 

const navItems = [
  { name: "Headbands", href: "/headbands" },
  { name: "Custom", href: "/custom" },
  { name: "About", href: "/about" },
];

export default function Sidebar() {
    const currentPath = usePathname();

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 min-h-screen w-64 bg-white bg-opacity-80 text-black text-center flex flex-col justify-around items-center p-4 shadow-lg">
        <div className="flex justify-center mb-6">
            <Link href="/">
                <Image 
                    src="/logo.png"
                    alt="EightysixGear"
                    width={120}
                    height={120}
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
