import React, { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function MasterclassPage({ onBack }) {
    const pageRef = useRef(null);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });

        const ctx = gsap.context(() => {
            // Initial state for all animated elements
            gsap.set('.mc-hero-line', { y: 10, opacity: 0, force3D: true });
            gsap.set('.mc-reveal', { y: 10, opacity: 0, force3D: true });
            gsap.set('.mc-card-reveal', { y: 10, opacity: 0, force3D: true });
            gsap.set('.mc-why-reveal', { y: 10, opacity: 0, force3D: true });
            gsap.set('.mc-waitlist-reveal', { y: 10, opacity: 0, force3D: true });

            // Hero fires immediately on mount
            gsap.to('.mc-hero-line', { y: 0, opacity: 1, stagger: 0.08, duration: 0.65, ease: 'power2.out', delay: 0.1, force3D: true, clearProps: 'transform' });

            // Each sub-section triggers when it enters the viewport
            ['.mc-section-2', '.mc-cards', '.mc-section-why', '.mc-section-waitlist'].forEach((selector, i) => {
                const targets = ['.mc-reveal', '.mc-card-reveal', '.mc-why-reveal', '.mc-waitlist-reveal'][i];
                ScrollTrigger.create({
                    trigger: selector,
                    start: 'top bottom',
                    once: true,
                    onEnter: () => gsap.to(targets, {
                        y: 0, opacity: 1, stagger: 0.055, duration: 0.65, ease: 'power2.out', force3D: true, clearProps: 'transform',
                    }),
                });
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        try {
            const res = await fetch('https://formspree.io/f/mgorrkaz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (res.ok) setSubmitted(true);
        } catch {
            // rete non disponibile, ignora silenziosamente
        }
    };

    return (
        <div ref={pageRef} className="relative min-h-[100dvh] w-full bg-cloud text-ink overflow-x-hidden">

            {/* Background orbs — same visual language as main site */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="glow-orb glow-orb-blush absolute top-[0%] left-[-5%] w-[55vw] h-[55vw] max-w-[600px]" style={{ animationDelay: '0s' }}></div>
                <div className="glow-orb glow-orb-coral absolute bottom-[15%] right-[-5%] w-[45vw] h-[45vw] max-w-[550px]" style={{ animationDelay: '3s' }}></div>
                <div className="glow-orb glow-orb-trust absolute top-[50%] right-[20%] w-[30vw] h-[30vw] max-w-[380px]" style={{ animationDelay: '5s' }}></div>
                <div className="absolute inset-0 noise-overlay"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">

                {/* Back nav */}
                <div className="pt-10 pb-4">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-widest text-ink/50 hover:text-coral transition-colors duration-300 group"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        Torna al sito
                    </button>
                </div>

                {/* ─── HERO ─── */}
                <section className="pt-20 md:pt-28 pb-20 md:pb-32 max-w-[820px]">

                    <div className="mc-hero-line mb-6 flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-coral/50"></span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
                            Masterclass di Gruppo · In costruzione
                        </span>
                    </div>

                    <h1 className="mc-hero-line font-serif italic text-5xl md:text-7xl lg:text-8xl text-ink font-semibold leading-[1.05] tracking-tight mb-8">
                        Non è ancora
                        <br />
                        <span className="text-coral glow-text-coral">pronta.</span>
                    </h1>

                    <p className="mc-hero-line font-sans text-lg md:text-xl text-ink/70 leading-relaxed max-w-[55ch]">
                        La masterclass di gruppo esiste già nella struttura. Manca ancora qualcosa prima di aprirla nel modo giusto.
                    </p>

                    <p className="mc-hero-line font-sans text-base text-ink/50 leading-relaxed max-w-[50ch] mt-4">
                        Questa pagina dice cosa sarà, come sarà costruita, e come puoi sapere quando apre.
                    </p>

                    {/* Decorative rule */}
                    <div className="mc-hero-line mt-12 h-px w-32 bg-gradient-to-r from-coral/40 to-transparent"></div>
                </section>

                {/* ─── SECTION 2: Quello che è già definito ─── */}
                <section className="mc-section-2 pb-24 md:pb-36">

                    <div className="mc-reveal mb-14">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 block mb-5">
                            Quello che è già definito
                        </span>
                        <h2 className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-ink font-semibold leading-tight max-w-[640px]">
                            Il formato è chiaro.
                            <br />
                            La struttura è chiara.
                        </h2>
                    </div>

                    <div className="mc-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px]">

                        {/* Card 1 */}
                        <div className="mc-card-reveal glass-card-premium p-8 rounded-[2.5rem] shadow-[0_8px_32px_-12px_rgba(212,169,154,0.15)] flex flex-col gap-4">
                            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-coral/70">Struttura</span>
                            <div className="space-y-2.5">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-serif italic text-4xl text-coral font-semibold">6</span>
                                    <span className="font-sans text-sm text-ink/70 leading-snug">settimane di lavoro strutturato</span>
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <span className="font-serif italic text-4xl text-coral font-semibold">6</span>
                                    <span className="font-sans text-sm text-ink/70 leading-snug">persone per gruppo — massimo</span>
                                </div>
                                <div className="flex items-baseline gap-3">
                                    <span className="font-serif italic text-4xl text-coral font-semibold">1h</span>
                                    <span className="font-sans text-sm text-ink/70 leading-snug">a settimana, in sessione live</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="mc-card-reveal glass-card-premium p-8 rounded-[2.5rem] shadow-[0_8px_32px_-12px_rgba(212,169,154,0.15)] flex flex-col gap-4">
                            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-coral/70">Metodo</span>
                            <p className="font-sans text-base text-ink/80 leading-relaxed">
                                Stesso protocollo del percorso individuale. Non una versione ridotta. Non una variante soft.
                            </p>
                            <p className="font-sans text-sm text-ink/55 leading-relaxed">
                                Indicatori concordati, lavoro tra le sessioni, verifica dei progressi. Il gruppo non abbassa gli standard.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="mc-card-reveal glass-card-premium p-8 rounded-[2.5rem] shadow-[0_8px_32px_-12px_rgba(212,169,154,0.15)] flex flex-col gap-4 md:col-span-2 lg:col-span-1">
                            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-coral/70">Accesso</span>
                            <p className="font-sans text-sm text-ink/60 leading-relaxed">
                                Ogni edizione lavora su un problema specifico circoscritto. Non si entra per qualsiasi motivo. Si entra se quel problema è il tuo.
                            </p>
                        </div>

                    </div>

                    {/* Pull quote */}
                    <blockquote className="mc-reveal mt-16 border-l-2 border-coral/30 pl-8 py-2 max-w-[520px]">
                        <p className="font-serif italic text-xl md:text-2xl text-ink/75 leading-relaxed">
                            "Il gruppo aggiunge una cosa sola: quando gli altri si muovono e tu no, le scuse cadono."
                        </p>
                    </blockquote>
                </section>

                {/* ─── SECTION WHY ─── */}
                <section className="mc-section-why pb-24 md:pb-36 relative">

                    <div className="mc-why-reveal flex flex-col items-center text-center mb-16 md:mb-20">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 block mb-5">
                            Perché stiamo aspettando
                        </span>
                        <h2 className="font-serif italic text-4xl md:text-5xl lg:text-5xl text-ink font-semibold leading-[1.1] max-w-[800px] mb-8">
                            Un gruppo funziona solo se le persone ci sono per il <span className="text-coral">problema giusto.</span>
                        </h2>
                        <p className="font-sans text-lg md:text-xl text-ink/70 leading-relaxed max-w-[650px]">
                            Non per compagnia. Non per sentirsi meno soli. Non per avere qualcuno che capisce.
                        </p>
                    </div>

                    <div className="mc-why-reveal max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-0 sm:px-4">
                        <div className="glass-panel p-8 md:p-12 flex flex-col bg-white/20">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/40 mb-10 block">
                                La Forma Sbagliata
                            </span>
                            <ul className="space-y-8">
                                {[
                                    'Uno spazio di ascolto collettivo',
                                    'Un corso con slide e contenuti',
                                    'Un gruppo di supporto emotivo'
                                ].map((text, i) => (
                                    <li key={i} className="flex flex-col gap-2 border-l-[1.5px] border-ink/15 pl-5">
                                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-ink/35">Non è</span>
                                        <span className="font-sans text-base md:text-lg text-ink/75 leading-tight">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card-premium bg-white/60 p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-coral/80 mb-10 block">
                                    L'Obiettivo Esatto
                                </span>
                                <p className="font-sans text-2xl md:text-3xl text-ink leading-[1.3] font-medium mb-4">
                                    Un percorso con obiettivo, struttura e verifica.
                                </p>
                                <p className="font-serif italic text-xl md:text-2xl text-coral/80">
                                    In formato gruppo.
                                </p>
                            </div>
                            <div className="mt-12 pt-8 border-t border-ink/10">
                                <p className="font-sans text-sm md:text-base text-ink/65 leading-relaxed">
                                    Stiamo definendo l'edizione di apertura: il problema specifico su cui lavorerà il gruppo, i criteri di accesso, la struttura operativa settimana per settimana.
                                    <br /><br />
                                    <strong className="font-bold text-ink">Prima di aprirlo, deve essere esatto.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ─── WAITLIST ─── */}
                <section className="mc-section-waitlist pb-32 md:pb-44 flex justify-center">

                    <div className="mc-waitlist-reveal glass-card-premium rounded-[3rem] shadow-[0_8px_32px_-12px_rgba(212,169,154,0.18)] p-10 md:p-16 max-w-[840px] w-full relative overflow-hidden bg-white/40 text-center">
                        {/* Subtle top highlight */}
                        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-coral/40 to-transparent"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-coral/70 block mb-6">
                                Se vuoi sapere quando apre
                            </span>

                            <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-ink font-semibold leading-[1.1] mb-5">
                                Una comunicazione.<br />Una sola.
                            </h3>

                            <p className="font-sans text-base md:text-lg text-ink/60 leading-relaxed mb-12 max-w-[44ch]">
                                Non è una newsletter. Non riceverai contenuti, aggiornamenti o promozioni. Ti scriviamo quando c'è una data.
                            </p>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10 w-full max-w-[420px]">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Inserisci la tua email"
                                        className="w-full bg-white border border-[#E7E5E4] rounded-2xl px-6 py-4 font-sans text-base text-center text-ink placeholder-ink/30 focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all duration-200"
                                    />
                                    <div className="relative w-full">
                                        <div className="absolute inset-[-4px] bg-coral/40 blur-[28px] rounded-full pointer-events-none translate-y-2"></div>
                                        <button
                                            type="submit"
                                            className="relative z-10 w-full btn-accent text-white font-sans font-bold text-base tracking-wide px-8 py-4 rounded-full shadow-lg"
                                        >
                                            Avvisami quando apre
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="py-5 px-8 bg-white/80 rounded-2xl border border-white inline-block">
                                    <p className="font-sans text-base font-medium text-ink/80">
                                        Ricevuto. Ti scriviamo quando c'è una data.
                                    </p>
                                </div>
                            )}

                            <p className="font-sans text-[11px] uppercase tracking-wider text-ink/35 mt-8 max-w-[40ch]">
                                Nessun dato condiviso con terze parti. Nessuna automazione. Un'email quando aprirà.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* Footer minimal */}
            <div className="relative z-10 border-t border-[#E7E5E4]/60 py-8 px-6 md:px-12 max-w-[1280px] mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <span className="font-display font-semibold text-base text-ink/70">Federica Recupito</span>
                    <button
                        onClick={onBack}
                        className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/40 hover:text-coral transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        Torna al sito
                    </button>
                </div>
            </div>
        </div>
    );
}
