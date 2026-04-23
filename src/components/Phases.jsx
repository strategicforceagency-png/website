import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Phases() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.phase-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.phase-anim', {
                    y: 0, opacity: 1, stagger: 0.055, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 md:py-32 px-4 relative flex flex-col items-center w-full z-10">

            <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col items-center" ref={sectionRef}>

                <div className="phase-anim pill-glow-coral px-6 py-2.5 inline-flex items-center gap-2 text-coral text-[10px] font-mono tracking-widest uppercase mb-10 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral shadow-[0_0_8px_rgba(212,132,140,0.5)] animate-pulse"></span>
                    Il Processo
                </div>

                <h2 className="phase-anim text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-display font-semibold text-ink mb-6 tracking-tight leading-[1] text-center">
                    4 fasi.<br />
                    <span className="text-coral italic font-serif font-normal glow-text-coral">Chiare dall'inizio.</span>
                </h2>

                <p className="phase-anim text-lg md:text-xl text-ink/80 font-sans font-medium leading-relaxed mb-6 max-w-2xl text-center">
                    Non c'è niente di vago. Sai cosa succede, quando, e perché.
                </p>

                <div className="phase-anim w-full flex justify-center mb-20 text-center">
                    <span className="pill-glow font-mono text-[11px] font-bold uppercase tracking-widest px-6 py-3 text-ink/80">
                        Durata totale indicativa: 10-16 settimane.
                    </span>
                </div>

                {/* Timeline Centrale Glass */}
                <div className="w-full relative max-w-4xl mx-auto">

                    {/* Vertical Line Desktop/Mobile with glow */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-gradient-to-b from-white via-white/80 to-transparent z-0 shadow-[0_0_20px_rgba(255,255,255,0.9),0_0_40px_rgba(212,132,140,0.1)]"></div>

                    <div className="flex flex-col gap-12 md:gap-20 relative z-10">

                        {/* Phase 1 */}
                        <div className="phase-anim flex flex-col md:flex-row items-center w-full relative">
                            <div className="hidden md:flex w-1/2 justify-end pr-16 text-right">
                                <div className="glass-card-premium p-8 rounded-[2rem] shadow-card-premium max-w-sm ml-auto relative overflow-hidden group hover:-translate-y-2 hover:shadow-card-premium-hover transition-all duration-500">
                                    <span className="font-mono text-[10px] font-bold bg-white text-ink/70 px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-ink/5 shadow-sm">1-2 SESSIONI</span>
                                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-3 relative z-10 uppercase tracking-wide">Definizione</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base relative z-10">
                                        Circoscriviamo il problema. Fissiamo l'obiettivo. Concordiamo gli indicatori con cui misureremo i progressi. Qui decidiamo insieme se ha senso lavorare insieme — e se no, te lo dico.
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white backdrop-blur-md border-[3px] border-white rounded-full flex flex-col items-center justify-center font-display font-bold text-xl text-coral shadow-[0_8px_24px_rgba(212,132,140,0.15),0_0_30px_rgba(255,255,255,0.8)] z-20">1</div>

                            {/* Layout Mobile */}
                            <div className="md:hidden w-full pl-24 pr-4">
                                <div className="glass-card-premium p-8 rounded-[2rem] shadow-card-premium">
                                    <span className="font-mono text-[10px] font-bold bg-white text-ink/70 px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-ink/5 shadow-sm">1-2 SESSIONI</span>
                                    <h3 className="font-display font-bold text-2xl text-ink mb-3 uppercase tracking-wide">Definizione</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base">
                                        Circoscriviamo il problema. Fissiamo l'obiettivo. Concordiamo gli indicatori con cui misureremo i progressi. Qui decidiamo insieme se ha senso lavorare insieme — e se no, te lo dico.
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block w-1/2"></div>
                        </div>

                        {/* Phase 2 */}
                        <div className="phase-anim flex flex-col md:flex-row items-center w-full relative">
                            <div className="hidden md:block w-1/2"></div>

                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white backdrop-blur-md border-[3px] border-white rounded-full flex flex-col items-center justify-center font-display font-bold text-xl text-coral shadow-[0_8px_24px_rgba(212,132,140,0.15),0_0_30px_rgba(255,255,255,0.8)] z-20">2</div>

                            <div className="hidden md:flex w-1/2 justify-start pl-16 text-left">
                                <div className="glass-card-premium p-8 rounded-[2rem] shadow-card-premium max-w-sm hover:-translate-y-2 hover:shadow-card-premium-hover transition-all duration-500 relative overflow-hidden">
                                    <span className="font-mono text-[10px] font-bold bg-white text-ink/70 px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-ink/5 shadow-sm">VARIABILE, TIP. 8-10 SESSIONI</span>
                                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-3 relative z-10 uppercase tracking-wide">Intervento</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base relative z-10">
                                        Lavoriamo con un protocollo strutturato. Ogni sessione ha un obiettivo operativo. Tra un incontro e l'altro c'è lavoro da fare. Non è facoltativo.
                                    </p>
                                </div>
                            </div>

                            {/* Layout Mobile */}
                            <div className="md:hidden w-full pl-24 pr-4">
                                <div className="glass-card-premium p-8 rounded-[2rem] shadow-card-premium">
                                    <span className="font-mono text-[10px] font-bold bg-white text-ink/70 px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-ink/5 shadow-sm">VARIABILE, TIP. 8-10 SESSIONI</span>
                                    <h3 className="font-display font-bold text-2xl text-ink mb-3 uppercase tracking-wide">Intervento</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base">
                                        Lavoriamo con un protocollo strutturato. Ogni sessione ha un obiettivo operativo. Tra un incontro e l'altro c'è lavoro da fare. Non è facoltativo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="phase-anim flex flex-col md:flex-row items-center w-full relative">
                            <div className="hidden md:flex w-1/2 justify-end pr-16 text-right">
                                <div className="glass-card-premium p-8 rounded-[2rem] shadow-card-premium max-w-sm ml-auto hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
                                    <span className="font-mono text-[10px] font-bold bg-white text-ink/70 px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-ink/5 shadow-sm">1-2 SESSIONI</span>
                                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-3 relative z-10 uppercase tracking-wide">Verifica</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base relative z-10">
                                        Confrontiamo i risultati con gli indicatori che avevamo fissato. I progressi non si sentono: <strong className="text-ink font-bold">si misurano.</strong>
                                    </p>
                                </div>
                            </div>

                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 bg-white backdrop-blur-md border-[3px] border-white rounded-full flex flex-col items-center justify-center font-display font-bold text-xl text-coral shadow-[0_8px_24px_rgba(212,132,140,0.15),0_0_30px_rgba(255,255,255,0.8)] z-20">3</div>

                            {/* Layout Mobile */}
                            <div className="md:hidden w-full pl-24 pr-4">
                                <div className="glass-card-premium p-8 rounded-[2rem] shadow-card-premium">
                                    <span className="font-mono text-[10px] font-bold bg-white text-ink/70 px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-ink/5 shadow-sm">1-2 SESSIONI</span>
                                    <h3 className="font-display font-bold text-2xl text-ink mb-3 uppercase tracking-wide">Verifica</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base">
                                        Confrontiamo i risultati con gli indicatori che avevamo fissato. I progressi non si sentono: <strong className="text-ink font-bold">si misurano.</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="hidden md:block w-1/2"></div>
                        </div>

                        {/* Phase 4 */}
                        <div className="phase-anim flex flex-col md:flex-row items-center w-full relative">
                            <div className="hidden md:block w-1/2"></div>

                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-coral border-4 border-white backdrop-blur-md rounded-full flex flex-col items-center justify-center font-display font-bold text-2xl text-white shadow-[0_8px_30px_rgba(212,132,140,0.4),0_0_40px_rgba(212,132,140,0.25)] z-20">4</div>

                            <div className="hidden md:flex w-1/2 justify-start pl-16 text-left">
                                <div className="glass-card-premium p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(212,132,140,0.2),0_0_40px_rgba(212,132,140,0.08)] max-w-sm hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(212,132,140,0.28)] transition-all duration-500 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="font-mono text-[10px] font-bold bg-coral/10 text-coral px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-coral/20">1 SESSIONE</span>
                                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-3 relative z-10 uppercase tracking-wide">Riprogettazione</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base mb-6 relative z-10">
                                        Valutiamo i risultati raggiunti e definiamo cosa serve dopo.
                                    </p>
                                    <div className="p-4 bg-cloud rounded-xl border border-white text-ink/90 text-[13px] font-medium leading-relaxed italic text-balance shadow-sm relative z-10">
                                        "Se il problema è risolto, il lavoro è finito. Non ho interesse a farti restare più del necessario. Sono orientata al risultato, non alla dipendenza."
                                    </div>
                                </div>
                            </div>

                            {/* Layout Mobile */}
                            <div className="md:hidden w-full pl-24 pr-4">
                                <div className="glass-card bg-white/90 p-8 rounded-[2rem] shadow-glass-card border border-white">
                                    <span className="font-mono text-[10px] font-bold bg-coral/10 text-coral px-3 py-1.5 rounded-full tracking-wider mb-5 inline-block border border-coral/20">1 SESSIONE</span>
                                    <h3 className="font-display font-bold text-2xl text-ink mb-3 uppercase tracking-wide">Riprogettazione</h3>
                                    <p className="text-ink/80 font-sans font-medium leading-relaxed text-base mb-6">
                                        Valutiamo i risultati raggiunti e definiamo cosa serve dopo.
                                    </p>
                                    <div className="p-4 bg-cloud rounded-xl border border-white text-ink/90 text-sm font-medium leading-relaxed italic text-balance shadow-sm">
                                        "Se il problema è risolto, il lavoro è finito. Non ho interesse a farti restare più del necessario. Sono orientata al risultato, non alla dipendenza."
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
