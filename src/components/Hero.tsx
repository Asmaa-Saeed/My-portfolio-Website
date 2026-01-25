import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm text-slate-300 font-medium">Available for new projects</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                    I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Automation Systems</span><br />
                    for Real Businesses
                </h1>

                {/* Supporting Text */}
                <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    From AI agents to smart workflows, I help companies automate operations, sales, and content to reduce manual work and scale efficiently.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]"
                    >
                        View My Projects
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-300 transition-all duration-200 bg-slate-900/50 border border-slate-700 rounded-full hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700"
                    >
                        Get In Touch
                    </a>
                </div>

                {/* Decorative Grid */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
