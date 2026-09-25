"use client";

import { useState } from "react";
import { BadgeCheck, ArrowUpRight } from "lucide-react";

export const certificatesData = [
    { org: "Badan Nasional Sertifikasi Profesi", title: "Sertifikat BNSP Junior Desain Grafis", link: "https://drive.google.com/file/d/1BGqn9OJbNJMjA2MmWz1MDytXGl0i6VTV/view?usp=drive_link" },
    { org: "Dicoding", title: "Memulai Pemrograman Dengan Java", link: "https://drive.google.com/file/d/1pdznmGgnq2uRoVWYrimMzNbDebLSZprj/view?usp=drive_link" },
    { org: "Coursera", title: "Create a Financial Statement using Microsoft Excel", link: "https://drive.google.com/file/d/1kkOl1BwRFBAaGk8oyPe3fPsVTIxVCCjT/view?usp=sharing" },
    { org: "Coursera", title: "Creating a Budget with Microsoft Excel", link: "https://drive.google.com/file/d/1Y50Z4QKZG_3VvCxQWulIG1-hcDR8H7BL/view?usp=drive_link" },
    { org: "Coursera", title: "Getting Started with Microsoft Excel", link: "https://drive.google.com/file/d/1Ncpd2qQeDgd-N3DrcR7ybe_na4EnEsAc/view?usp=drive_link" },
    { org: "Coursera", title: "How to Use Lookup Reference Math and Text", link: "https://drive.google.com/file/d/1j1SZ9wCD62KXrHanHMsdS_Yrun7_nAqK/view?usp=drive_link" },
    { org: "DQLab", title: "Free Trial Excel - Penggunaan Rumus dan Fungsi", link: "https://drive.google.com/file/d/1leOfAYb_JM2VZX0EmxCknno5EP9Hno70/view?usp=drive_link" },
    { org: "DQLab", title: "Fundamental SQL Using SELECT Statement", link: "https://drive.google.com/file/d/1fxJgmFoU2LL84hkGqtXd0bAs2vR5BhXp/view?usp=drive_link" },
    { org: "DQLab", title: "Guide to Learn Python with AI at DQLab", link: "https://drive.google.com/file/d/14E1v6KL4WcMh9SbGPqx18sIRrdTKBmDP/view?usp=drive_link" },
    { org: "DQLab", title: "Guide to Learn R with AI at DQLab", link: "https://drive.google.com/file/d/18PHUwQD3gwNK_oKUHDaAZ7FBjTEJI7wp/view?usp=drive_link" },
    { org: "DQLab", title: "Guide to Learn SQL with AI at DQLab", link: "https://drive.google.com/file/d/17V93NBLhpTGm0PwrPLbw-gbD7IDeBIGS/view?usp=drive_link" },
    { org: "DQLab", title: "Introduction to Data Science with Python", link: "https://drive.google.com/file/d/1F8kZXDgpNNx2Igbfek17hLZHY9u9Pf-n/view?usp=drive_link" },
    { org: "DQLab", title: "Introduction to Data Science with R", link: "https://drive.google.com/file/d/15o-IA9cP6hBVdvxysBT2dbDQGjesOSAr/view?usp=drive_link" },
    { org: "DQLab", title: "Python Fundamental for Data Science", link: "https://drive.google.com/file/d/1GPPTiKkZjP_w99E3dk_je3ntcM9WGK_q/view?usp=drive_link" },
    { org: "DQLab", title: "R Fundamental for Data Science", link: "https://drive.google.com/file/d/1KN5VeY8uYh83ApjWfL-H7wv8CtMb4ud8/view?usp=drive_link" },
    { org: "HackerRank", title: "CSS (Basic)", link: "https://drive.google.com/file/d/1jlEQhOMCP1W2uJ_hIT56eRktari1tZR0/view?usp=drive_link" },
    { org: "HackerRank", title: "JavaScript (Basic)", link: "https://drive.google.com/file/d/1OpJKkKcPxq9_fk_118_GQ1No7xtEwOvp/view?usp=drive_link" },
    { org: "HackerRank", title: "Python (Basic)", link: "https://drive.google.com/file/d/16Ar7X64_dNkxM3X6bhOI4XX31hx-T8wv/view?usp=drive_link" },
    { org: "Mita Training", title: "General K3 (OHS) Basic Education", link: "https://drive.google.com/file/d/1hWNKMjRHuvBXwHAyaCc-DyMr7Y0wiC_K/view?usp=drive_link" },
    { org: "Skilvul", title: "C# Dasar", link: "https://drive.google.com/file/d/1xkrbiaAa68uk12ZxOFSVCR7kMliHAyfH/view?usp=drive_link" }
  ];

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  // Logika pemotongan array berdasarkan state showAll
  const visibleCertificates = showAll ? certificatesData : certificatesData.slice(0, 8);

  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">CONTINUOUS LEARNING</span>
          <h2 className="text-4xl font-extrabold text-slate-900 flex items-center justify-center gap-3">
            Licenses & Certifications <BadgeCheck className="w-8 h-8 text-blue-600" />
          </h2>
        </div>

        {/* 4-Column Grid Bento Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCertificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-3xl p-6 flex flex-col h-full"
            >
              <div>
                <h3 className="text-[10px] font-bold text-blue-600 tracking-wider mb-2 uppercase line-clamp-1" title={cert.org}>
                  {cert.org}
                </h3>
                <p className="font-bold text-slate-800 text-sm leading-snug mb-6 line-clamp-3" title={cert.title}>
                  {cert.title}
                </p>
              </div>
              
              {/* Tombol Link di Kanan Bawah */}
              <div className="mt-auto flex justify-end">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center group transition-colors"
                >
                  View Credential 
                  <ArrowUpRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Show More / Less */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
          >
            {showAll ? 'Show Less' : 'View All Certificates'}
          </button>
        </div>

      </div>
    </section>
  );
}
