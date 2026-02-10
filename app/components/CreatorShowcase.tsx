import React from 'react';

const CreatorShowcase = () => {
    return (
        <section className="py-20 relative overflow-hidden bg-black">
            <div className="absolute inset-0 bg-grid z-0 opacity-30 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C39EFF]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C39EFF]/10 border border-[#C39EFF]/20 text-xs font-medium text-[#C39EFF] mb-4">
                        <iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
                        Meet the Creator
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Built by <span className="text-[#C39EFF] drop-shadow-[0_0_8px_rgba(195,158,255,0.5)]">Devaura</span>
                    </h2>
                    <p className="text-lg text-[#B2FFD6] max-w-2xl mx-auto">
                        Movie Rating Pro is crafted by Devaura — a development studio specializing in web apps, browser extensions, websites, and games.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* What We Do */}
                    <div className="p-8 rounded-xl bg-[#0F0E17] border border-white/10 hover:border-[#C39EFF]/30 transition-all">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30">
                            <iconify-icon icon="lucide:code-2" width="28" className="text-white"></iconify-icon>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">What We Build</h3>
                        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                            From powerful browser extensions like Movie Rating Pro to full-stack web applications and interactive games — we turn ideas into reality.
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 text-sm text-[#B2FFD6]">
                                <iconify-icon icon="lucide:check-circle" width="16" className="text-[#C39EFF]"></iconify-icon>
                                Web Apps
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#B2FFD6]">
                                <iconify-icon icon="lucide:check-circle" width="16" className="text-[#C39EFF]"></iconify-icon>
                                Extensions
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#B2FFD6]">
                                <iconify-icon icon="lucide:check-circle" width="16" className="text-[#C39EFF]"></iconify-icon>
                                Websites
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#B2FFD6]">
                                <iconify-icon icon="lucide:check-circle" width="16" className="text-[#C39EFF]"></iconify-icon>
                                Games
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="p-8 rounded-xl bg-[#0F0E17] border border-white/10 hover:border-[#C39EFF]/30 transition-all">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                            <iconify-icon icon="lucide:rocket" width="28" className="text-white"></iconify-icon>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Why Devaura?</h3>
                        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                            We combine technical expertise with creative design to deliver products that users love. Movie Rating Pro is just one example of our work.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-[#B2FFD6]">
                                <iconify-icon icon="lucide:zap" width="16" className="text-yellow-400"></iconify-icon>
                                Fast & Efficient Development
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#B2FFD6]">
                                <iconify-icon icon="lucide:palette" width="16" className="text-pink-400"></iconify-icon>
                                Beautiful, Modern Design
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#B2FFD6]">
                                <iconify-icon icon="lucide:shield-check" width="16" className="text-green-400"></iconify-icon>
                                Reliable & Scalable Solutions
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Card */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-2xl blur opacity-40"></div>
                    <div className="relative p-8 md:p-12 rounded-xl bg-gradient-to-br from-[#0F0E17] to-[#111019] border border-[#C39EFF]/30">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Need a Custom App or Extension?
                                </h3>
                                <p className="text-slate-300 mb-6 leading-relaxed">
                                    Loved Movie Rating Pro? Imagine what we can build for your business. From concept to deployment, we handle everything.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://devaura.co.za"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 px-8 rounded-full bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C39EFF]/30"
                                    >
                                        <span>Explore Our Services</span>
                                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                                    </a>
                                    <a
                                        href="https://devaura.co.za/#contact"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 px-8 rounded-full bg-black border border-[#C39EFF]/30 text-[#B2FFD6] text-sm font-medium hover:bg-[#0a0a0a] hover:border-[#C39EFF]/50 transition-all flex items-center justify-center gap-2"
                                    >
                                        <iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                                        <span>Get in Touch</span>
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-4 rounded-lg bg-[#111019] border border-white/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                                            <iconify-icon icon="lucide:percent" width="16" className="text-violet-400"></iconify-icon>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white">Special Offer</h4>
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        Mention Movie Rating Pro and get <span className="text-[#C39EFF] font-semibold">10% off</span> your first project!
                                    </p>
                                </div>

                                <div className="p-4 rounded-lg bg-[#111019] border border-white/5">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                            <iconify-icon icon="lucide:calendar" width="16" className="text-cyan-400"></iconify-icon>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white">Free Consultation</h4>
                                    </div>
                                    <p className="text-xs text-slate-400">
                                        Book a free 30-minute consultation to discuss your project ideas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Teaser */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-400 mb-4">
                        Want to see more of our work?
                    </p>
                    <a
                        href="https://devaura.co.za/#portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#C39EFF] hover:text-[#B2FFD6] font-semibold transition-colors"
                    >
                        <span>View Our Portfolio</span>
                        <iconify-icon icon="lucide:external-link" width="16"></iconify-icon>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CreatorShowcase;
