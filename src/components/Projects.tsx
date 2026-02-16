import { MapPin, Sparkles } from 'lucide-react';

interface Project {
    id: number;
    category: string;
    country: string;
    title: string;
    description: string;
    highlight: string;
    techStack: string[];
}

const projects: Project[] = [
    {
        id: 1,
        category: 'Restaurant & Hospitality',
        country: 'Algeria',
        title: 'Deltaco Multi-Agent WhatsApp Bot',
        description: 'Built a sophisticated multi-agent WhatsApp system for a restaurant supporting 4 languages (English, French, Arabic, Algerian Darija). Features specialized agents: Greeting Agent (menu delivery), Order Agent (booking with code generation), General Questions Agent (RAG-powered menu inquiries), and Complaints Agent.',
        highlight: '4-language multi-agent system',
        techStack: ['n8n', 'WhatsApp', 'Multi-Agent AI', 'RAG', 'LLM'],
    },
    {
        id: 2,
        category: 'Hotels Reservations',
        country: 'Oman',
        title: 'AI Agent for Hotel Customer Requests',
        description: 'Built an AI-powered system that receives guest messages, understands requests, routes them automatically, and stores all data in Google Sheets for hotel staff.',
        highlight: 'Fully automated guest request handling',
        techStack: ['n8n', 'AI Agents', 'Webhooks', 'Google Sheets'],
    },
    {
        id: 3,
        category: 'Content Automation',
        country: 'Saudi Arabia',
        title: 'Telegram Football News Bot',
        description: 'Developed an automated Telegram bot that fetches football news from RSS feeds every 10 minutes and publishes to a channel. Includes duplicate detection using Google Sheets to ensure each article is posted only once.',
        highlight: 'Automated news publishing with zero duplicates',
        techStack: ['n8n', 'Telegram Bot', 'RSS', 'Google Sheets'],
    },
    // {
    //     id: 4,
    //     category: 'Finance & AI',
    //     country: 'Egypt',
    //     title: 'Automated Invoice Processing System',
    //     description: 'Designed an automation that analyzes invoice images using AI, extracts structured data, stores it in Google Sheets, and archives files in Google Drive.',
    //     highlight: 'Zero manual invoice processing',
    //     techStack: ['AI', 'n8n', 'Google Drive', 'Google Sheets'],
    // },
    {
        id: 5,
        category: 'Sales & Marketing',
        country: 'Syria',
        title: 'Sales AI Automation System',
        description: 'Automated the full sales workflow from lead capture to follow-ups and reporting, reducing manual work and increasing response speed.',
        highlight: 'End-to-end sales automation',
        techStack: ['AI', 'n8n', 'CRM', 'Google Sheets'],
    },
    {
        id: 6,
        category: 'FinTech & Security',
        country: 'Saudi Arabia',
        title: 'Anti-Fraud Banking Automation', // Automated Fraud Prevention System
        description: 'Developed a secure fraud reporting automation for 30+ banks. Features a unified submission form with smart routing to specific bank contacts, duplicate IBAN detection to prevent redundancy, and automated archiving in Google Sheets.',
        highlight: 'Smart routing & duplicate prevention for 30+ banks',
        techStack: ['n8n', 'Google Sheets', 'Email Automation', 'Form Handling'],
    },
];

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="group relative flex flex-col justify-between bg-[#0B1121] border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]">

            <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-400 tracking-wide border border-blue-500/20">
                        {project.category}
                    </span>
                    <div className="flex items-center text-slate-500 text-xs font-medium gap-1.5">
                        <MapPin size={12} strokeWidth={1.5} />
                        {project.country}
                    </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Highlight */}
                {project.highlight && (
                    <div className="flex items-start gap-2 mb-6 text-xs font-medium text-emerald-400">
                        <Sparkles size={14} className="mt-0.5 shrink-0" strokeWidth={1.5} />
                        <span>{project.highlight}</span>
                    </div>
                )}
            </div>

            {/* Tech Stack */}
            <div className="relative z-10 mt-auto flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1.5 text-[10px] font-medium text-slate-300 bg-[#161f2e] rounded-md border border-slate-800/50"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 bg-slate-950 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Selected Projects
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Showcasing advanced AI automation and agentic systems dealing with real-world complexities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
