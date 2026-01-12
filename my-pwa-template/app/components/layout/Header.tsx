"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import siteConfig from "@/data/site-config.json"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* 1. VISIBLE HEADER */}
      <header className="fixed top-0 left-0 w-full h-16 bg-black/95 backdrop-blur-md z-40 flex items-center justify-between px-4 border-b border-gray-800">
        
        <Link href="/" className="flex items-center gap-2">
           <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-bold rounded text-white">
             {siteConfig.logoLetter}
           </div>
           <span className="font-bold text-lg tracking-wide uppercase text-gray-100">
             {siteConfig.siteName}
           </span>
        </Link>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 text-gray-300 hover:text-white"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* 2. SLIDE-OVER DRAWER */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50"
          onClick={() => setIsMenuOpen(false)} 
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/3 bg-neutral-900 z-50 transform transition-transform duration-300 border-l border-gray-800 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-5 flex justify-end">
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-6 text-xl font-medium">
           <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
           {/* Dynamic links will go here later */}
           <Link href="/news" onClick={() => setIsMenuOpen(false)}>News</Link>
           <Link href="/tech" onClick={() => setIsMenuOpen(false)}>Technology</Link>
        </nav>
      </div>
    </>
  );
}
