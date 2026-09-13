import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        {/* CTA Area */}
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-slate-500 text-sm uppercase tracking-widest font-bold mb-4">
            What&apos;s Next?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Ready to build something together?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-10 leading-relaxed text-lg">
            Whether you have a question about Computer Vision integrations, need
            a robust web application, or just want to say hi, my inbox is always
            open.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-700"
          >
            SEND AN EMAIL
          </a>
        </div>

        {/* Footer Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            © 2026 Rafly Ahmad Zainur. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
