import React from "react";

export default function Education() {
  return (
    <section id="education" className="px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-blue-600 text-sm uppercase font-bold tracking-wider mb-2 block">
            BACKGROUND
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 flex items-center gap-3">
            Education
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Academic Background */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              🎓 Academic Background
            </h3>

            {/* Card 1: UHO */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-3xl p-6 md:p-8 flex flex-col gap-4 mb-6 transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="relative w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 shrink-0 overflow-hidden">
                  <svg className="w-8 h-8 text-slate-200 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <img src="/education/uho.png" alt="UHO" className="w-10 h-10 object-contain relative z-10" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-blue-50 text-blue-600 font-bold text-xs px-3 py-1 rounded-full">Kendari, ID</span>
                  <span className="text-slate-500 font-medium text-xs">Graduated 2026</span>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="font-bold text-xl text-slate-900">Bachelor of Engineering in Informatics</h4>
                <p className="text-blue-600 font-medium">Halu Oleo University</p>
              </div>
              <p className="text-slate-600 text-sm">
                Cumulative GPA: <span className="font-bold text-slate-900">3.86/4.0 (Magna Cum Laude)</span>
              </p>
              <p className="text-sm text-slate-500 leading-relaxed my-3">
                Focus on Artificial Intelligence, Software Engineering, and networking, while gaining practical knowledge in designing and developing high-quality, scalable software solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Data Analyst", "AI", "Web & Android Dev", "UI/UX", "Algorithms", "OOP", "Software Eng", "Database"].map(course => (
                  <span key={course} className="text-xs bg-slate-100/80 text-slate-600 rounded-full px-3 py-1 font-medium border border-slate-200/50">
                    {course}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: SMA */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-3xl p-6 md:p-8 flex flex-col gap-4 mb-6 transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="relative w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 shrink-0 overflow-hidden">
                  <svg className="w-8 h-8 text-slate-200 absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <img src="/education/smansakdi.png" alt="SMAN 1 Kendari" className="w-10 h-10 object-contain relative z-10" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="bg-slate-100 text-slate-600 font-bold text-xs px-3 py-1 rounded-full">Kendari, ID</span>
                  <span className="text-slate-500 font-medium text-xs">Graduated 2022</span>
                </div>
              </div>
              <div className="mt-2">
                <h4 className="font-bold text-xl text-slate-900">Science Major (Mathematics & Natural Sciences)</h4>
                <p className="text-slate-600 font-medium">Kendari 1 State Senior High School</p>
              </div>
              <p className="text-slate-600 text-sm">
                Final Grade: <span className="font-bold text-slate-900">89.61/100</span>
              </p>
              <p className="text-sm text-slate-500 leading-relaxed my-3">
                Active in various organizations, competitions, and activities. Notable achievements include a national level gold medal in mathematics and a scientific paper recognized at the Kendari city level.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Mathematics", "Analytical Thinking", "Logical Reasoning", "Basic Science"].map(focus => (
                  <span key={focus} className="text-xs bg-slate-100/80 text-slate-600 rounded-full px-3 py-1 font-medium border border-slate-200/50">
                    {focus}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Milestones & Achievements */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              🚀 Milestones
            </h3>

            {/* Card 1: Jurnal */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-3xl p-6 md:p-8 flex flex-col gap-4 mb-6 transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl text-slate-900 leading-tight pr-4">Scientific Journal Publications</h4>
                <span className="text-slate-500 font-medium text-xs shrink-0 bg-white/50 px-3 py-1 rounded-full border border-slate-100">Apr 2026</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Published undergraduate thesis into two academic journals:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <a 
                  href="https://www.scimagojr.com/journalsearch.php?q=21100868216&tip=sid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-indigo-50/50 hover:bg-indigo-100 border border-indigo-100 text-indigo-700 p-3 rounded-2xl transition-all duration-300 shadow-sm hover:shadow"
                >
                  <span className="bg-indigo-600 text-white p-2 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">EASR Journal</span>
                    <span className="text-xs opacity-80 mt-0.5">Scopus Q3 - Under Review</span>
                  </div>
                </a>
                <a 
                  href="https://ejournal.catursakti.ac.id/index.php/simtek/article/view/1755" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-blue-50/50 hover:bg-blue-100 border border-blue-100 text-blue-700 p-3 rounded-2xl transition-all duration-300 shadow-sm hover:shadow"
                >
                  <span className="bg-blue-600 text-white p-2 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm">SIMTEK Journal</span>
                    <span className="text-xs opacity-80 mt-0.5">Sinta 4</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Card 2: Scholarship */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-3xl p-6 md:p-8 flex flex-col gap-4 mb-6 transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl text-slate-900 leading-tight pr-4">Sultra Cerdas 2026 Scholarship Awardee</h4>
                <span className="text-slate-500 font-medium text-xs shrink-0 bg-white/50 px-3 py-1 rounded-full border border-slate-100">Dec 2025</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Awarded educational funding from the Southeast Sulawesi Provincial Government in collaboration with the ASR Asmar Abadi Foundation, granted to students with outstanding academic achievements.
              </p>
            </div>

            {/* Card 3: Asdos */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-3xl p-6 md:p-8 flex flex-col gap-4 mb-6 transition-transform hover:-translate-y-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-xl text-slate-900 leading-tight pr-4">Machine Learning Teaching Assistant</h4>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="bg-blue-50 text-blue-600 font-bold text-xs px-3 py-1 rounded-full text-center">Nov 2025 - Jan 2026<br/><span className="font-medium opacity-80">(3 mos)</span></span>
                </div>
              </div>
              <p className="text-blue-600 font-medium text-sm">UHO Computer Science & AI Lab | Kendari, ID</p>
              <p className="text-sm text-slate-500 leading-relaxed mt-3">
                Guided student groups during Machine Learning practical sessions, assisting with programming, dataset processing, and model implementation while fostering technical skills, data analysis, teamwork, and communication.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
