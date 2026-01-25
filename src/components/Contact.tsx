import { Mail, MessageSquare, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Get In Touch</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Let's Build Something Amazing
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            Ready to automate your business with AI? Let's discuss your project.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <a
                            href="mailto:asmaasaeed.dev@gmail.com"
                            className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)] text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-3 group-hover:bg-blue-500/20 transition-colors">
                                <Mail size={20} />
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-1">Email</h3>
                            {/* <p className="text-xs text-slate-400">asmaasaeed.dev@gmail.com</p> */}
                        </a>

                        <a
                            href="https://wa.me/201127012002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.15)] text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-3 group-hover:bg-emerald-500/20 transition-colors">
                                <MessageSquare size={20} />
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-1">WhatsApp</h3>
                            {/* <p className="text-xs text-slate-400">+20 112 701 2002</p> */}
                        </a>

                        <a
                            href="https://www.linkedin.com/in/asmaa-saeed-%E2%9C%AA-20a5a8274/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.15)] text-center"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-3 group-hover:bg-blue-500/20 transition-colors">
                                <Linkedin size={20} />
                            </div>
                            <h3 className="text-sm font-semibold text-white mb-1">LinkedIn</h3>
                            {/* <p className="text-xs text-slate-400">Connect with me</p> */}
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <a
                            href="mailto:asmaasaeed.dev@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)]"
                        >
                            <Send size={18} />
                            Start a Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
