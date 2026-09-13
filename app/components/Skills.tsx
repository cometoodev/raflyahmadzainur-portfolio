import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="px-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Technical Expertise
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Card 1 */}
          <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:-translate-y-2 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                AI & Computer Vision
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Developing robust detection and classification models with high
                accuracy and efficient resource usage.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                YOLOv11
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                CNN EfficientNetV2
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Fuzzy Logic
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                OpenCV
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 mb-3">
                Web & Backend Dev
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Architecting scalable and secure applications with modern
                frameworks and clean code principles.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Next.js
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Laravel
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Flask
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Python
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-slate-200 rounded-2xl p-8 hover:-translate-y-2 hover:border-purple-400 hover:shadow-xl transition-all duration-300 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors duration-300 mb-3">
                Tools & Workflow
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Utilizing modern toolchains and AI-assisted workflows for rapid
                and precise development.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Git & GitHub
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Cursor
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Antigravity
              </span>
              <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-full text-sm font-medium">
                Linux
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
