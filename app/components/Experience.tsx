"use client";

import React from "react";
import Image from "next/image";

interface ExperienceItem {
  id: number;
  logo: string;
  role: string;
  company: string;
  timeline: string;
  location: string;
  type: string;
  typeBadgeClass: string;
  bullets: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    logo: "/logos/bi.png",
    role: "Programmer and Financial Data Analyst",
    company: "Central Bank of Indonesia KPw Southeast Sulawesi",
    timeline: "Jun 2026 – Aug 2026",
    location: "Kendari, ID",
    type: "Internship",
    typeBadgeClass: "bg-blue-50 text-blue-700 border border-blue-200",
    bullets: [
      "Developed the Bank Indonesia Southeast Sulawesi Library Management Information System website, accessible at: perpustakaanbisultra.com",
      "Processed and presented regional economic data to support economic analysis and reporting.",
      "Performed data analysis, reporting, and financial oversight in accordance with Bank Indonesia’s assigned responsibilities.",
    ],
    skills: ["Web Development", "Data Analysis", "Financial Monitoring"],
  },
  {
    id: 2,
    logo: "/logos/bri.png",
    role: "IT Support and E-Channel Specialist",
    company: "PT Bank Rakyat Indonesia (Persero) Tbk",
    timeline: "Aug 2025 – Sep 2025",
    location: "Kendari, ID",
    type: "Internship",
    typeBadgeClass: "bg-orange-50 text-orange-700 border border-orange-200",
    bullets: [
      "Provided technical assistance in case of disruptions to e-channel services.",
      "Ensured messaging for all e-channel services (ATM, internet banking, mobile banking, SMS banking, EDC, QRIS) ran smoothly.",
      "Monitored service uptime, performance, and availability.",
    ],
    skills: ["IT Support", "Troubleshooting", "System Monitoring"],
  },
  {
    id: 3,
    logo: "/logos/setda.png",
    role: "Web Developer",
    company: "Regional Secretariat of Kendari City",
    timeline: "Jan 2025 – Feb 2025",
    location: "Kendari, ID",
    type: "Internship",
    typeBadgeClass: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    bullets: [
      "Created a website-based application \"Digital Guest Book System\" to help collect guest data at the Kendari City Regional Secretariat.",
      "Assisted employees in creating Performance Trees.",
      "Created PowerPoint presentations for Public Presentations.",
    ],
    skills: ["Web Development", "System Architecture", "UI/UX Design"],
  },
  {
    id: 4,
    logo: "/logos/kkn-mbkm.png",
    role: "Fullstack Developer – KKN-MBKM x BPS East Kolaka",
    company: "Student Community Service – Freedom to Learn, Independent Campus (KKN-MBKM)",
    timeline: "Jul 2024 – Jan 2025",
    location: "East Kolaka, ID",
    type: "Community Service",
    typeBadgeClass: "bg-purple-50 text-purple-700 border border-purple-200",
    bullets: [
      "Served as a Web Programmer in the KKN-MBKM program in collaboration with BPS East Kolaka and Simbune Village Government.",
      "Developed a website and application to support the collection and management of village statistical data.",
      "Implemented digital solutions to improve the accessibility and presentation of village statistical information for data-driven development.",
    ],
    skills: ["Fullstack Development", "Data Management", "Digital Solutions"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-blue-600 text-sm uppercase font-bold tracking-wider mb-2 block">
            EXPERIENCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 flex items-center gap-3">
            Work History
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.896 1.982-2.044 1.982m-12.412 0c-1.148 0-2.044-.888-2.044-1.982v-4.25m14.456 0c-1.121-.295-2.296-.452-3.513-.452-1.216 0-2.39.157-3.512.452m0 0C13.568 14.654 12.808 15 12 15c-.808 0-1.568-.346-2.188-.936m0 0c-1.122-.295-2.297-.452-3.513-.452-1.217 0-2.391.157-3.513.452m0 0C4.301 12.592 3.75 11.082 3.75 9.429c0-1.925 1.558-3.485 3.483-3.485h9.534c1.925 0 3.483 1.56 3.483 3.485 0 1.653-.551 3.163-1.637 4.179z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.945c0-1.213-1.025-2.195-2.292-2.195h-2.916c-1.267 0-2.292.982-2.292 2.195" />
            </svg>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">

          {/* Vertical line — only visible on md+ */}
          <div className="hidden md:block absolute left-[11px] top-3 bottom-3 w-px bg-slate-200" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex gap-6 md:gap-10 group">

                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0 pt-1 z-10">
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm hover:border-slate-200 hover:shadow-md transition-all duration-300">

                  {/* Top row: Logo + Date/Location/Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                    {/* Logo */}
                    <div className="w-14 h-14 rounded-2xl border border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="object-contain w-10 h-10"
                      />
                    </div>

                    {/* Details: Date, Location, Badge */}
                    <div className="flex flex-col sm:items-end gap-2.5">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.timeline}
                        </span>
                        <span className="hidden sm:inline text-slate-300">•</span>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                          <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide inline-flex ${exp.typeBadgeClass}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-slate-500 mb-5">
                    {exp.company}
                  </p>

                  {/* Bullet points */}
                  <ul className="list-disc list-inside space-y-1.5 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-slate-500 leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="border border-slate-200 text-slate-600 rounded-full px-3 py-1 text-xs font-semibold hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
