import React from 'react';
import { Target, Globe, Briefcase, Cpu } from 'lucide-react';

const stats = [
    {
        icon: Target,
        value: "7+",
        label: "Automation Projects",
        desc: "Real-world AI & workflow systems delivered"
    },
    {
        icon: Briefcase,
        value: "5+",
        label: "Industries Served",
        desc: "Hotels, restaurants, real estate, sales, content"
    },
    {
        icon: Globe,
        value: "3+",
        label: "Countries",
        desc: "projects delivered globally"
    },
    {
        icon: Cpu,
        value: "100%",
        label: "Custom Solutions",
        desc: "Fully tailored automations, no templates"
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-950 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">About Me</span>
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        I’m Asmaa Saeed, an AI Automation Engineer focused on building practical AI systems that deliver real business results.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2 hover:bg-slate-900 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm font-semibold text-blue-400 mb-2">{stat.label}</div>
                            <div className="text-sm text-slate-500 leading-snug">{stat.desc}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
