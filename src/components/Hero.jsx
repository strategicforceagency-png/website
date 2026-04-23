import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initial appearance
            gsap.fromTo('.hero-anim',
                { opacity: 0, scale: 0.98, y: 18 },
                { opacity: 1, scale: 1, y: 0, stagger: 0.09, duration: 1.6, ease: 'expo.out', delay: 0.1, force3D: true }
            );

            // Floating animations for tags and widgets — slow, organic
            gsap.to('.hero-float-slow', { y: -18, rotation: 1.2, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut', force3D: true });
            gsap.to('.hero-float-med', { y: 14, x: -5, rotation: -0.8, duration: 11, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.5, force3D: true });
            gsap.to('.hero-float-fast', { y: -10, x: 7, duration: 9, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1.5, force3D: true });

            // Constellation elements — ampio e impercettibilmente lento
            gsap.to('.constellation-item', {
                y: "random(-20, 20)", x: "random(-15, 15)", rotation: "random(-8, 8)",
                duration: "random(10, 17)", yoyo: true, repeat: -1, ease: 'sine.inOut', stagger: 0.5, force3D: true
            });

            // Ambient Orbs — molto lenti
            gsap.to('.bg-orb-1', { y: -25, x: 18, duration: 14, yoyo: true, repeat: -1, ease: 'sine.inOut', force3D: true });
            gsap.to('.bg-orb-2', { y: 25, x: -18, duration: 13, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1, force3D: true });
            gsap.to('.bg-orb-3', { scale: 1.08, duration: 12, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 2, force3D: true });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[100dvh] pt-24 md:pt-32 pb-20 flex flex-col items-center justify-center w-full overflow-hidden">

            {/* Background Ambient Orbs - Estremamente morbidi e dilatati */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden flex items-center justify-center">
                <div className="bg-orb-1 absolute w-[50vw] h-[50vw] max-w-[800px] rounded-full bg-coral/10 blur-[120px] mix-blend-multiply opacity-60 translate-x-1/3 -translate-y-1/3"></div>
                <div className="bg-orb-2 absolute w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-blush/20 blur-[100px] mix-blend-multiply opacity-50 -translate-x-1/3 translate-y-1/3"></div>
                <div className="bg-orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] rounded-full bg-trust/10 blur-[90px] opacity-40"></div>

                {/* Micro-noise overlay per texture pregiata */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiIG9wYWNpdHk9IjAuMDUiIC8+Cjwvc3ZnPg==')] opacity-[0.15] mix-blend-overlay"></div>
            </div>

            {/* Constellation Layer - Premium floating elements with glow */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">

                {/* LATO SINISTRO (Ovest) */}
                <div className="constellation-item absolute top-[20%] left-[3%] xl:left-[8%] pill-glow px-4 py-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-coral animate-pulse-slow shadow-[0_0_10px_rgba(212,132,140,0.5)]"></div>
                    <span className="text-[9px] font-mono text-ink/60 font-bold uppercase tracking-widest">Indicatori Definiti</span>
                </div>

                <div className="constellation-item absolute bottom-[35%] left-[6%] xl:left-[12%] text-coral/60 text-2xl font-serif italic glow-text-coral">✦</div>

                <div className="constellation-item absolute top-[45%] left-[4%] xl:left-[6%] w-11 h-11 bg-trust/20 backdrop-blur-xl rounded-xl border border-white/60 transform -rotate-12 flex items-center justify-center shadow-[0_4px_16px_rgba(184,204,224,0.2)]">
                    <span className="text-[14px] text-ink/50">✧</span>
                </div>

                {/* LATO DESTRO (Est) */}
                <div className="constellation-item absolute bottom-[20%] right-[4%] xl:right-[8%] pill-glow px-4 py-2 flex items-center gap-2">
                    <span className="text-[12px] text-coral/70">✧</span>
                    <span className="text-[9px] font-mono text-ink/60 font-bold uppercase tracking-widest">Problemi Specifici</span>
                </div>

                <div className="constellation-item absolute top-[28%] right-[6%] xl:right-[12%] w-12 h-12 bg-coral/15 backdrop-blur-xl rounded-2xl border border-white/50 transform rotate-12 flex items-center justify-center shadow-[0_4px_20px_rgba(212,132,140,0.15)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-coral/50 shadow-[0_0_12px_rgba(212,132,140,0.4)]"></div>
                </div>

                <div className="constellation-item absolute top-[15%] right-[22%] xl:right-[28%] text-coral/50 text-xl font-serif italic glow-text-coral">✦</div>
            </div>

            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-24 2xl:gap-32 relative z-10 px-4 max-w-[1600px] 2xl:max-w-[1800px] mx-auto">

                {/* Left Card - Dashboard Slim with Premium Glassmorphism */}
                <div className="hero-anim hero-float-slow hidden xl:flex flex-col items-center w-[220px] xl:w-[240px] translate-y-12">
                    <div className="glass-card-premium p-5 w-full shadow-card-premium hover:shadow-card-premium-hover transition-shadow duration-700 relative overflow-hidden group">
                        {/* Animated shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-coral/5 opacity-60 pointer-events-none"></div>
                        {/* Subtle glow on hover */}
                        <div className="absolute -inset-4 bg-coral/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="w-full aspect-[4/5] bg-white/40 backdrop-blur-md rounded-[1.8rem] shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] border border-white/60 p-4 flex flex-col gap-3 relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-6 h-6 rounded-full bg-trust/25 flex-shrink-0 animate-pulse-slow shadow-[0_0_12px_rgba(184,204,224,0.4)]"></div>
                                <div className="h-1.5 w-16 bg-ink/10 rounded-full"></div>
                                <div className="ml-auto w-3 h-3 rounded-full border border-coral/40 shadow-[0_0_8px_rgba(212,132,140,0.3)]"></div>
                            </div>

                            <div className="bg-white/85 backdrop-blur-sm rounded-xl p-3 flex flex-col gap-2 shadow-[0_4px_16px_rgba(212,132,140,0.08)] border border-white/60 group-hover:scale-[1.03] group-hover:shadow-[0_8px_24px_rgba(212,132,140,0.12)] transition-all duration-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-coral/15 flex items-center justify-center text-coral text-[8px] font-bold shadow-[0_0_10px_rgba(212,132,140,0.2)]">✓</div>
                                    <div className="h-1.5 w-full bg-ink/5 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-gradient-to-r from-coral to-coral/80 rounded-full"></div>
                                    </div>
                                </div>
                                <p className="text-[8px] font-mono text-ink/60 uppercase tracking-widest font-bold">Progressi Misurati</p>
                            </div>

                            <div className="bg-white/60 backdrop-blur-lg rounded-xl p-3 flex flex-col gap-2 shadow-sm border border-white/50 mt-auto group-hover:-translate-y-1 transition-transform duration-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center text-ink/40 text-[8px] font-bold">!</div>
                                    <div className="h-1.5 w-[60%] bg-ink/10 rounded-full"></div>
                                </div>
                                <p className="text-[8px] font-mono text-ink/40 uppercase tracking-widest font-bold">Prossimo Step</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Central Title Area - Typography raffinata */}
                <div className="flex-1 flex flex-col items-center justify-center text-center max-w-[800px] xl:max-w-[900px] z-20">
                    <h1 className="hero-anim text-[3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[4.5rem] xl:text-[5rem] font-display font-medium text-ink tracking-tight md:tracking-normal leading-[1.1] flex flex-col items-center drop-shadow-sm">
                        <span className="block mb-2 lg:mb-4 text-ink/90">Sai davvero se</span>

                        {/* ULTRA PREMIUM GLASS PILL with Enhanced Glow */}
                        <div className="relative inline-block my-1 lg:my-2 group">
                            {/* Multi-layer glowing shadow */}
                            <div className="absolute inset-0 bg-coral/20 blur-[40px] rounded-full scale-[1.15] opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700"></div>
                            <div className="absolute inset-0 bg-coral/30 blur-[20px] rounded-full scale-[1.05] opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"></div>

                            {/* The Pill with gradient border */}
                            <span className="pill-glow-coral inline-block relative z-20 px-8 sm:px-12 py-3 lg:py-4 font-serif italic text-coral font-semibold tracking-tight lg:tracking-normal w-max
                                bg-white/40 backdrop-blur-[40px]
                                border-[1.5px] border-white/70
                                shadow-[0_12px_40px_rgba(212,132,140,0.18),0_4px_16px_rgba(212,132,140,0.12),inset_0_2px_12px_rgba(255,255,255,0.8)]
                                rounded-full transform -rotate-1 lg:-rotate-2
                                glow-text-coral">
                                il tuo percorso
                            </span>
                        </div>

                        <span className="block mt-2 lg:mt-4 text-ink/90">sta funzionando?</span>
                    </h1>

                    <div className="hero-anim mt-10 md:mt-12 space-y-4 text-lg md:text-xl text-ink/70 font-sans leading-relaxed max-w-xl font-medium">
                        <p>Non "mi sento un po' meglio". Non "credo di fare progressi". <br /><strong className="text-ink text-xl md:text-2xl mt-4 block font-bold tracking-tight">Intendo: hai un dato concreto per saperlo?</strong></p>
                        <p className="pt-2">La maggior parte dei percorsi psicologici non te lo dice. Il mio sì.</p>
                        <p className="text-ink/50 text-base">Percorsi strutturati, su problemi specifici, con indicatori di miglioramento definiti dall'inizio.</p>
                    </div>

                    {/* Premium Luxury CTA with Multi-layer Glow */}
                    <div className="hero-anim flex flex-col items-center justify-center w-full mt-12 md:mt-16 relative z-30">
                        <div className="relative group">
                            {/* Multi-layer glow effect */}
                            <div className="absolute inset-0 bg-coral/25 blur-[30px] rounded-full scale-[1.2] group-hover:bg-coral/40 group-hover:scale-[1.3] transition-all duration-700 pointer-events-none"></div>
                            <div className="absolute inset-0 bg-coral/35 blur-[15px] rounded-full scale-[1.05] group-hover:bg-coral/50 group-hover:scale-[1.1] transition-all duration-500 pointer-events-none"></div>

                            <a href="#inizia" className="relative flex items-center gap-3 p-1.5 pr-6 rounded-full bg-white/75 backdrop-blur-[32px] border-[1.5px] border-white/90 shadow-[0_8px_24px_rgba(212,132,140,0.1),0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,1)] hover:bg-white hover:shadow-[0_16px_40px_rgba(212,132,140,0.2),0_8px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1">
                                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center bg-ink text-white shadow-[0_4px_12px_rgba(28,28,30,0.2)] group-hover:bg-coral group-hover:shadow-[0_6px_16px_rgba(212,132,140,0.4)] transition-all duration-500">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500">
                                        <line x1="5" y1="19" x2="19" y2="5"></line>
                                        <polyline points="9 5 19 5 19 15"></polyline>
                                    </svg>
                                </div>
                                <span className="font-sans font-bold text-ink text-[10px] md:text-xs uppercase tracking-[0.12em] md:tracking-[0.18em] pr-2">
                                    Scopri come funziona
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Card - Profilo Slim with Premium Effects */}
                <div className="hero-anim hero-float-med hidden xl:flex flex-col items-center w-[220px] xl:w-[240px] -translate-y-10">
                    <div className="glass-card-premium p-5 w-full flex flex-col items-center text-center gap-5 relative overflow-hidden shadow-card-premium hover:shadow-card-premium-hover transition-all duration-700 group">

                        {/* Internal glow */}
                        <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-white/90 via-white/40 to-transparent pointer-events-none"></div>
                        {/* Subtle coral glow on hover */}
                        <div className="absolute -inset-4 bg-coral/10 blur-[35px] rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="w-32 h-32 xl:w-40 xl:h-40 rounded-full overflow-hidden border-[6px] border-white/90 shadow-[0_8px_24px_rgba(212,132,140,0.12),0_4px_12px_rgba(0,0,0,0.04)] relative z-10 mt-2 group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(212,132,140,0.2)] transition-all duration-700">
                            <img src="/foto-federica.jpeg" alt="Federica Recupito" className="w-full h-full object-cover grayscale-[15%] sepia-[5%]" />
                            <div className="absolute inset-0 bg-coral/5 mix-blend-overlay"></div>
                        </div>

                        <div className="relative z-10 pb-2">
                            <h3 className="font-serif italic text-[1.8rem] xl:text-[2.2rem] text-ink mb-1.5 font-bold leading-none glow-text-coral">10+ Anni</h3>
                            <p className="font-mono text-[7px] xl:text-[8px] uppercase tracking-[0.2em] text-coral font-bold pill-glow px-3 py-1.5 inline-block">Di Specifica Esperienza</p>
                        </div>
                    </div>

                    {/* Floating badge with glow */}
                    <div className="hero-float-fast mt-6 relative z-10">
                        <div className="pill-glow px-5 py-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-coral shadow-[0_0_8px_rgba(212,132,140,0.5)]"></span>
                            <p className="text-[9px] font-mono text-ink/70 uppercase tracking-[0.15em] font-bold">Federica Recupito</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Cards (scrolling row) - Premium glassmorphism */}
            <div className="lg:hidden w-full flex gap-4 overflow-x-auto px-4 mt-8 pt-4 pb-12 snap-x hidden-scrollbar">
                <div className="w-[85vw] max-w-[300px] glass-card-premium p-6 snap-center shrink-0 relative overflow-hidden shadow-card-premium">
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-coral/15 rounded-full blur-[25px]"></div>
                    <h3 className="font-serif italic text-3xl text-ink mb-2 font-semibold relative z-10 glow-text-coral">10-14</h3>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold leading-relaxed mb-3 relative z-10 pill-glow px-3 py-1 inline-block">Settimane di lavoro</p>
                    <p className="text-[15px] text-ink/70 font-medium relative z-10">Non un percorso indefinito, ma un progetto con un inizio e una fine misurabile.</p>
                </div>
                <div className="w-[85vw] max-w-[300px] glass-card-premium p-6 snap-center shrink-0 relative overflow-hidden shadow-card-premium">
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-trust/15 rounded-full blur-[25px]"></div>
                    <h3 className="font-serif italic text-3xl text-ink mb-2 font-semibold relative z-10 glow-text-coral">100%</h3>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold leading-relaxed mb-3 relative z-10 pill-glow px-3 py-1 inline-block">Metodo misurabile</p>
                    <p className="text-[15px] text-ink/70 font-medium relative z-10">Rimborso totale se non riscontriamo i risultati concordati alla sessione 1.</p>
                </div>
            </div>

        </section>
    );
}
