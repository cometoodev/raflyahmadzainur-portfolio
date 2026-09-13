import React from "react";

export default function About() {
  const techStack = [
    "React.js",
    "Next.js",
    "Laravel",
    "TypeScript",
    "TensorFlow",
    "Android Studio",
    "Figma",
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "CorelDRAW",
    "FileZilla",
    "VS Code",
    "GitHub",
    "Vercel",
    "Microsoft Office",
  ];

  const interpersonalSkills = [
    "Artificial Intelligence (AI)",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Data Science",
    "Data Analysis",
    "Data Pipelines",
    "Web Development",
    "Front-end Developer",
    "Back-end Developer",
    "Fullstack Developer",
    "UI/UX Design",
    "Software Engineering",
    "OOP",
    "Reinforcement Learning",
    "Infrastructure & Cloud",
    "MIS",
    "Digital Banking",
    "Financial Data Analyst",
    "Statistician",
    "Troubleshooting",
    "Technical Support",
    "IT Management & Project",
    "Facilitator",
    "Teaching & Training",
    "Teamwork",
    "Communication",
    "Religious",
    "TOEFL",
  ];

  return (
    <section id="about" className="px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-blue-600 text-sm uppercase font-bold tracking-wider mb-2 block">
            OVERVIEW
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 flex items-center gap-3">
            Profile
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
            </svg>
          </h2>
        </div>

        {/* Top Card: Executive Summary */}
        <div className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 mb-6 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold text-blue-600 mb-6">Executive Summary</h3>
          <p className="text-lg font-medium text-slate-700 leading-relaxed mb-10">
            A recent Informatics Engineering graduate specializing in data science, end-to-end web and Android development, UI/UX and graphic design, and the implementation of smart technology solutions specifically Artificial Intelligence (AI). I possess comprehensive system analysis capabilities, data science expertise, and strong problem-solving skills to ensure optimal software performance. As a quick learner and an adaptive problem-solver, I am ready to grow dynamically and deliver innovative contributions in a professional environment.
          </p>
          
          <div className="border-t border-slate-100 pt-8 mt-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Location</span>
                  <span className="text-sm font-semibold text-slate-800">Kendari, SE Sulawesi</span>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Contact</span>
                  <span className="text-sm font-semibold text-slate-800 break-all">raflyahmad22135@gmail.com</span>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Role</span>
                  <span className="text-sm font-semibold text-slate-800">Data Scientist & Fullstack</span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Status</span>
                  <span className="text-sm font-semibold text-green-700">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Split Cards (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
          
          {/* Left: Tech Stack */}
          <div className="lg:col-span-4 w-full bg-white border border-slate-100 shadow-sm rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">&gt;_</span> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-semibold rounded-full hover:bg-slate-50 hover:border-slate-300 transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Interpersonal */}
          <div className="lg:col-span-8 w-full bg-white border border-slate-100 shadow-sm rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-600">👥</span> Interpersonal & Core Roles
            </h3>
            <div className="flex flex-wrap gap-2">
              {interpersonalSkills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-green-50 border border-green-100 text-green-700 text-sm font-semibold rounded-full hover:bg-green-100 transition-colors duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
