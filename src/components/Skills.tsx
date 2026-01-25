import React from 'react';
import { Bot, Workflow, Zap, Database, Code2, Link, MessageSquare, Sparkles } from 'lucide-react';

const skills = [
    { name: 'AI Agents', icon: Bot },
    { name: 'Workflow Automation', icon: Workflow },
    { name: 'n8n', icon: Zap },
    { name: 'Webhooks', icon: Link },
    { name: 'API Integrations', icon: Code2 },
    { name: 'Chatbots', icon: MessageSquare },
    { name: 'CRM Automation', icon: Database },
    // { name: 'Google Workspace', icon: Database },
    // { name: 'whatsapp Automation', icon:  },
    { name: 'RAG Systems', icon: Sparkles },
];

const Skills = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Tech Stack</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Core Capabilities
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Specialized tools and technologies I use to build intelligent automation systems
                        </p>
                    </div>

                    {/* Skills badges - flowing layout */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)]"
                            >
                                <skill.icon className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                                <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
