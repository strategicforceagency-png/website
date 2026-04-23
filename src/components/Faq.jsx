import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FaqItem = ({ faq, index, isOpen, toggleOpen }) => {
    return (
        <div
            className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen
                ? 'backdrop-blur-xl bg-white/70 scale-[1.02] z-10 shadow-[0_8px_40px_rgba(212,132,140,0.25)] border-white/80'
                : 'backdrop-blur-md bg-white/40 hover:bg-white/50 shadow-sm border-white/40 hover:shadow-md'
                } cursor-pointer px-6 md:px-8 mb-4 border rounded-[2rem] relative overflow-hidden group`}
            onClick={() => toggleOpen(index)}
        >
            <div className="py-6 md:py-8 flex items-center justify-between gap-6">
                <h3 className={`font-display font-semibold text-lg md:text-xl tracking-tight transition-colors duration-300 pr-8 ${isOpen ? 'text-coral' : 'text-ink group-hover:text-coral/80'}`}>
                    {faq.q}
                </h3>
                <div className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-white shadow-[0_0_20px_rgba(212,132,140,0.3)] border border-coral/30' : 'bg-white/60 border border-white/60 group-hover:bg-white/90 group-hover:shadow-sm'}`}>
                    <div className="relative w-4 h-4 flex items-center justify-center">
                        <span className={`absolute w-full h-[2px] rounded-full transition-all duration-500 ${isOpen ? 'bg-coral rotate-180' : 'bg-ink/70 group-hover:bg-coral/80'} `}></span>
                        <span className={`absolute w-[2px] h-full rounded-full transition-all duration-500 ${isOpen ? 'bg-coral rotate-90 scale-0 opacity-0' : 'bg-ink/70 group-hover:bg-coral/80 opacity-100'} `}></span>
                    </div>
                </div>
            </div>

            <div
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isOpen ? 'grid-rows-[1fr] opacity-100 relative' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="font-sans text-ink/80 font-medium leading-relaxed md:text-lg pb-8">
                        {faq.a}
                    </p>
                </div>
            </div>

            {/* Sottile bagliore decorativo di sfondo quando aperto */}
            <div className={`absolute -inset-4 bg-coral/5 blur-2xl rounded-full transition-opacity duration-500 -z-10 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
    );
};

export default function Faq() {
    const sectionRef = useRef(null);
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "È psicoterapia?",
            a: "No. È un intervento psicologico strutturato su problemi specifici. Non tratto patologie cliniche gravi — in quei casi indirizzo verso professionisti specializzati."
        },
        {
            q: "Quanto dura?",
            a: "Masterclass: 6 settimane. Individuale: circa 12 settimane. Entrambi hanno una durata prevista. Non sono percorsi a tempo indefinito."
        },
        {
            q: "Come funziona la garanzia?",
            a: "Due livelli. Se dopo le prime sessioni l'approccio non fa per te, paghi solo le sessioni svolte. Se arrivi a fine percorso rispettando i criteri di partecipazione e tramite gli indicatori concordati all'inizio risulta che gli obiettivi non sono stati raggiunti, rimborso l'intero investimento al 100%."
        },
        {
            q: "Devo fare la masterclass prima del percorso individuale?",
            a: "No. Puoi accedere direttamente al percorso individuale."
        },
        {
            q: "E se il mio problema richiede altro?",
            a: "Lo valutiamo nella fase di definizione. Se serve un intervento diverso, ti indico professionisti più adatti. Non trattengo nessuno in un percorso non adatto."
        },
        {
            q: "Come si svolgono le sessioni?",
            a: "Online, in videochiamata. Servono una connessione stabile e un ambiente riservato."
        },
        {
            q: "Quanto costa il percorso individuale?",
            a: "L'investimento viene definito dopo una valutazione iniziale, perché ogni percorso è costruito sul problema specifico. Parla con un consulente per avere tutte le informazioni."
        },
        {
            q: "Come scegliere un professionista serio?",
            a: "Tre cose da verificare sempre, con chiunque: che abbia un metodo chiaro, che sappia dirti cosa farai settimana per settimana, e che sappia dirti anche quando non è la persona giusta per te."
        }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.faq-header-anim',
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
            );

            gsap.fromTo('.faq-item-anim',
                { x: -20, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: '.faq-list', start: 'top 85%' } }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section ref={sectionRef} className="py-24 md:py-32 px-4 flex justify-center relative z-10 w-full">
            <div className="w-full max-w-[900px]">

                {/* Premium Header with floating micro-interactions */}
                <div className="faq-header-anim relative text-center mb-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-[150%] bg-[#F5D5D5]/20 blur-[60px] rounded-full pointer-events-none -z-10"></div>

                    <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-coral/20 bg-white/50 backdrop-blur-md shadow-sm mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse"></span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60">Chiarezza Totale</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-ink drop-shadow-sm tracking-tight relative z-10">
                        Domande <br className="md:hidden" /><span className="font-serif italic text-coral font-bold inline-block relative">
                            Frequenti
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-coral/20" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                <path d="M0 5Q50 0 100 5T0 5Z" fill="currentColor" />
                            </svg>
                        </span>
                    </h2>

                    {/* Floating SVG Stars (Like reference) */}
                    <div className="absolute -left-4 md:-left-12 top-0 text-coral/40 text-2xl font-serif italic animate-float drop-shadow-sm pointer-events-none">✦</div>
                    <div className="absolute -right-4 md:-right-8 bottom-0 text-ink/20 text-4xl font-serif italic animate-float-delayed drop-shadow-sm pointer-events-none">✧</div>
                </div>

                <div className="faq-list flex flex-col pt-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item-anim">
                            <FaqItem
                                faq={faq}
                                index={index}
                                isOpen={openIndex === index}
                                toggleOpen={toggleOpen}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
