import React from "react";

export default function Certificates() {
  const certificates = [
    {
      issuer: "Dicoding Indonesia",
      title: "Backend Developer Expert",
      date: "Issued 2025",
    },
    {
      issuer: "DeepLearning.AI",
      title: "Deep Learning & Computer Vision Specialization",
      date: "Issued 2025",
    },
    {
      issuer: "BNSP",
      title: "Certified Web Developer",
      date: "Issued 2024",
    },
  ];

  return (
    <section id="certificates" className="px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gray-500 font-bold tracking-widest text-sm uppercase">
            Continuous Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
            Licenses & Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              <div className="text-gray-500 tracking-widest text-xs font-semibold mb-2 uppercase">
                {cert.issuer}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex-1">
                {cert.title}
              </h3>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-gray-400 text-sm">{cert.date}</span>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                >
                  View Credential ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
