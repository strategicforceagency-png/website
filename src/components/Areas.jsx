import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Areas() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.area-box', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.area-box', {
                    y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
            gsap.to('.area-float-1', { y: -12, rotation: 4, duration: 8, yoyo: true, repeat: -1, ease: 'sine.inOut', force3D: true });
            gsap.to('.area-float-2', { y: 12, rotation: -4, duration: 9, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 1, force3D: true });
            gsap.to('.area-float-3', { x: 8, y: -8, duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 2, force3D: true });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Layout asimmetrico "Bento Box" con allineamento perfetto della griglia (12 colonne totali)
    const areas = [
        {
            title: "Relazioni disfunzionali",
            desc: "Schemi che si ripetono. Difficoltà a chiudere relazioni che non funzionano. Attrazione per dinamiche che sai già come andranno a finire.",
            colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
            color: "bg-coral/20",
            glow: "bg-coral/30",
            tag: "Loop Relazionali",
            icon: "✦"
        },
        {
            title: "Blocchi decisionali e procrastinazione strutturale",
            desc: "Difficoltà a fare scelte importanti. Rimandare sistematicamente ciò che conta. Restare fermi anche quando la situazione lo richiede.",
            colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
            color: "bg-trust/20",
            glow: "bg-trust/30",
            tag: "Stallo Operativo",
            icon: "✧"
        },
        {
            title: "Ansia funzionale",
            desc: "Tensione costante, difficoltà a rilassarsi, preoccupazione persistente che non rientra in un quadro clinico grave.",
            colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
            color: "bg-blush/40",
            glow: "bg-blush/50",
            tag: "Carico Mentale",
            icon: "〰"
        },
        {
            title: "Pattern di autosabotaggio",
            desc: "Comportamenti ripetitivi che ostacolano i tuoi obiettivi, nonostante tu sappia perfettamente cosa stai facendo.",
            colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
            color: "bg-ink/5",
            glow: "bg-ink/10",
            tag: "Azioni Controproducenti",
            icon: "⨯"
        },
        {
            title: "Comunicazione di coppia",
            desc: "Difficoltà a farsi capire. Conflitti ricorrenti. Distanza emotiva. La sensazione di parlare lingue diverse.",
            colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
            color: "bg-coral/10",
            glow: "bg-coral/20",
            tag: "Distanza Emotiva",
            icon: "⚮"
        },
        {
            title: "Gestione emotiva",
            desc: "Difficoltà a gestire rabbia, frustrazione o emozioni intense senza che queste governino le tue decisioni.",
            colSpan: "col-span-12 md:col-span-6 lg:col-span-5",
            color: "bg-trust/10",
            glow: "bg-trust/20",
            tag: "Regolazione",
            icon: "◎"
        },
        {
            title: "Confronto costante e bisogno di conferme",
            desc: "Misurarsi continuamente con gli altri. Dipendere da validazioni esterne. Difficoltà a valutare in modo realistico i propri risultati.",
            colSpan: "col-span-12 md:col-span-6 lg:col-span-7",
            color: "bg-blush/30",
            glow: "bg-coral/20",
            tag: "Dipendenza Esterna",
            icon: "◒"
        }
    ];

    /* Rimosso overflow-hidden dalla section per non tagliare il floating badge */
    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-4 w-full relative z-10 flex flex-col items-center">

            {/* Sfondo fluttuante astratto decorativo dietro l'intera sezione */}
            <div className="absolute top-1/2 left-1/4 w-[50vw] h-[50vw] bg-coral/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="max-w-[1200px] w-full mx-auto relative z-10 text-center mb-20 md:mb-24">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-ink/10 bg-white/50 text-ink/70 text-[10px] font-mono tracking-widest font-bold uppercase mb-8 shadow-sm">
                    Aree di intervento
                </div>
                <h2 className="font-serif italic text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] tracking-tight text-ink drop-shadow-sm font-semibold leading-[1.05] mb-8">
                    Problemi specifici.<br />
                    <span className="text-coral">Percorsi dedicati.</span>
                </h2>
                <p className="font-sans text-ink/80 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                    Non lavoro su tutto. Lavoro su problemi circoscritti per cui questo approccio è adatto.
                </p>

                {/* Floating element 1 - Fixed cutoff by moving it safely inside the container */}
                <div className="area-float-1 absolute -top-8 right-2 lg:right-12 hidden md:flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-glass-sm z-20">
                    <span className="w-2 h-2 rounded-full bg-[#82D19D] animate-pulse"></span>
                    <span className="font-sans text-xs font-bold text-ink">Focus Mirato</span>
                </div>
                {/* Floating element 2 */}
                <div className="area-float-2 absolute top-20 left-2 lg:left-12 hidden md:flex items-center justify-center w-14 h-14 bg-trust/20 backdrop-blur-xl rounded-[1.2rem] border border-white shadow-glass-sm z-20">
                    <span className="text-2xl text-ink/60">✦</span>
                </div>
            </div>

            {/* Bento Box Grid */}
            <div className="max-w-[1200px] w-full mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(180px,auto)]">
                    {areas.map((area, idx) => (
                        <div
                            key={idx}
                            className={`area-box ${area.colSpan} glass-card bg-white/60 hover:bg-white/80 border border-white p-8 md:p-10 rounded-[2.5rem] shadow-glass-sm hover:shadow-glass-card hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group flex flex-col`}
                        >
                            {/* Inner Soft Glow */}
                            <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${area.glow} rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                            <div className="flex items-center justify-between mb-6 relative z-10 w-full">
                                <span className={`flex items-center justify-center w-12 h-12 ${area.color} rounded-2xl text-ink border border-white shadow-sm font-bold text-xl`}>
                                    {area.icon}
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-ink/50 bg-white/40 px-3 py-1.5 rounded-full border border-white">
                                    {area.tag}
                                </span>
                            </div>

                            <div className="mt-auto relative z-10">
                                <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink mb-3 leading-tight tracking-tight">
                                    {area.title}
                                </h3>
                                <p className="font-sans text-ink/70 font-medium leading-relaxed text-[15px] max-w-xl">
                                    {area.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Important Notice - Frosted Glass Callout */}
            <div className="max-w-[1200px] w-full mx-auto mt-24 relative z-20 flex justify-center">
                <div className="area-box relative glass-card p-10 md:p-14 lg:p-16 border-[3px] border-white bg-white/70 rounded-[3rem] lg:rounded-[4rem] text-center max-w-4xl shadow-glass overflow-hidden w-full group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-transparent pointer-events-none z-0"></div>
                    {/* Floating element 3 */}
                    <div className="area-float-3 absolute -top-4 -right-4 w-20 h-20 bg-coral/20 rounded-full blur-[20px] z-0"></div>

                    <div className="relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-ink text-white font-mono text-[10px] font-bold uppercase tracking-widest mb-6">Nota Importante</span>
                        <p className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-coral mb-8 font-semibold leading-tight drop-shadow-sm">
                            Non tratto patologie cliniche gravi.
                        </p>
                        <p className="font-sans text-ink/80 font-medium leading-relaxed text-lg md:text-xl text-balance max-w-2xl mx-auto">
                            Se la tua situazione richiede un intervento clinico specialistico, te lo dico e ti indico professionisti più adatti. <strong className="text-ink font-bold">Non è un limite: è una scelta di responsabilità.</strong> Non trattengo nessuno in un percorso che non è quello giusto per lui.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}
