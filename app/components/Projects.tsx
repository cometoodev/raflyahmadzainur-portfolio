import React from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

export const projectsData = [
    {
      slug: 'ppid-bpmp',
      badge: 'WEB',
      title: 'Information and Documentation Management Officer of the Education Quality Assurance Center',
      desc: 'Web-based Public Information and Documentation Management (PPID) portal for BPMP Southeast Sulawesi.',
      image: '/project/ppid-bpmpsultra.png',
      repoLink: 'https://github.com/cometoodev/ppid-sultra-laravel',
      liveLink: 'https://ppid-bpmpsultra.page.gd/',
      liveBtnText: 'View Website'
    },
    {
      slug: 'bi-library',
      badge: 'WEB',
      title: 'Bank Indonesia Library Management System',
      desc: 'Web-based library management system for Bank Indonesia Southeast Sulawesi.',
      image: '/project/bi-library.png',
      repoLink: null,
      liveLink: 'https://perpustakaanbisultra.com',
      liveBtnText: 'View Website'
    },
    {
      slug: 'intelligent-audit',
      badge: 'AI / WEB',
      title: 'Intelligent Audit System',
      desc: 'AI-based public space quality assessment using YOLO and fuzzy logic.',
      image: '/project/audit-system.png',
      repoLink: 'https://github.com/cometoodev/inteligent-audit-yoloandfuzzy',
      liveLink: '#',
      liveBtnText: 'View Project ↗'
    },
    {
      slug: 'driver-distraction',
      badge: 'AI',
      title: 'Driver Distraction Detection',
      desc: 'AI-based driver distraction detection using pose estimation and YOLOv11.',
      image: '/project/driver-distraction.png',
      repoLink: 'https://github.com/cometoodev/poseestimation-yolov11',
      liveLink: '#',
      liveBtnText: 'View Project ↗'
    },
    {
      slug: 'portfolio-website',
      badge: 'WEB',
      title: 'Portfolio Website',
      desc: 'Personal portfolio website showcasing projects, skills, and experience.',
      image: '/project/portfolio.png',
      repoLink: 'https://github.com/cometoodev/raflyahmadzainur-portfolio',
      liveLink: '#',
      liveBtnText: 'View Project ↗'
    },
    {
      slug: 'audit-prototype',
      badge: 'UI/UX',
      title: 'Intelligent Audit System Prototype',
      desc: 'UI/UX prototype for an AI-based public space audit system.',
      image: '/project/audit-prototype.png',
      repoLink: 'https://www.figma.com/design/I0dBGNWiYDSAkNe9cOth8O/Desain-Prototype-Sistem-Audit-Cerdas?node-id=0-1&m=dev&t=W9bUraviiFvvVAs1-1',
      liveLink: 'https://www.figma.com/design/I0dBGNWiYDSAkNe9cOth8O/Desain-Prototype-Sistem-Audit-Cerdas?node-id=0-1&m=dev&t=W9bUraviiFvvVAs1-1',
      liveBtnText: 'View Figma ↗'
    },
    {
      slug: 'digestive-app',
      badge: 'MOBILE',
      title: 'Digestive Symptom Classification App',
      desc: 'Android app for classifying digestive symptoms using LSTM.',
      image: '/project/digestive-app.png',
      repoLink: 'https://github.com/cometoodev/Classification-LSTM-Android',
      liveLink: '#',
      liveBtnText: 'View Project ↗'
    },
    {
      slug: 'digital-guestbook',
      badge: 'WEB',
      title: 'Digital Guestbook System',
      desc: 'Web-based digital guestbook for the Kendari City Regional Secretariat.',
      image: '/project/guestbook.png',
      repoLink: 'https://github.com/cometoodev/bukutamusetdakotakendari',
      liveLink: '#',
      liveBtnText: 'View Project ↗'
    },
    {
      slug: 'si-cantik',
      badge: 'WEB',
      title: 'SI-CANTIK SIMBUNE',
      desc: 'Digital village statistics and administrative records management system.',
      image: '/project/si-cantik.png',
      repoLink: 'https://github.com/cometoodev/SI-CANTIK-SIMBUNE',
      liveLink: '#',
      liveBtnText: 'View Project ↗'
    }
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">MY WORK</span>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Portfolio Projects
            </h2>
            <Briefcase className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projectsData.map((project, idx) => (
            <div 
              key={idx}
              className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-[2rem] overflow-hidden flex flex-col group"
            >
              {/* Area Gambar */}
              <div className="relative h-48 w-full bg-slate-200">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-4 left-4 bg-white/40 backdrop-blur-md text-slate-900 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-white/40 shadow-sm">
                  {project.badge}
                </span>
              </div>

              {/* Area Konten */}
              <div className="p-6 flex flex-col flex-grow bg-white/50">
                <h3 className="font-bold text-slate-800 text-xl mb-3 leading-tight line-clamp-2" title={project.title}>
                  {project.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6 flex-grow line-clamp-3">
                  {project.desc}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold w-fit hover:bg-blue-600 hover:text-white flex items-center gap-1 transition-all duration-300"
                >
                  View Details <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
