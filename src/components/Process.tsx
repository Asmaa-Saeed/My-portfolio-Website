import { ArrowRight, Users, FileText, GitBranch, Code, Rocket } from 'lucide-react';

const steps = [
    {
        number: '01',
        title: 'Meeting',
        desc: 'Understanding your business needs and automation goals.',
        icon: Users
    },
    {
        number: '02',
        title: 'Planning',
        desc: 'Creating a detailed roadmap and timeline for implementation.',
        icon: FileText
    },
    {
        number: '03',
        title: 'Design',
        desc: 'Mapping out the workflow and system architecture.',
        icon: GitBranch
    },
    {
        number: '04',
        title: 'Building & Testing',
        desc: 'Developing the automation and rigorous quality testing.',
        icon: Code
    },
    {
        number: '05',
        title: 'Launch',
        desc: 'Deploying the system and ensuring smooth operation.',
        icon: Rocket
    },
];

const Process = () => {
    return (
        <section id="process" className="py-24 bg-[#020617] relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Work Process
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        From chaos to streamlined automation in 5 steps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Arrow (Desktop only, not on last item) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 z-20 text-slate-700 group-hover:text-blue-500/50 transition-colors duration-300">
                                    <ArrowRight size={20} />
                                </div>
                            )}

                            {/* Card */}
                            <div className="h-full p-6 bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-slate-900 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] flex flex-col items-center text-center relative overflow-hidden">

                                {/* Step Number Badge */}
                                <div className="absolute top-4 right-4 text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded border border-slate-700 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="relative z-10 mb-6 p-4 rounded-full bg-slate-950 border border-slate-800 text-blue-500 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-lg mt-4">
                                    <step.icon size={24} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
