'use client';

import React from 'react';
import Image from 'next/image';
import HeaderWrapper from '../components/HeaderWrapper';
import Footer from '../components/Footer';
import PromoPopup from '../components/PromoPopup';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                icon: string;
                width?: string;
                'stroke-width'?: string;
                fill?: string;
            };
        }
    }
}

const ComparisonPage = () => {
    return (
        <main className="bg-black min-h-screen">
            <HeaderWrapper />

            {/* Hero Section */}
            <section className="relative pt-44 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid z-0 mask-image-gradient pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-medium text-orange-300 mb-6 uppercase tracking-wider">
                            <iconify-icon icon="lucide:swords" width="12"></iconify-icon>
                            The Ultimate Comparison
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            Movie Rating Pro <span className="text-slate-500 text-4xl align-middle mx-2">vs</span> <span className="text-[#00E054]">Letterboxd</span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Why cinephiles are switching to the AI-powered extension for a faster, more private, and customizable rating experience.
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="relative rounded-2xl border border-white/10 bg-[#0F0E17] overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-3 border-b border-white/10 bg-[#151520]">
                            <div className="p-6 text-sm font-semibold text-slate-400 flex items-center">Feature</div>
                            <div className="p-6 text-lg font-bold text-white flex items-center gap-3 border-l border-white/5 bg-[#1A1A24]">
                                <Image src="/mrp-logo-text.png" alt="MRP" width={24} height={24} className="w-6 h-6 object-contain" />
                                Movie Rating Pro
                            </div>
                            <div className="p-6 text-lg font-bold text-[#00E054] flex items-center gap-3 border-l border-white/5 bg-[#14181C]">
                                <iconify-icon icon="simple-icons:letterboxd" width="24"></iconify-icon>
                                Letterboxd
                            </div>
                        </div>

                        {/* Row 1: Detection */}
                        <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 text-sm font-medium text-slate-300 flex items-center gap-2">
                                <iconify-icon icon="lucide:sparkles" width="16" className="text-violet-400"></iconify-icon>
                                Logging Method
                            </div>
                            <div className="p-6 border-l border-white/5">
                                <div className="inline-flex items-center gap-2 text-[#B2FFD6] font-semibold">
                                    <iconify-icon icon="lucide:zap" width="16"></iconify-icon>
                                    AI Auto-Detection
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Instantly detects title from Netflix, Prime, etc.</p>
                            </div>
                            <div className="p-6 border-l border-white/5 text-slate-400">
                                Manual Search & Entry
                            </div>
                        </div>

                        {/* Row 2: Privacy */}
                        <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 text-sm font-medium text-slate-300 flex items-center gap-2">
                                <iconify-icon icon="lucide:shield" width="16" className="text-violet-400"></iconify-icon>
                                Data Privacy
                            </div>
                            <div className="p-6 border-l border-white/5">
                                <div className="inline-flex items-center gap-2 text-white font-semibold">
                                    <iconify-icon icon="lucide:lock" width="16" className="text-emerald-400"></iconify-icon>
                                    100% Local & Private
                                </div>
                                <p className="text-xs text-slate-500 mt-1">No tracking, no public profile required.</p>
                            </div>
                            <div className="p-6 border-l border-white/5 text-slate-400">
                                Public Social Profile
                            </div>
                        </div>

                        {/* Row 3: Customization */}
                        <div className="grid grid-cols-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 text-sm font-medium text-slate-300 flex items-center gap-2">
                                <iconify-icon icon="lucide:sliders" width="16" className="text-violet-400"></iconify-icon>
                                Rating Criteria
                            </div>
                            <div className="p-6 border-l border-white/5">
                                <div className="inline-flex items-center gap-2 text-white font-semibold">
                                    <iconify-icon icon="lucide:infinity" width="16" className="text-cyan-400"></iconify-icon>
                                    Unlimited Custom Fields
                                </div>
                                <p className="text-xs text-slate-500 mt-1">Add sliders for Acting, Music, etc.</p>
                            </div>
                            <div className="p-6 border-l border-white/5 text-slate-400">
                                5-Star System Only
                            </div>
                        </div>

                        {/* Row 4: Cost */}
                        <div className="grid grid-cols-3 hover:bg-white/[0.02] transition-colors">
                            <div className="p-6 text-sm font-medium text-slate-300 flex items-center gap-2">
                                <iconify-icon icon="lucide:coins" width="16" className="text-violet-400"></iconify-icon>
                                Advanced Stats
                            </div>
                            <div className="p-6 border-l border-white/5">
                                <div className="inline-flex items-center gap-2 text-[#B2FFD6] font-bold text-lg">
                                    Free Forever
                                </div>
                            </div>
                            <div className="p-6 border-l border-white/5 text-slate-400">
                                Paid Subscription (Pro/Patron)
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">The Verdict?</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-6 rounded-xl bg-[#14181C] border border-white/5 text-left">
                                <h3 className="text-[#00E054] font-bold mb-2 flex items-center gap-2">
                                    <iconify-icon icon="simple-icons:letterboxd" width="18"></iconify-icon>
                                    Letterboxd is great for...
                                </h3>
                                <p className="text-slate-400 text-sm">Socializing, following friends, and reading public reviews from the community.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-[#1A1A24] border border-[#C39EFF]/30 text-left relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-[#C39EFF]/10 blur-xl rounded-full"></div>
                                <h3 className="text-[#C39EFF] font-bold mb-2 flex items-center gap-2">
                                    <Image src="/mrp-logo-text.png" alt="" width={16} height={16} className="w-4 h-4" />
                                    Movie Rating Pro is best for...
                                </h3>
                                <p className="text-slate-300 text-sm">Serious tracking, detailed analysis, privacy, and automated convenience while watching.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <PromoPopup />
        </main>
    );
};

export default ComparisonPage;
