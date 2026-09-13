import React from "react";
import { Trophy, GraduationCap, Award, BookOpen, FileText, Monitor, Target, Medal } from "lucide-react";

export default function Achievements() {
  const academicData = [
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      date: "Aug 2026",
      title: "Graduated with High Distinction",
      subtitle: "Universitas Halu Oleo",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      date: "Dec 2025",
      title: "Sultra Cerdas 2026 Scholarship Awardee",
      subtitle: "Southeast Sulawesi Provincial Govt & ASR Foundation",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      date: "Nov 2025 - Jan 2026 (3 mos)",
      title: "Machine Learning Teaching Assistant",
      subtitle: "UHO Computer Science & AI Lab",
    }
  ];

  const publicationsData = [
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      date: "Jul 2026",
      title: "An Intelligent Audit System Using YOLOv11 and Mamdani Fuzzy Logic for Public Space Quality Evaluation in Kendari City",
      subtitle: "Kendari City Public Space Evaluation",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      date: "Apr 2026",
      title: "Implementation of Mamdani Fuzzy Logic in Determining the Index and Optimizing the Quality of Green Open Spaces (Case Study: MTQ Area)",
      subtitle: "MTQ Area Case Study",
    },
    {
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      date: "Nov 2025",
      title: "Design of a Website-Based Digital Guestbook Information System Case Study: Organization and Governance Division, Regional Secretariat",
      subtitle: "Regional Secretariat",
    }
  ];

  const competitionsData = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      date: "Sep 2025",
      title: "Participants in the 2025 FORKESTRA Competition",
      subtitle: "Bank of Indonesia, Southeast Sulawesi",
    },
    {
      icon: <Trophy className="w-6 h-6 text-blue-600" />,
      date: "Feb 2025",
      title: "BPS Top 25 National Facilitators for Desa Cantik Program 2024",
      subtitle: "National Science Olympiad Training | Jakarta, ID",
    },
    {
      icon: <Medal className="w-6 h-6 text-amber-500" />,
      date: "Nov 2020",
      title: "Gold Medalist National Science Hero Olympiad in Mathematics",
      subtitle: "National Science Olympiad Training | Medan, ID",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      date: "Oct 2019",
      title: "3rd Place in the Gebyar Bahasa Scientific Writing Competition",
      subtitle: "FKIP, Halu Oleo University | Kendari, ID",
    }
  ];

  // @ts-ignore
  const Card = ({ item }: { item: any }) => (
    <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-md transition-all duration-300 rounded-3xl p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 shrink-0">
          {item.icon}
        </div>
        <span className="text-slate-500 font-medium text-xs bg-white/50 px-3 py-1 rounded-full border border-slate-100 shrink-0 text-right ml-4">
          {item.date}
        </span>
      </div>
      <h4 className="font-bold text-slate-800 text-base leading-tight mb-2 flex-1">
        {item.title}
      </h4>
      <span className="text-xs font-semibold text-blue-600 mt-2 uppercase tracking-wider block">
        {item.subtitle}
      </span>
    </div>
  );

  return (
    <section id="achievements" className="px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Header */}
        <div className="mb-12 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2">RECOGNITION</span>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-extrabold text-slate-900">
              Achievements
            </h2>
            <Trophy className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Content Vertically Stacked by Category */}
        <div className="space-y-16">
          
          {/* Academic Excellence Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Academic Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicData.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Publications Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Publications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicationsData.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Competitions Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-600" />
              Competitions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitionsData.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
