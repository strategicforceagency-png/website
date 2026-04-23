import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set('.cta-anim', { y: 10, opacity: 0, force3D: true });
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'top bottom',
                once: true,
                onEnter: () => gsap.to('.cta-anim', {
                    y: 0, opacity: 1, stagger: 0.055, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                }),
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="inizia" ref={sectionRef} className="py-24 md:py-32 px-4 md:px-6 relative overflow-hidden flex justify-center z-10">

            {/* Background glow behind section */}
            <div className="absolute inset-x-[10%] top-[20%] bottom-[10%] bg-coral/15 rounded-[4rem] blur-[100px] pointer-events-none"></div>

            <div className="w-full max-w-[1280px] mx-auto relative z-10 glass-card-premium rounded-[3rem] md:rounded-[4rem] shadow-card-premium hover:shadow-card-premium-hover transition-shadow duration-700 overflow-hidden px-6 py-16 md:p-20 lg:p-24 text-ink flex flex-col items-center text-center">

                {/* Multi-layer glow inside the CTA card */}
                <div className="absolute top-0 right-0 w-[60%] h-[250px] bg-coral/12 blur-[80px] pointer-events-none rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[40%] h-[200px] bg-trust/10 blur-[60px] pointer-events-none rounded-full"></div>

                <div className="cta-anim text-center max-w-3xl mx-auto mb-16 relative z-10">
                    <h2 className="text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-serif italic font-bold text-coral tracking-tight leading-[1.1] mb-8 glow-text-coral">
                        Il primo passo: capire se questo approccio fa per te.
                    </h2>
                    <p className="text-lg md:text-xl font-sans text-ink/80 leading-relaxed font-medium max-w-2xl mx-auto">
                        Il questionario non è una formalità. Serve a capire se c'è un problema specifico su cui possiamo lavorare e se questo è il modo giusto per affrontarlo.
                    </p>
                </div>

                <div className="cta-anim flex flex-col items-center justify-center pt-8 relative z-10 max-w-xl mx-auto w-full">

                    <div className="glass-panel-glow rounded-[2.5rem] p-8 w-full mb-10 text-center font-sans text-ink/80 text-lg font-medium leading-relaxed">
                        <p className="mb-4">
                            <strong>5 minuti.</strong> Dopo la compilazione, un membro del team ti contatterà entro 48 ore per una valutazione iniziale.
                        </p>
                        <p>
                            Se questo approccio non è adatto alla tua situazione, te lo dico.
                        </p>
                    </div>

                    <a href="https://tally.so/r/5BGPKN" target="_blank" rel="noopener noreferrer" className="btn-accent btn-accent-glow px-10 py-5 rounded-full inline-flex items-center justify-center gap-4 text-white hover:scale-105 transition-all duration-300 w-full sm:w-auto overflow-hidden relative group">
                        <span className="font-display font-bold text-lg md:text-xl tracking-wide relative z-10 w-full text-center">Compila il questionario</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
                    </a>

                </div>

            </div>
        </section>
    );
}
