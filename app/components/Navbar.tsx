"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "EXPERIENCE", id: "experience" },
    { name: "EDUCATION", id: "education" },
    { name: "PROJECTS", id: "projects" },
    { name: "ACHIEVEMENTS", id: "achievements" },
    { name: "CERTIFICATES", id: "certificates" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'achievements', 'certificates'];
      // Offset tambahan (misalnya 150px) agar menu berubah sebelum mencapai bagian paling atas
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Jika posisi scroll berada di dalam jangkauan elemen ini
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; // Hentikan loop jika sudah menemukan section yang aktif
          }
        }
      }
    };

    // Jalankan sekali saat pertama kali render
    handleScroll();

    // Tambahkan event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 rounded-full px-6 py-3 flex items-center justify-between z-50 transition-all duration-300">
      
      {/* Left: Logo & Name */}
      <div className="group flex items-center gap-3 cursor-pointer bg-white/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:bg-white/60 transition-all duration-300">
        {/* Teks RZ. */}
        <div className="relative flex items-center justify-center w-8 h-8">
          <span className="text-2xl font-black text-slate-900 tracking-tighter">RZ.</span>
        </div>

        {/* Teks Nama Proporsional */}
        <div className="flex flex-col hidden sm:flex">
          <span className="text-slate-800 font-bold text-sm leading-none">RAFLY AHMAD</span>
          <span className="text-slate-500 font-semibold text-[9px] tracking-[0.3em] uppercase leading-none mt-1">Z A I N U R</span>
        </div>
      </div>
      
      {/* Center: Navigation Links (Hidden on small screens) */}
      <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {menuItems.map((menu) => (
          <a
            key={menu.id}
            href={`#${menu.id}`}
            className={`text-sm transition-all duration-300 pb-1 border-b-2 ${
              activeSection === menu.id
                ? "text-blue-600 font-bold border-blue-600"
                : "text-slate-400 font-semibold hover:text-blue-600 border-transparent"
            }`}
          >
            {menu.name}
          </a>
        ))}
      </div>
      
    </nav>
  );
}
