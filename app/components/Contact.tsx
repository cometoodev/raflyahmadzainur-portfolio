import React from "react";
import { Mail, GitBranch } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section className="font-sans">
      {/* 1. Call to Action Card */}
      <div className="relative -mt-24 max-w-5xl mx-auto bg-white rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-12 md:p-20 text-center z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Let's Build</h2>
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">Impactful Solutions</h2>
        <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
          Open for full-time opportunities, collaborations, and challenging projects.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:raflyahmad22135@gmail.com"
            className="flex items-center gap-2 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/raflyahmadzainur/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg"
          >
            <LinkedinIcon className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* 2. Bottom Footer */}
      <footer className="bg-slate-50 pt-32 pb-12 px-6 md:px-12 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Kiri (Logo) */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-black text-slate-900 tracking-tighter">RZ.</div>
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">RAFLY AHMAD ZAINUR</span>
          </div>

          {/* Tengah (Copyright) */}
          <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">
            © 2026 • BUILT WITH PASSION
          </p>

          {/* Kanan (Social Links) */}
          <div className="flex items-center gap-5">
            <a 
              href="https://www.linkedin.com/in/raflyahmadzainur/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 opacity-70 hover:opacity-100 hover:text-slate-900 transition-all duration-300"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/cometoodev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 opacity-70 hover:opacity-100 hover:text-slate-900 transition-all duration-300"
            >
              <GitBranch className="w-5 h-5" />
            </a>
            <a 
              href="mailto:raflyahmad22135@gmail.com"
              className="text-slate-400 opacity-70 hover:opacity-100 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </footer>
    </section>
  );
}
