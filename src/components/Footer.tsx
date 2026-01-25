const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-4 md:flex md:items-center md:justify-between text-center md:text-left">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold text-white">Asmaa Saeed</h3>
                    <p className="text-sm text-slate-500">AI Automation Engineer</p>
                </div>

                <div className="text-sm text-slate-600">
                    &copy; {new Date().getFullYear()} Asmaa Saeed. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
