import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Smart Infrastructure Audit System",
      tags: ["WEB APP", "AI VISION"],
      description:
        "Integrated YOLOv11 and Fuzzy Logic to evaluate sidewalk infrastructure compliance based on PUPR standards.",
    },
    {
      title: "Coffee Bean Defect Classification",
      tags: ["MACHINE LEARNING"],
      description:
        "Advanced defect detection system combining YOLOv11 for localization and CNN EfficientNetV2 for classification via a Flask backend.",
    },
    {
      title: "Digital Guest Book System",
      tags: ["WEB APP"],
      description:
        "An operational web application developed for Sekretariat Daerah Kota Kendari to modernize visitor management and data logging.",
    },
  ];

  return (
    <section id="projects" className="px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <span className="text-gray-500 font-bold tracking-widest text-sm uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Documented Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 w-full h-full group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-blue-700 bg-blue-50 px-2 py-1 text-[10px] tracking-widest font-bold rounded uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
