import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="glass-panel bg-white/60 pt-20 pb-10 px-6 sm:px-12 border-t-[2px] border-white relative overflow-hidden mt-12 mb-6 rounded-[3rem] md:rounded-[4rem] max-w-[1400px] mx-auto shadow-glass-card z-10 w-[calc(100%-2rem)]">

            {/* Delicate background blur */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/40 rounded-[100%] blur-[80px] pointer-events-none -z-10"></div>

            <div className="max-w-[1280px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20 text-ink">

                    <div className="md:col-span-5">
                        <a href="#" className="font-display font-medium text-2xl text-ink block mb-4 tracking-tight">
                            Federica Recupito
                        </a>
                        <p className="font-sans text-ink/80 text-base max-w-[300px] leading-relaxed font-medium">
                            Percorsi psicologici strutturati, a tempo definito, con indicatori di cambiamento osservabili.
                        </p>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/50 mb-6">Naviga</h4>
                        <ul className="space-y-4 font-sans text-sm text-ink/90 font-medium">
                            <li><a href="#il-problema" className="hover:text-coral transition-colors">Il problema</a></li>
                            <li><a href="#il-metodo" className="hover:text-coral transition-colors">Il metodo</a></li>
                            <li><a href="#per-chi-e" className="hover:text-coral transition-colors">Per chi è</a></li>
                            <li><a href="#chi-sono" className="hover:text-coral transition-colors">Chi sono</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/50 mb-6">Contatti</h4>
                        <ul className="space-y-4 font-sans text-sm text-ink/90 font-medium">
                            <li><a href="mailto:info@federicarecupito.it" className="hover:text-coral transition-colors">info@federicarecupito.it</a></li>
                            <li className="pt-4 flex items-center gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-coral hover:text-white transition-all text-ink border border-white shadow-sm hover:shadow-md">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center hover:bg-coral hover:text-white transition-all text-ink border border-white shadow-sm hover:shadow-md">
                                    <Linkedin size={18} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/50 mb-6">Legal</h4>
                        <ul className="space-y-4 font-sans text-sm text-ink/90 font-medium">
                            <li><a href="#" className="hover:text-coral transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-coral transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-coral transition-colors">Termini e Condizioni</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-sans text-ink/60 font-medium">
                    <p>© {new Date().getFullYear()} Federica Recupito. Tutti i diritti riservati.</p>
                    <p className="text-center md:text-right">
                        Psicologa iscritta all'Albo<br className="md:hidden" /> — Ordine degli Psicologi della Campania
                    </p>
                </div>
            </div>
        </footer>
    );
}
