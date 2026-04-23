import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Method() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.method-card-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.method-card-anim', {
                    y: 0, opacity: 1, stagger: 0.055, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="il-metodo" ref={sectionRef} className="py-24 md:py-32 px-4 relative flex justify-center flex-col items-center">

            {/* SEZIONE 3 */}
            <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10 mb-32">
                <div className="lg:col-span-5 flex flex-col justify-start">
                    <div className="sticky top-32">
                        <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-coral font-semibold leading-tight mb-8 glow-text-coral">
                            Non tutti i percorsi sono uguali. E non tutti producono lo stesso risultato.
                        </h2>
                        <div className="space-y-6 font-sans text-ink/80 text-lg font-medium leading-relaxed">
                            <p>Questo non è un giudizio su chi li propone. È un fatto.</p>
                            <p>Esistono percorsi che partono senza un obiettivo definito. Senza indicatori. Senza una durata prevista. Senza un modo per sapere se stanno funzionando o no.</p>
                            <p>Possono avere valore. Ma ti mettono in una posizione precisa: devi affidarti alla sensazione. Alla relazione. Alla speranza che prima o poi qualcosa cambi.</p>
                            <p className="text-ink font-bold">Ho scelto un formato diverso. Perché credo che chi lavora con me abbia il diritto di sapere dove sta andando.</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8 justify-center">
                    <h3 className="font-display font-medium uppercase tracking-widest text-[11px] text-ink/60 mb-2">Perché la struttura conta</h3>

                    <div className="method-card-anim glass-panel-glow p-8 md:p-10 !rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-8 hover:shadow-card-premium-hover transition-all duration-500 group">
                        <div>
                            <h3 className="font-display font-bold text-xl text-ink mb-2"><span className="text-coral mr-2 group-hover:glow-text-coral transition-all duration-300">✦</span>Senza obiettivi specifici</h3>
                            <p className="font-sans text-ink/80 leading-relaxed font-medium">
                                lavori, ma non sai verso cosa.
                            </p>
                        </div>
                    </div>

                    <div className="method-card-anim glass-panel-glow p-8 md:p-10 !rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-8 hover:shadow-card-premium-hover transition-all duration-500 group">
                        <div>
                            <h3 className="font-display font-bold text-xl text-ink mb-2"><span className="text-coral mr-2 group-hover:glow-text-coral transition-all duration-300">✦</span>Senza indicatori condivisi</h3>
                            <p className="font-sans text-ink/80 leading-relaxed font-medium">
                                il progresso è una sensazione. Non un dato.
                            </p>
                        </div>
                    </div>

                    <div className="method-card-anim glass-panel-glow p-8 md:p-10 !rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-8 hover:shadow-card-premium-hover transition-all duration-500 group">
                        <div>
                            <h3 className="font-display font-bold text-xl text-ink mb-2"><span className="text-coral mr-2 group-hover:glow-text-coral transition-all duration-300">✦</span>Senza una durata prevista</h3>
                            <p className="font-sans text-ink/80 leading-relaxed font-medium">
                                non c'è un momento in cui fermarti e dire: sta funzionando oppure no.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEZIONE 4 */}
            <div className="max-w-[1200px] mx-auto w-full relative z-10 glass-card-premium p-10 md:p-16 rounded-[4rem] shadow-card-premium">
                {/* Internal glow orbs */}
                <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-coral/10 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute bottom-[10%] right-[5%] w-48 h-48 bg-trust/10 rounded-full blur-[70px] pointer-events-none"></div>

                <div className="text-center max-w-3xl mx-auto mb-16 method-card-anim relative z-10">
                    <h2 className="font-serif italic text-4xl md:text-5xl text-coral font-semibold leading-tight mb-8 glow-text-coral">
                        Un percorso ha valore solo se produce miglioramenti che puoi vedere.
                    </h2>
                    <p className="font-sans text-ink/80 text-lg md:text-xl font-medium leading-relaxed mb-6">
                        Lavoro su problemi specifici, con percorsi a durata prevista. Il principio che guida tutto è uno: <strong className="text-ink">se non puoi misurare i progressi, non puoi sapere se quello che stai facendo funziona</strong>.
                    </p>
                    <p className="font-sans text-ink/80 text-lg md:text-xl font-medium leading-relaxed">
                        Non è un'opinione. È il modo in cui ho costruito tutto il mio lavoro.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="method-card-anim glass-panel-glow p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-card-premium-hover transition-all duration-500 group">
                        <div className="font-mono text-4xl font-bold text-coral/40 mb-4 group-hover:text-coral/60 transition-colors duration-300">01</div>
                        <h3 className="font-display font-bold text-2xl text-ink mb-3">Un problema, un obiettivo.</h3>
                        <p className="font-sans text-ink/80 leading-relaxed font-medium">
                            Ogni percorso parte da un problema circoscritto e da un obiettivo concreto. Non lavoro su tutto: lavoro su ciò che conta adesso.
                        </p>
                    </div>

                    <div className="method-card-anim glass-panel-glow p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-card-premium-hover transition-all duration-500 group">
                        <div className="font-mono text-4xl font-bold text-coral/40 mb-4 group-hover:text-coral/60 transition-colors duration-300">02</div>
                        <h3 className="font-display font-bold text-2xl text-ink mb-3">Indicatori definiti insieme.</h3>
                        <p className="font-sans text-ink/80 leading-relaxed font-medium">
                            All'inizio concordiamo gli indicatori di miglioramento specifici per il tuo caso. Non sensazioni: criteri osservabili su cui misurare i progressi nel tempo.
                        </p>
                    </div>

                    <div className="method-card-anim glass-panel-glow p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-card-premium-hover transition-all duration-500 group">
                        <div className="font-mono text-4xl font-bold text-coral/40 mb-4 group-hover:text-coral/60 transition-colors duration-300">03</div>
                        <h3 className="font-display font-bold text-2xl text-ink mb-3">Struttura e lavoro attivo.</h3>
                        <p className="font-sans text-ink/80 leading-relaxed font-medium">
                            Durata prevista, fasi definite, esercizi tra le sessioni. Non basta presentarsi: il percorso funziona se lavori anche fuori.
                        </p>
                    </div>

                    <div className="method-card-anim glass-panel-glow p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-card-premium-hover transition-all duration-500 group">
                        <div className="font-mono text-4xl font-bold text-coral/40 mb-4 group-hover:text-coral/60 transition-colors duration-300">04</div>
                        <h3 className="font-display font-bold text-2xl text-ink mb-3">Monitoraggio continuo.</h3>
                        <p className="font-sans text-ink/80 leading-relaxed font-medium">
                            Durante il percorso teniamo traccia dei progressi sugli indicatori concordati. In ogni momento sai come sta andando. Se qualcosa non funziona, lo vediamo. Entrambi.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
