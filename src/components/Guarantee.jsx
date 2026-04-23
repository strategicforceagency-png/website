import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Guarantee() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.guarantee-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.guarantee-anim', {
                    y: 0, opacity: 1, stagger: 0.055, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-4 relative flex justify-center w-full z-10">
            <div className="max-w-5xl w-full mx-auto relative group">

                {/* Multi-layer glow behind the card */}
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 bottom-4 bg-coral/20 rounded-[4rem] blur-[80px] pointer-events-none group-hover:bg-coral/25 transition-all duration-700"></div>
                <div className="absolute inset-x-16 top-1/2 -translate-y-1/2 bottom-8 bg-coral/30 rounded-[3rem] blur-[40px] pointer-events-none group-hover:bg-coral/35 transition-all duration-500"></div>

                <div className="guarantee-anim relative glass-card-premium p-12 md:p-20 flex flex-col items-center shadow-card-premium hover:shadow-card-premium-hover transition-all duration-700 rounded-[4rem] overflow-hidden">

                    {/* Internal decorative glows */}
                    <div className="absolute top-0 left-[20%] w-60 h-60 bg-coral/10 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-0 right-[20%] w-48 h-48 bg-trust/10 rounded-full blur-[60px] pointer-events-none"></div>

                    {/* Badge with glow */}
                    <div className="relative z-10 inline-flex items-center gap-2 px-6 py-2.5 rounded-full pill-glow-coral text-coral text-[10px] font-mono tracking-widest font-bold uppercase mb-10 text-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral shadow-[0_0_8px_rgba(212,132,140,0.5)] animate-pulse"></span>
                        Due garanzie concrete
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-16 relative z-10">

                        <div className="flex flex-col gap-4 p-6 rounded-[1.5rem] bg-white/30 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-[0_8px_24px_rgba(212,132,140,0.1)] transition-shadow duration-500">
                            <h3 className="font-display font-bold text-2xl text-ink">Garanzia di Fit</h3>
                            <p className="font-sans text-ink/80 text-lg font-medium leading-relaxed">
                                Se dopo le prime sessioni senti che l'approccio non è adatto a te, paghi solo le sessioni svolte. Non ti chiedo di fidarti a scatola chiusa.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 p-6 rounded-[1.5rem] bg-white/30 backdrop-blur-md border border-white/60 shadow-sm hover:shadow-[0_8px_24px_rgba(212,132,140,0.1)] transition-shadow duration-500">
                            <h3 className="font-display font-bold text-2xl text-ink">Garanzia Metodo & Responsabilità</h3>
                            <p className="font-sans text-ink/80 text-lg font-medium leading-relaxed">
                                Se arrivi a fine percorso rispettando i criteri di partecipazione — presenze, esercizi, lavoro tra le sessioni — e tramite gli indicatori concordati all'inizio risulta che gli obiettivi non sono stati raggiunti, ti rimborso l'intero investimento. <strong className="text-ink">Al 100%.</strong>
                            </p>
                        </div>

                    </div>

                    <div className="text-center max-w-3xl glass-panel-glow p-8 md:p-10 rounded-[2.5rem] relative z-10">
                        <p className="text-lg md:text-xl font-sans text-ink/80 font-medium leading-relaxed mb-6">
                            Non prometto guarigioni. Non prometto che il problema sparirà. Non prometto risultati certi.
                        </p>
                        <p className="text-lg md:text-xl font-sans text-ink/80 font-bold leading-relaxed mb-6">
                            Prometto una cosa molto concreta: trasparenza totale sull'andamento del percorso. Se funziona, lo vedi. Se non funziona, lo sappiamo entrambi.
                        </p>
                        <p className="font-serif italic text-2xl text-coral font-medium glow-text-coral">
                            E mi assumo la responsabilità del metodo che utilizzo.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
