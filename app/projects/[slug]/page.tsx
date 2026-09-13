import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Wrench,
  UserCheck,
  Sparkles,
  CalendarDays,
  Briefcase,
  Globe,
  Layers,
} from "lucide-react";

// ─── Data Store ───────────────────────────────────────────────────────────────
// We merge the base data array structure with the detailed descriptive text.
type ProjectData = {
  title: string;
  badge: string;
  desc: string;
  image: string;
  repoLink: string | null;
  liveLink: string;
  liveBtnText: string;
  // Detail page specifics:
  year: string;
  role: string;
  scope: string;
  techStack: string;
  about: string;
  techLabel: string;
  techBadges: string[];
  myRole: string;
  features: string[];
};

const projectsData: Record<string, ProjectData> = {
  "bi-library": {
    badge: "WEB",
    title: "Bank Indonesia Library Management System",
    desc: "Web-based library management system for Bank Indonesia Southeast Sulawesi.",
    image: "/project/bi-library.png",
    repoLink: null,
    liveLink: "https://perpustakaanbisultra.com",
    liveBtnText: "View Website",

    year: "2026",
    role: "Fullstack Developer",
    scope: "Professional",
    techStack: "Laravel 11, FilamentPHP, Tailwind CSS, PostgreSQL, Redis",
    about: "Engineered to replace legacy manual record-keeping at Bank Indonesia Southeast Sulawesi branch library with a modular, enterprise-ready knowledge and asset portal. Features strict role-based governance, high-speed OPAC discovery, and automated audit-trail workflows.",
    techLabel: "Built on a modern modular Laravel monolith architecture paired with enterprise administration tooling.",
    techBadges: ["Laravel 11", "FilamentPHP", "Tailwind CSS", "PostgreSQL / MySQL", "Redis Queue"],
    myRole: "Served as the lead Fullstack Laravel Developer, responsible for architectural modernization, designing modular service-repository patterns, implementing FilamentPHP admin governance, and building high-concurrency circulation/fine ledger engines.",
    features: [
      "Enterprise Admin Portal via Filament/Livewire with audit logs and Role-Based Access Control (RBAC)",
      "Intelligent OPAC (Online Public Access Catalog) with metadata filtering for monetary and economic literature",
      "Automated fine calculation, overdue tracking, and digital receipt reconciliation",
      "Visitor/Guest integration synced with institutional member directory",
      "Exportable compliance and circulation reporting dashboard",
    ],
  },
  "intelligent-audit": {
    badge: "AI / WEB",
    title: "Intelligent Audit System",
    desc: "AI-based public space quality assessment using YOLO and fuzzy logic.",
    image: "/project/audit-system.png",
    repoLink: "https://github.com/cometoodev/inteligent-audit-yoloandfuzzy",
    liveLink: "#",
    liveBtnText: "View Project ↗",
    
    year: "2026",
    role: "AI Engineer & Backend Developer",
    scope: "Academic / Research",
    techStack: "Python, YOLOv11, Flask, Fuzzy Logic",
    about: "This system automates the audit of public infrastructure such as sidewalks and parks by analyzing images or video streams using YOLOv11. Detected elements are scored using a Mamdani Fuzzy Logic engine to produce a compliance index aligned with Indonesia's PUPR standards.",
    techLabel: "Built on a Python/Flask backend with YOLOv11 for real-time object detection and a custom Mamdani Fuzzy Logic module for quality scoring.",
    techBadges: ["YOLOv11", "Mamdani Fuzzy Logic", "Python", "Flask", "OpenCV", "Next.js"],
    myRole: "I led the end-to-end development — training the YOLOv11 model on a custom dataset, implementing the fuzzy inference system, building the Flask API, and integrating everything into a web dashboard for auditors.",
    features: [
      "Real-time object detection using YOLOv11",
      "Mamdani Fuzzy Logic quality scoring engine",
      "Automated compliance report generation",
      "Interactive web dashboard for audit review",
      "Geolocation tagging for audit records",
    ],
  },
  "driver-distraction": {
    badge: "AI",
    title: "Driver Distraction Detection",
    desc: "AI-based driver distraction detection using pose estimation and YOLOv11.",
    image: "/project/driver-distraction.png",
    repoLink: "https://github.com/cometoodev/poseestimation-yolov11",
    liveLink: "#",
    liveBtnText: "View Project ↗",
    
    year: "2026",
    role: "Machine Learning Engineer",
    scope: "Academic / Research",
    techStack: "Python, YOLOv11, OpenCV, Pose Estimation",
    about: "This project uses computer vision to monitor driver behavior through a camera feed. It identifies distracted states such as phone usage, eating, and head-turning using a combination of pose estimation and YOLO-based object detection, then triggers alerts when distraction is detected.",
    techLabel: "The system is built in Python, leveraging YOLOv11 for object detection and MediaPipe for pose/keypoint estimation with an OpenCV-powered processing pipeline.",
    techBadges: ["YOLOv11", "MediaPipe", "Python", "OpenCV", "Real-time Inference"],
    myRole: "I designed and implemented the full detection pipeline — from data collection and model training to building the real-time inference loop and alert system.",
    features: [
      "Real-time video stream processing",
      "Multi-class distraction detection (phone, eating, etc.)",
      "Pose keypoint analysis for head and hand position",
      "Visual and audio alert system",
      "Performance logging for analysis",
    ],
  },
  "portfolio-website": {
    badge: "WEB",
    title: "Portfolio Website",
    desc: "Personal portfolio website showcasing projects, skills, and experience.",
    image: "/project/portfolio.png",
    repoLink: "https://github.com/cometoodev/raflyahmadzainur-portfolio",
    liveLink: "#",
    liveBtnText: "View Project ↗",
    
    year: "2026",
    role: "Frontend Developer & Designer",
    scope: "Personal Project",
    techStack: "Next.js, TypeScript, TailwindCSS",
    about: "This is the very website you're viewing right now. It was designed from scratch using a 'Clean Modernism, Bento Box, and Glassmorphism' design language — prioritizing aesthetics, readability, and smooth user experience.",
    techLabel: "Built with the Next.js App Router for optimized performance, TypeScript for type safety, and TailwindCSS for utility-first styling.",
    techBadges: ["Next.js 15", "TypeScript", "TailwindCSS", "lucide-react", "Vercel"],
    myRole: "I served as the sole designer and developer — from initial wireframing and design system creation to full implementation and deployment on Vercel.",
    features: [
      "Responsive Bento Box grid layout",
      "Glassmorphism card components",
      "Smooth scroll navigation with active section tracking",
      "Dynamic project detail pages",
      "Certifications and achievements sections",
    ],
  },
  "audit-prototype": {
    badge: "UI/UX",
    title: "Intelligent Audit System Prototype",
    desc: "UI/UX prototype for an AI-based public space audit system.",
    image: "/project/audit-prototype.png",
    repoLink: "https://www.figma.com/design/I0dBGNWiYDSAkNe9cOth8O/Desain-Prototype-Sistem-Audit-Cerdas?node-id=0-1&m=dev&t=W9bUraviiFvvVAs1-1",
    liveLink: "https://www.figma.com/design/I0dBGNWiYDSAkNe9cOth8O/Desain-Prototype-Sistem-Audit-Cerdas?node-id=0-1&m=dev&t=W9bUraviiFvvVAs1-1",
    liveBtnText: "View Figma ↗",
    
    year: "2026",
    role: "UI/UX Designer",
    scope: "Academic / Research",
    techStack: "Figma, Prototyping, Design System",
    about: "Before the full system was developed, a complete interactive prototype was designed to define user flows, information architecture, and visual design language. This prototype was used as the blueprint for the final web application.",
    techLabel: "The prototype was created entirely in Figma using a custom design system with reusable components and auto-layout.",
    techBadges: ["Figma", "Auto Layout", "Component Library", "Prototype Flows", "Usability Testing"],
    myRole: "I was responsible for the full design process — user research, wireframing, high-fidelity design, interactive prototyping, and conducting usability testing sessions.",
    features: [
      "Complete interactive prototype with flows",
      "Custom Figma design system",
      "Mobile and desktop responsive designs",
      "Usability-tested with real users",
      "Annotated handoff documentation",
    ],
  },
  "digestive-app": {
    badge: "MOBILE",
    title: "Digestive Symptom Classification App",
    desc: "Android app for classifying digestive symptoms using LSTM.",
    image: "/project/digestive-app.png",
    repoLink: "https://github.com/cometoodev/Classification-LSTM-Android",
    liveLink: "#",
    liveBtnText: "View Project ↗",
    
    year: "2025",
    role: "Mobile Developer & ML Engineer",
    scope: "Academic Research",
    techStack: "Android, LSTM, TensorFlow Lite, Java",
    about: "This app allows users to input their symptoms through a guided questionnaire. The inputs are then processed by an LSTM model (compressed to TensorFlow Lite) on-device to classify the likelihood of various digestive conditions and provide health guidance.",
    techLabel: "The LSTM model was trained in Python/Keras and converted to TFLite for efficient on-device inference within the native Android app.",
    techBadges: ["Android (Java)", "LSTM", "TensorFlow Lite", "Keras", "SQLite"],
    myRole: "I built both the machine learning pipeline (data preprocessing, model training, and TFLite conversion) and the full Android application including UI, on-device inference, and local data storage.",
    features: [
      "Symptom input via guided questionnaire",
      "On-device LSTM inference with TFLite",
      "Multi-class digestive disease classification",
      "Health recommendation and guidance output",
      "Offline functionality — no internet required",
    ],
  },
  "digital-guestbook": {
    badge: "WEB",
    title: "Digital Guestbook System",
    desc: "Web-based digital guestbook for the Kendari City Regional Secretariat.",
    image: "/project/guestbook.png",
    repoLink: "https://github.com/cometoodev/bukutamusetdakotakendari",
    liveLink: "#",
    liveBtnText: "View Project ↗",

    year: "2025",
    role: "Backend Developer",
    scope: "Professional",
    techStack: "PHP Native, MySQL, Bootstrap, Twilio API",
    about: "A web-based digital guestbook application for the Kendari City Regional Secretariat, designed to digitize manual visitor logs, accelerate administrative workflows, and provide structured, real-time, and accurate institutional visitor data recapitulation.",
    techLabel: "Server environment utilizing AMPPS/Apache, native PHP backend with modular/procedural API endpoints, Bootstrap/jQuery frontend, MySQL/MariaDB database, and Twilio API messaging gateway integration.",
    techBadges: ["AMPPS / Apache", "Native PHP (API)", "HTML5 / CSS3 / JS", "MySQL / MariaDB", "Twilio API"],
    myRole: "Served as the developer responsible for implementing the directory structure (api/, assets/, config/, includes/, views/, index.php), building visitor input forms and routing logic, integrating messaging gateway notifications, and configuring search, filtering, and reporting export features.",
    features: [
      "Digital Visitor Registration: Arrival forms for institutional/private guests capturing purpose, origin institution, contact number, and visit time",
      "Notification/Gateway Integration: Supports messaging API integration (SMS/WhatsApp via Twilio) for automated visit confirmations",
      "Admin Monitoring Dashboard: Statistical summary of daily, weekly, and monthly guest volumes",
      "Data Management & Filtering: Advanced visitor search based on date, destination department, visit status, and keywords",
      "Report Export: Printing summaries and exporting visitor data to document/spreadsheet formats for administrative archiving",
    ],
  },
  "si-cantik": {
    badge: "WEB",
    title: "SI-CANTIK SIMBUNE",
    desc: "Digital village statistics and administrative records management system.",
    image: "/project/si-cantik.png",
    repoLink: "https://github.com/cometoodev/SI-CANTIK-SIMBUNE",
    liveLink: "#",
    liveBtnText: "View Project ↗",

    year: "2024",
    role: "Fullstack Developer",
    scope: "National Program (BPS)",
    techStack: "PHP Native, HTML5, CSS3, Bootstrap, MySQL, Chart.js",
    about: "A web-based information system designed to digitize civil administration recording and present statistical data visualizations for Simbune Village. This system streamlines village officials' management of letter archives, resident data, and presents transparent and accurate village demographics.",
    techLabel: "Built entirely with Native PHP without any backend framework, utilizing Bootstrap and custom CSS for responsive styling, and a structured relational database architecture running on local server environments.",
    techBadges: ["PHP Native", "HTML5 / CSS3 / JS", "Bootstrap", "Chart.js / ApexCharts", "MySQL / MariaDB"],
    myRole: "Served as the fullstack developer responsible for configuring the project directory (assets/, config/, controllers/, views/, database/, index.php), implementing demographic and administrative logic, wiring interactive charts, and building role-based access controls.",
    features: [
      "Letter & Civil Administration: Centralized management of introductory letters, domicile certificates, birth/death records, and KK/NIK registration",
      "Interactive Demographic Statistics: Visualizations based on age, gender, education level, occupation, and hamlet/RT distribution",
      "Digital Archive & Search: Quick search and real-time historical data tracking to prevent duplication and accelerate village office services",
      "Reporting & Data Export: Administrative and demographic summaries for printing or exporting for sub-district/regional reporting",
      "User Role Management: Structured access rights for Administrators, Village Officials, and Guests/Residents",
    ],
  },
};

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 font-sans">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">404</h1>
        <p className="text-slate-500 mb-8">Project not found.</p>
        <Link
          href="/#projects"
          className="px-6 py-2.5 border-2 border-slate-800 text-slate-800 rounded-full text-sm font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300"
        >
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter">
            RZ.
          </Link>
          <Link
            href="/#projects"
            className="flex items-center gap-2 px-5 py-2 border-2 border-slate-800 text-slate-800 rounded-full text-sm font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ── Hero Section (2-column) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-blue-600 font-bold tracking-wider uppercase text-xs mb-4 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
              {project.badge} • {project.year}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              {project.title}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Right: Mockup Image + CTA */}
          <div className="flex flex-col gap-4">
            <div className="bg-slate-200 rounded-3xl h-64 md:h-80 flex items-center justify-center shadow-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
              />
            </div>
            <a 
              href={project.repoLink || project.liveLink || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
            >
              {slug === 'audit-prototype' ? 'View Figma' : (slug === 'bi-library' ? 'View Website' : 'View Project on GitHub')} <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── Info Bar (4 Bento Boxes Horizontal) ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "PROJECT YEAR", value: project.year, icon: <CalendarDays className="w-5 h-5 text-blue-500" /> },
            { label: "ROLE", value: project.role, icon: <Briefcase className="w-5 h-5 text-blue-500" /> },
            { label: "SCOPE", value: project.scope, icon: <Globe className="w-5 h-5 text-blue-500" /> },
            { label: "TECH STACK", value: project.techStack, icon: <Layers className="w-5 h-5 text-blue-500" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_4px_20px_rgb(0,0,0,0.04)] rounded-3xl p-5 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
              <p className="font-bold text-slate-800 text-sm leading-snug">{item.value}</p>
            </div>
          ))}
        </div>

        {/* ── Content Grid (2x2 Bento) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

          {/* About the Project */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 rounded-2xl">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Apa itu {project.title}?</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">{project.about}</p>
          </div>

          {/* Technologies & Tools */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 rounded-2xl">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Technologies & Tools</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm mb-4">{project.techLabel}</p>
            <div className="flex flex-wrap gap-2">
              {project.techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 rounded-2xl">
                <UserCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">My Role</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">{project.myRole}</p>
          </div>

          {/* Key Features */}
          <div className="bg-white border border-slate-100 shadow-sm rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 rounded-2xl">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Key Features</h2>
            </div>
            <ul className="space-y-2.5">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Conditional GitHub CTA Footer ── */}
        {project.repoLink && (
          <div className="mt-16 text-center pb-12">
            <p className="text-sm text-slate-500 mb-4">
              Akses kode sumber lengkap dan dokumentasi proyek di {slug === 'audit-prototype' ? 'Figma' : 'GitHub'}
            </p>
            <a 
              href={project.repoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold hover:bg-slate-800 transition-colors inline-block"
            >
              {slug === 'audit-prototype' ? 'Kunjungi Figma ↗' : 'Kunjungi Repository ↗'}
            </a>
          </div>
        )}


      </div>
    </div>
  );
}
