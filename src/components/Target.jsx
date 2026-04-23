import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Target() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.target-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.target-anim', {
                    y: 0, opacity: 1, stagger: 0.07, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="per-chi-e" ref={sectionRef} className="py-24 md:py-32 px-4 flex flex-col items-center relative z-10 w-full">
            <div className="max-w-[1200px] w-full mx-auto">

                {/* Elaborate Editorial Header */}
                <div className="target-anim w-full max-w-4xl mx-auto mb-20 md:mb-28 relative">
                    {/* Decorative ambient light behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-white/40 blur-[80px] rounded-full pointer-events-none -z-10"></div>

                    <div className="flex flex-col items-center text-center">
                        <div className="mb-8 inline-flex items-center gap-3 pill-glow-coral px-5 py-2.5">
                            <span className="w-2 h-2 rounded-full bg-coral animate-pulse shadow-[0_0_10px_rgba(212,132,140,0.5)]"></span>
                            <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink/60">Posizionamento</span>
                        </div>

                        <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl text-ink font-semibold leading-[1.1] mb-10 tracking-tight">
                            Questo approccio <br className="md:hidden" /><span className="text-coral relative inline-block glow-text-coral">
                                non è per tutti.
                                <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-4 text-coral/40" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h2>

                        <div className="w-px h-16 bg-gradient-to-b from-coral/40 to-transparent mx-auto mb-10"></div>

                        <div className="space-y-6 max-w-2xl mx-auto relative z-10 px-4">
                            <p className="font-display font-medium text-ink/70 text-lg md:text-xl leading-relaxed uppercase tracking-wide">
                                Non lo dico per marketing. Lo dico perché è vero.
                            </p>
                            <p className="font-sans text-ink/80 text-base md:text-lg font-light leading-relaxed">
                                Richiede impegno attivo. Richiede lavoro fuori dalle sessioni. Richiede la disponibilità a mettere in discussione il modo in cui hai gestito il problema finora.
                            </p>
                            <div className="p-6 md:p-8 mt-6 glass-panel-glow rounded-3xl">
                                <p className="font-serif italic text-coral/90 text-xl md:text-2xl font-semibold leading-relaxed glow-text-coral">
                                    "Se cerchi qualcuno che ti dica che va tutto bene così com'è, non sono io."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Premium Grid layout for 'È per te' and 'Non è per te' */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch relative z-20">

                    {/* È per te - Hero Card with premium glassmorphism */}
                    <div className="target-anim group relative glass-card-premium p-10 md:p-14 rounded-[3rem] shadow-card-premium hover:shadow-card-premium-hover transition-all duration-700 flex flex-col h-full overflow-hidden">
                        {/* Multi-layer internal glows */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-coral/15 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-all duration-700 group-hover:scale-150 group-hover:bg-coral/20"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-coral/10 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-coral/50 via-coral to-coral/50"></div>

                        <div className="mb-10 relative z-10">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-coral/10 mb-6 text-coral">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                            </div>
                            <h3 className="font-serif italic font-semibold text-4xl lg:text-5xl text-ink">È per te se:</h3>
                        </div>

                        <ul className="space-y-6 relative z-10 flex-1">
                            <li className="flex gap-5 items-start">
                                <span className="text-coral mt-1.5 text-xs opacity-70">✦</span>
                                <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Hai un problema specifico e vuoi affrontarlo con metodo
                                </p>
                            </li>
                            <li className="flex gap-5 items-start">
                                <span className="text-coral mt-1.5 text-xs opacity-70">✦</span>
                                <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Sei disposto a mettere in discussione come hai gestito le cose fino a oggi
                                </p>
                            </li>
                            <li className="flex gap-5 items-start">
                                <span className="text-coral mt-1.5 text-xs opacity-70">✦</span>
                                <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Accetti che parte della soluzione dipenda da cosa fai tu, tra una sessione e l'altra
                                </p>
                            </li>
                            <li className="flex gap-5 items-start">
                                <span className="text-coral mt-1.5 text-xs opacity-70">✦</span>
                                <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Preferisci la chiarezza alla rassicurazione
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Non è per te - Subtle glassmorphism Card */}
                    <div className="target-anim group relative bg-white/35 backdrop-blur-[40px] p-10 md:p-14 rounded-[3rem] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:bg-white/50 transition-all duration-700 flex flex-col h-full lg:mt-12 overflow-hidden">

                        {/* Subtle internal glow */}
                        <div className="absolute top-[50%] right-[20%] w-40 h-40 bg-trust/10 rounded-full blur-[50px] pointer-events-none"></div>

                        <div className="mb-10 relative z-10">
                            <div className="w-14 h-14 bg-white/60 rounded-full flex items-center justify-center shadow-sm border border-white mb-6 text-ink/40">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </div>
                            <h3 className="font-serif italic font-medium text-3xl lg:text-4xl text-ink/70">Potrebbe non essere per te se:</h3>
                        </div>

                        <ul className="space-y-6 flex-1 relative z-10">
                            <li className="flex gap-5 items-start opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-ink/30 mt-1.5 text-xs">✧</span>
                                <p className="font-sans text-ink/70 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Cerchi principalmente uno spazio di ascolto senza un obiettivo preciso
                                </p>
                            </li>
                            <li className="flex gap-5 items-start opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-ink/30 mt-1.5 text-xs">✧</span>
                                <p className="font-sans text-ink/70 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Preferisci non avere indicatori o monitoraggio
                                </p>
                            </li>
                            <li className="flex gap-5 items-start opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-ink/30 mt-1.5 text-xs">✧</span>
                                <p className="font-sans text-ink/70 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Non hai tempo per il lavoro autonomo tra le sessioni
                                </p>
                            </li>
                            <li className="flex gap-5 items-start opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-ink/30 mt-1.5 text-xs">✧</span>
                                <p className="font-sans text-ink/70 font-medium leading-relaxed text-lg lg:text-xl text-pretty">
                                    Hai bisogno di un intervento clinico per problematiche gravi — in quel caso ti indico professionisti più adatti
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
}
