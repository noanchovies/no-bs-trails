"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Waypoints, Compass } from "lucide-react"; 
import siteConfig from "@/data/site-config.json"; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-16 bg-black/95 backdrop-blur-md z-40 flex items-center justify-between px-4 border-b border-gray-800">
        
        <Link href="/" className="flex items-center gap-2 group">
           
           {/* --- ICON: WAYPOINTS --- 
               This is the connected dots icon. 
               I removed the 'fill' because this icon is line-based and looks better as a clean stroke.
           */}
           <div className="text-brand transition-transform group-hover:scale-110">
             <Waypoints 
               size={28}  // Increased slightly from 24 because this icon is wider/shorter
               strokeWidth={2.5}
             />
           </div>
           
           {/* --- TEXT LOCKUP --- */}
           <div className="flex items-baseline gap-1.5 font-bold text-lg tracking-wide uppercase">
             <span className="text-white">No BS</span>
             <span className="text-brand">
               {siteConfig.siteName}
             </span>
           </div>
        </Link>

        <button 
          onClick={() => setIsMenuOpen(true)}
          className="p-2 text-gray-300 hover:text-white transition-colors"
        >
          <Menu size={28} />
        </button>
      </header>

      {/* DRAWER (unchanged) */}
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
           <Link href="/news" onClick={() => setIsMenuOpen(false)}>News</Link>
           <Link href="/tech" onClick={() => setIsMenuOpen(false)}>Technology</Link>
        </nav>
      </div>
    </>
  );
}
