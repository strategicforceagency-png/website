import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
            <nav className={`transition-all duration-500 w-full max-w-[1000px] rounded-full px-6 py-3.5 flex items-center justify-between ${scrolled || mobileMenuOpen ? 'glass-panel-glow' : 'bg-transparent'}`}>

                {/* Logo Area */}
                <a href="#" className="font-display font-semibold text-xl tracking-tight text-ink flex items-center gap-2 hover:text-coral transition-colors duration-300">
                    Federica Recupito
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    <div className="flex space-x-8 text-[11px] font-mono font-bold tracking-widest uppercase text-ink/80">
                        <a href="#il-problema" className="hover:text-coral transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-coral/50 hover:after:w-full after:transition-all after:duration-300">Il problema</a>
                        <a href="#il-metodo" className="hover:text-coral transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-coral/50 hover:after:w-full after:transition-all after:duration-300">Il metodo</a>
                        <a href="#per-chi-e" className="hover:text-coral transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-coral/50 hover:after:w-full after:transition-all after:duration-300">Per chi è</a>
                        <a href="#chi-sono" className="hover:text-coral transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-coral/50 hover:after:w-full after:transition-all after:duration-300">Chi sono</a>
                    </div>
                </div>

                {/* CTA with glow */}
                <div className="hidden md:flex">
                    <a href="https://tally.so/r/5BGPKN" target="_blank" rel="noopener noreferrer" className="btn-accent btn-accent-glow text-white rounded-full px-8 py-2.5 font-sans font-bold text-sm tracking-wide">
                        Inizia
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-ink p-1 relative z-50 transition-colors hover:text-coral"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu with premium glassmorphism */}
            <div
                className={`fixed inset-0 z-40 bg-white/80 backdrop-blur-[60px] !rounded-none transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden pt-32 px-6 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}
            >
                {/* Decorative glow orbs */}
                <div className="absolute top-[20%] right-[10%] w-40 h-40 bg-coral/15 rounded-full blur-[50px] pointer-events-none"></div>
                <div className="absolute bottom-[30%] left-[5%] w-32 h-32 bg-trust/20 rounded-full blur-[40px] pointer-events-none"></div>

                <div className="flex flex-col space-y-6 text-2xl font-display font-bold text-ink items-center relative z-10">
                    <a href="#il-problema" onClick={() => setMobileMenuOpen(false)} className="hover:text-coral transition-colors duration-300">Il problema</a>
                    <a href="#il-metodo" onClick={() => setMobileMenuOpen(false)} className="hover:text-coral transition-colors duration-300">Il metodo</a>
                    <a href="#per-chi-e" onClick={() => setMobileMenuOpen(false)} className="hover:text-coral transition-colors duration-300">Per chi è</a>
                    <a href="#chi-sono" onClick={() => setMobileMenuOpen(false)} className="hover:text-coral transition-colors duration-300">Chi sono</a>
                    <a href="https://tally.so/r/5BGPKN" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="btn-accent btn-accent-glow text-white rounded-full px-8 py-4 mt-8 font-sans font-bold text-lg w-full max-w-xs text-center">
                        Inizia
                    </a>
                </div>
            </div>
        </div>
    );
}
