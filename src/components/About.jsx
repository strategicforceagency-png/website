import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.about-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.about-anim', {
                    y: 0, opacity: 1, stagger: 0.055, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
            gsap.to('.about-img', { y: -8, duration: 9, yoyo: true, repeat: -1, ease: 'sine.inOut', force3D: true });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="chi-sono" ref={sectionRef} className="py-24 md:py-32 px-4 flex flex-col items-center justify-center relative w-full z-10">
            <div className="max-w-[1200px] w-full mx-auto relative">

                {/* Background Blobs for depth */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-coral/12 rounded-full blur-[120px] pointer-events-none -z-10"></div>
                <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-trust/15 rounded-full blur-[80px] pointer-events-none -z-10"></div>

                <div className="glass-card-premium p-8 md:p-12 lg:p-16 rounded-[3rem] md:rounded-[4rem] shadow-card-premium hover:shadow-card-premium-hover transition-shadow duration-700 relative z-10 overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        {/* Image Column with glow effect */}
                        <div className="lg:col-span-4 relative about-img max-w-sm mx-auto w-full group">
                            {/* Glow behind image */}
                            <div className="absolute inset-4 bg-coral/15 rounded-[2.5rem] blur-[40px] group-hover:bg-coral/20 transition-all duration-700"></div>
                            <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-card-premium border-[6px] border-white/95 relative bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                                    alt="Federica Recupito"
                                    className="w-full h-full object-cover grayscale-[10%] sepia-[5%]"
                                />
                                <div className="absolute inset-0 bg-coral/5 mix-blend-overlay"></div>
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="lg:col-span-8 flex flex-col justify-center text-ink pl-0 lg:pl-10">
                            <h2 className="about-anim text-3xl md:text-5xl lg:text-5xl font-serif italic text-coral font-semibold tracking-tight mb-8 leading-tight glow-text-coral">
                                A un certo punto mi sono fatta una domanda che ha cambiato tutto.
                            </h2>

                            <div className="space-y-6 font-sans text-lg text-ink/80 leading-relaxed font-medium">
                                <p className="about-anim">
                                    Mi chiamo Federica Recupito. Sono psicologa.
                                </p>
                                <p className="about-anim">
                                    Ho lavorato nelle scuole, nelle case popolari, nei servizi territoriali. Ambienti diversi, persone diverse, problemi concreti.
                                    <br />Ogni giorno incontravo persone intelligenti, sensibili, capaci. Persone che dall'esterno sembravano avere tutto sotto controllo. Ma che dentro stavano sopravvivendo invece di vivere.
                                </p>
                                <p className="about-anim">
                                    Applicavo quello che avevo studiato. Ma non avevo un metro per misurare il mio lavoro. Solo sensazioni. E la frustrazione di non poter dire con certezza se quello che facevo stava facendo la differenza.
                                </p>

                                <div className="about-anim my-8 glass-panel-glow p-8 rounded-[2rem] flex flex-col gap-4">
                                    <p className="font-serif italic text-2xl md:text-3xl text-coral font-medium leading-relaxed glow-text-coral">
                                        Poi mi sono fatta una domanda semplice:<br />"Come faccio a sapere se quello che faccio funziona davvero?"
                                    </p>
                                    <p className="font-sans text-ink/80 font-bold leading-relaxed text-lg">Quella domanda ha cambiato il modo in cui lavoro.</p>
                                </div>

                                <p className="about-anim">
                                    Mi sono formata come Problem Solving Coach Strategico, in Comunicazione Strategica, ho fatto un Master in Psicologia del Cambiamento. Non per aggiungere titoli al muro. Ma perché cercavo un metodo che mi permettesse di rispondere a quella domanda.
                                </p>
                                <p className="about-anim">
                                    Oggi lavoro su problemi reali ma non patologici. Relazioni che si ripetono. Blocchi che resistono alla comprensione. Decisioni che non vengono prese.
                                </p>
                                <p className="about-anim">
                                    Ho costruito tutto intorno a un principio:<br />
                                    <strong className="text-ink font-bold">Chi lavora con me ha il diritto di sapere se il percorso sta funzionando.</strong>
                                </p>
                                <p className="about-anim">
                                    Non troverai frasi motivazionali qui. Non troverai rassicurazioni. Troverai chiarezza. Quella vera, quella che a volte fa male. Ma che ti dice esattamente dove sei.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
