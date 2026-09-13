import React from "react";

export default function Achievements() {
  const academicData = [
    {
      title: "Graduated with High Distinction (Cum Laude, GPA: 3.86)",
      subtitle: "Universitas Halu Oleo, 2026",
      description: "Graduated with highest honors from Universitas Halu Oleo, demonstrating consistent academic excellence and dedication.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      )
    },
    {
      title: "Thesis Excellence",
      subtitle: "2026",
      description: "Engineered 'SistemAuditCerdas', a web application utilizing YOLOv11 and Fuzzy Logic for infrastructure evaluation based on PUPR standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      )
    }
  ];

  const publicationsData = [
    {
      title: "Coffee Bean Defect Classification",
      subtitle: "July 2026",
      description: "Research documentation integrating YOLOv11 for detection and EfficientNetV2 for classification via a Flask backend.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-emerald-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      )
    }
  ];

  const competitionsData = [
    {
      title: "National Web Development Hackathon",
      subtitle: "2025",
      description: "Developed a modern, responsive platform addressing local community needs within 48 hours.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.29 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>
      )
    },
    {
      title: "AI Innovation Challenge",
      subtitle: "2024",
      description: "Built a predictive model to forecast traffic patterns using deep learning techniques.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.866 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
      )
    }
  ];

  // @ts-ignore (Adding a small comment to prevent unused warnings if item is strictly typed, but we use explicit type any)
  const Card = ({ item }: { item: any }) => (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 rounded-bl-full transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors shrink-0 border border-slate-100">
          {item.icon}
        </div>
        <div className="pt-1">
          <h4 className="font-bold text-slate-800 text-lg leading-snug group-hover:text-blue-600 transition-colors">
            {item.title}
          </h4>
          <span className="text-slate-500 text-xs font-medium tracking-wide uppercase mt-1 block">
            {item.subtitle}
          </span>
        </div>
      </div>
      
      <div className="relative z-10 flex-1">
        <p className="text-slate-600 leading-relaxed text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="achievements" className="px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Achievements
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Content Vertically Stacked by Category */}
        <div className="space-y-16">
          
          {/* Academic Excellence Section */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 shrink-0">Academic Excellence</h3>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicData.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Publications Section */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 shrink-0">Publications</h3>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            {/* If there's only 1 publication, md:grid-cols-2 keeps it from stretching too wide on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publicationsData.map((item, idx) => (
                <Card key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Competitions Section */}
          <div>
            <div className="flex items-center gap-6 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 shrink-0">Competitions</h3>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
