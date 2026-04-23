import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Offer({ onNavigateToMasterclass }) {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.offer-bg-orb', { opacity: 0, scale: 0.9, force3D: true });
            gsap.set('.offer-title-anim', { y: 10, opacity: 0, force3D: true });
            gsap.set('.offer-card-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => {
                    gsap.to('.offer-bg-orb', { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', force3D: true });
                    gsap.to('.offer-title-anim', { y: 0, opacity: 1, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform' });
                    gsap.to('.offer-card-anim', { y: 0, opacity: 1, stagger: 0.07, duration: 0.65, ease: 'power2.out', force3D: true, delay: 0.08, clearProps: 'transform' });
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-40 px-4 sm:px-6 relative overflow-visible flex flex-col items-center z-10">
            {/* Ambient Background Glows */}
            <div className="offer-bg-orb absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] bg-coral/10 blur-[120px] rounded-full mix-blend-multiply pointer-events-none -z-10"></div>
            <div className="offer-bg-orb absolute bottom-0 right-[-10%] w-[60vw] h-[60vw] bg-[#F5D5D5]/40 blur-[100px] rounded-full mix-blend-multiply pointer-events-none -z-10"></div>

            <div className="w-full max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">

                {/* Premium title with frosted glass backing and glow */}
                <div className="offer-title-anim relative text-center mb-20 md:mb-28 inline-block mt-4">
                    {/* Glow behind */}
                    <div className="absolute inset-0 bg-coral/15 blur-[50px] rounded-[3rem] -z-20 scale-125"></div>
                    <div className="absolute inset-0 pill-glow-coral -z-10 transform scale-x-110 scale-y-125 md:scale-x-125 md:scale-y-150 !rounded-[3rem]"></div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-coral font-semibold leading-tight px-6 py-3 relative z-10 glow-text-coral">
                        Due percorsi. Stessi standard.
                    </h2>
                </div>

                {/* Offer Grid with uneven heights, giving extreme focus to Individuale */}
                <div className="offer-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-stretch lg:items-center">

                    {/* Masterclass Card - Left Side with premium glassmorphism */}
                    <div className="offer-card-anim lg:col-span-5 group relative glass-card-premium rounded-[2.5rem] shadow-card-premium overflow-hidden transition-all duration-700 hover:shadow-card-premium-hover flex flex-col h-full lg:min-h-[500px]">

                        <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10">
                            <div className="mb-6 flex space-x-2 items-center">
                                <span className="w-2 h-2 rounded-full bg-ink/30"></span>
                                <h3 className="font-display font-medium text-lg text-ink/70 uppercase tracking-widest">MASTERCLASS DI GRUPPO</h3>
                            </div>

                            <div className="mb-8">
                                <div className="space-y-1 font-mono text-xs md:text-sm text-ink/60 uppercase tracking-wide">
                                    <p>6 settimane · Max 6 persone</p>
                                    <p>1h/settimana</p>
                                    <p>Esercizi settimanali</p>
                                    <p>Materiali inclusi</p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-transparent via-ink/10 to-transparent my-6"></div>

                            <div className="flex-1 flex flex-col justify-center">
                                <p className="text-ink/80 font-sans leading-relaxed text-sm md:text-base italic font-medium">
                                    Un percorso strutturato su un problema specifico, in un piccolo gruppo guidato da una psicologa. Stesso metodo, stessi standard del percorso individuale. Il gruppo aggiunge una cosa: vedere altri affrontare lo stesso blocco aumenta la chiarezza. E quando gli altri si muovono e tu no, le scuse cadono.
                                </p>
                            </div>

                            <div className="mt-8 pt-4">
                                <button
                                    onClick={onNavigateToMasterclass}
                                    className="w-full py-4 text-center text-ink/90 font-sans font-semibold tracking-wide rounded-full bg-white/50 border border-white shadow-sm hover:bg-white hover:text-coral transition-colors duration-300"
                                >
                                    Chiedi più informazioni
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Percorso Individuale Card - Right Side (hero card with intense glow) */}
                    <div className="offer-card-anim lg:col-span-7 group relative glass-card-premium rounded-[3rem] shadow-[0_24px_70px_rgba(212,132,140,0.22),0_0_50px_rgba(212,132,140,0.08)] overflow-hidden transition-all duration-700 hover:shadow-[0_32px_90px_rgba(212,132,140,0.32),0_0_60px_rgba(212,132,140,0.12)] flex flex-col lg:scale-105 z-20 h-full lg:min-h-[600px]">

                        {/* Complex internal glowing gradients */}
                        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-gradient-to-bl from-[#F5D5D5]/90 via-transparent to-transparent opacity-70 rounded-full blur-[60px] mix-blend-overlay"></div>
                        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-coral/15 blur-[80px] rounded-full mix-blend-multiply pointer-events-none"></div>
                        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-coral/10 blur-[50px] rounded-full pointer-events-none"></div>

                        <div className="p-8 md:p-14 flex flex-col flex-grow relative z-10">

                            <div className="mb-6 flex space-x-3 items-center">
                                <span className="w-3 h-3 rounded-full bg-coral shadow-[0_0_15px_rgba(212,132,140,0.7),0_0_30px_rgba(212,132,140,0.4)] animate-pulse"></span>
                                <h3 className="font-display font-bold text-xl md:text-2xl text-ink uppercase tracking-widest">PERCORSO INDIVIDUALE</h3>
                            </div>

                            <div className="mb-8">
                                <div className="space-y-2 font-mono text-sm md:text-base text-ink/70 uppercase tracking-widest border-l-2 border-coral/30 pl-4 py-1">
                                    <p>Circa 12 settimane</p>
                                    <p>1:1 · Protocollo personalizzato</p>
                                    <p>Monitoraggio costante</p>
                                    <p>Supporto tra le sessioni</p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-ink/5 via-ink/10 to-transparent my-8"></div>

                            <div className="flex-1 flex flex-col justify-center mb-10">
                                <p className="text-ink text-lg md:text-xl font-serif italic leading-relaxed">
                                    Durata, struttura e investimento vengono definiti dopo una valutazione iniziale, perché ogni percorso è costruito sul <span className="text-coral font-semibold drop-shadow-sm">problema specifico.</span>
                                </p>
                            </div>

                            <div className="mt-auto">
                                <a href="https://tally.so/r/5BGPKN" target="_blank" rel="noopener noreferrer" className="relative block w-full py-5 md:py-6 px-4 md:px-6 text-center text-white bg-ink rounded-full overflow-hidden transition-all duration-500 shadow-[0_12px_30px_rgba(28,28,30,0.25)] hover:shadow-[0_20px_40px_rgba(28,28,30,0.4)] hover:-translate-y-1 group/btn">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
                                    <span className="relative z-10 block font-sans font-bold uppercase tracking-widest text-[10px] md:text-[12px]">
                                        Parla con un consulente per valutare il tuo caso
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Quale Scegliere Box (Premium Redesign) */}
                <div className="mt-28 w-full offer-card-anim relative glass-card-premium rounded-[3rem] shadow-card-premium hover:shadow-card-premium-hover transition-shadow duration-700 p-8 md:p-14 max-w-5xl mx-auto overflow-hidden">
                    {/* Glowing highlight line */}
                    <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-coral/50 to-transparent"></div>
                    <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-white/70 blur-[80px] rounded-full pointer-events-none -translate-y-1/2"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-[200px] h-[200px] bg-coral/10 blur-[60px] rounded-full pointer-events-none"></div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 relative z-10">
                        {/* Header side */}
                        <div className="lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
                            <div className="inline-flex items-center justify-center lg:justify-start gap-3 mb-6">
                                <span className="w-2 h-2 rounded-full bg-coral shadow-[0_0_10px_rgba(212,132,140,0.5)] animate-pulse"></span>
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-ink/50">Guida alla scelta</span>
                            </div>
                            <h3 className="font-display font-bold text-3xl md:text-4xl text-ink tracking-tight mb-4">
                                Quale <span className="text-coral italic font-serif">scegliere?</span>
                            </h3>
                            <p className="font-sans text-ink/60 text-sm leading-relaxed hidden lg:block">
                                Due approcci diversi strutturati sulla stessa metodica per rispondere a bisogni specifici.
                            </p>
                        </div>

                        {/* Options side */}
                        <div className="lg:w-2/3 flex flex-col gap-6">
                            {/* Masterclass Row */}
                            <div className="group relative bg-[#FAF7F5]/80 border border-white/60 hover:bg-white/90 hover:border-coral/20 rounded-[2rem] p-6 md:p-8 transition-all duration-500 shadow-sm hover:shadow-[0_8px_25px_rgba(212,132,140,0.1)]">
                                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                                    <div className="font-display font-semibold text-xl text-ink md:w-1/3 shrink-0 flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-coral/10 text-coral font-serif italic text-xl opacity-70 group-hover:opacity-100 transition-opacity">1</div>
                                        <span>Masterclass</span>
                                    </div>
                                    <p className="font-sans text-base text-ink/80 leading-relaxed md:w-2/3 mt-1 md:mt-2">
                                        Per lavorare su un problema specifico in un piccolo gruppo strutturato. 6 settimane, metodo applicabile.
                                    </p>
                                </div>
                            </div>

                            {/* Individual Row */}
                            <div className="group relative bg-white/60 border border-white/80 hover:bg-white hover:border-coral/30 rounded-[2rem] p-6 md:p-8 transition-all duration-500 shadow-sm hover:shadow-[0_12px_30px_rgba(212,132,140,0.15)]">
                                <div className="absolute inset-0 bg-gradient-to-r from-coral/0 via-coral/5 to-coral/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 relative z-10">
                                    <div className="font-display font-semibold text-xl text-ink md:w-1/3 shrink-0 flex items-center gap-4">
                                        <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-coral/30 text-coral font-serif italic text-xl shadow-[0_0_15px_rgba(212,132,140,0.2)]">
                                            <div className="absolute inset-0 bg-coral/10 rounded-full animate-ping opacity-20 group-hover:opacity-50 transition-opacity"></div>
                                            2
                                        </div>
                                        <span>Individuale</span>
                                    </div>
                                    <p className="font-sans text-base text-ink/80 leading-relaxed md:w-2/3 mt-1 md:mt-2">
                                        Per un protocollo completamente personalizzato sul tuo problema, con un lavoro 1:1 dedicato.
                                    </p>
                                </div>
                            </div>

                            {/* Fotnote */}
                            <div className="pl-6 md:pl-8 border-l-2 border-coral/20 mt-3 md:mt-4 group">
                                <p className="font-sans text-sm italic text-ink/50 group-hover:text-ink/80 transition-colors">
                                    Non è richiesta la masterclass prima del percorso individuale.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
