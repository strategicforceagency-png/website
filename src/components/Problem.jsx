import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.problem-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.problem-anim', {
                    y: 0, opacity: 1, stagger: 0.055, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="il-problema" ref={sectionRef} className="py-24 md:py-32 px-4 flex flex-col items-center justify-center relative z-10 w-full">
            <div className="max-w-[1200px] w-full mx-auto glass-card-premium p-10 md:p-16 lg:p-20 relative text-ink overflow-hidden shadow-card-premium hover:shadow-card-premium-hover transition-shadow duration-700">

                {/* Subtle internal glow */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-coral/8 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-trust/10 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">

                    {/* Testo */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <h2 className="problem-anim text-3xl md:text-5xl font-serif italic text-coral mb-10 font-semibold leading-tight glow-text-coral">
                            Hai capito tutto. Ma non è cambiato niente.
                        </h2>

                        <div className="space-y-6 font-sans text-lg md:text-xl leading-relaxed text-ink/80 font-medium">
                            <p className="problem-anim">
                                Hai letto. Hai riflettuto. Forse hai parlato con qualcuno. Hai capito molte cose su di te. Eppure il problema è ancora lì.
                            </p>

                            <p className="problem-anim relative">
                                Non perché non ci hai provato. Ma perché capire e cambiare sono due cose diverse. E nessuno te lo dice abbastanza chiaro.
                            </p>

                            <p className="problem-anim relative">
                                La comprensione da sola non produce cambiamento. Lo so perché lo vedo ogni giorno: persone intelligenti, consapevoli, che sanno esattamente cosa non funziona nella loro vita. Ma continuano a fare le stesse cose.
                            </p>

                            <div className="problem-anim border-l-[4px] border-coral pl-6 py-2 mt-10 mb-10 bg-white/50 backdrop-blur-md rounded-r-2xl p-4 shadow-[0_4px_20px_rgba(212,132,140,0.1)] inner-highlight">
                                <p className="italic font-serif text-2xl text-ink/90 font-medium leading-relaxed glow-text-coral">
                                    Non è un problema di volontà. È un problema di strumento.
                                </p>
                            </div>

                            <div className="problem-anim pt-8 border-t border-white/60">
                                <h3 className="font-display font-bold text-2xl text-ink mb-6">Ti riconosci in qualcuna di queste situazioni?</h3>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-4 items-start">
                                        <span className="text-coral mt-1 text-xl">✦</span>
                                        <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg">Riconosci lo schema, ma non riesci a interromperlo</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-coral mt-1 text-xl">✦</span>
                                        <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg">Sai da dove viene il blocco, ma il blocco resta</p>
                                    </li>
                                    <li className="flex gap-4 items-start">
                                        <span className="text-coral mt-1 text-xl">✦</span>
                                        <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg">Ti sei dato mille spiegazioni, ma nessuna ti ha fatto smettere</p>
                                    </li>
                                </ul>
                                <p className="text-ink/80 font-medium leading-relaxed text-lg">
                                    Se ti ritrovi qui, il problema non sei tu. <strong className="text-ink font-bold">Potrebbe essere il modo in cui stai provando a risolverlo.</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Immagine */}
                    <div className="lg:col-span-5 problem-anim relative mt-8 lg:mt-0">
                        <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-glass border-[8px] border-white/80 relative">
                            <img
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop"
                                alt="Spazio ordinato, mani che scrivono"
                                className="w-full h-full object-cover grayscale-[20%] sepia-[10%]"
                            />
                            <div className="absolute inset-0 bg-coral/10 mix-blend-multiply"></div>
                        </div>
                        {/* Decorazione float with glow */}
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 pill-glow flex items-center justify-center animate-float group">
                            <div className="absolute inset-0 bg-coral/15 rounded-full blur-[20px] group-hover:bg-coral/25 transition-all duration-500"></div>
                            <span className="font-serif italic text-4xl text-coral relative z-10 glow-text-coral">?</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
