import React from 'react';

export default function Trustpilot() {
    return (
        <section className="py-12 md:py-16 px-4 flex justify-center w-full z-10 relative">
            <div className="max-w-[1200px] w-full mx-auto text-center">
                <div className="glass-panel bg-white/60 p-8 md:p-10 rounded-[3rem] border border-white shadow-sm flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 hover:-translate-y-1 transition-transform cursor-pointer">
                    <div className="flex flex-col items-center md:items-start text-ink">
                        <p className="font-display font-medium text-lg md:text-xl text-ink/80">Eccezionale</p>
                        <div className="flex gap-1 mt-2">
                            {/* Stars mockup */}
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-8 h-8 bg-[#00b67a] text-white flex items-center justify-center font-bold text-xl rounded-sm">★</div>
                            ))}
                        </div>
                        <p className="font-sans text-[13px] text-ink/60 mt-3 font-medium">Basato su <strong className="font-bold text-ink/80">recensioni verificate</strong></p>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-ink/10"></div>
                    <div className="flex items-center gap-3 font-display text-3xl font-bold tracking-tight text-ink/80">
                        <span className="text-[#00b67a] text-4xl mt-[-2px]">★</span> Trustpilot
                    </div>
                </div>
            </div>
        </section>
    );
}
