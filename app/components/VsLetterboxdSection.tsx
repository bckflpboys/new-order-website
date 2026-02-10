import React from 'react';



const VsLetterboxdSection = () => {
    return (
        <section className="py-20 bg-[#0B0A13] border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E054]/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E054]/10 border border-[#00E054]/20 text-[10px] font-medium text-[#00E054] mb-6 uppercase tracking-wider">
                            <iconify-icon icon="lucide:swords" width="12"></iconify-icon>
                            The Better Alternative
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Why switch from <br />
                            <span className="text-[#00E054]">Letterboxd?</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Stop manually searching for movies. Movie Rating Pro uses AI to auto-detect what you&apos;re watching and lets you rate with unlimited custom fields—all while keeping your data 100% private.
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#00E054]/10 flex items-center justify-center text-[#00E054]">
                                    <iconify-icon icon="lucide:check" width="16"></iconify-icon>
                                </div>
                                <span className="text-slate-300">AI Auto-Detection vs Manual Entry</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#00E054]/10 flex items-center justify-center text-[#00E054]">
                                    <iconify-icon icon="lucide:check" width="16"></iconify-icon>
                                </div>
                                <span className="text-slate-300">Unlimited Custom Fields vs Limited Rating</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#00E054]/10 flex items-center justify-center text-[#00E054]">
                                    <iconify-icon icon="lucide:check" width="16"></iconify-icon>
                                </div>
                                <span className="text-slate-300">Local Privacy vs Public Profile</span>
                            </div>
                        </div>

                        <a
                            href="/vs-letterboxd"
                            className="inline-flex items-center gap-2 text-[#00E054] font-bold hover:text-[#00E054]/80 transition-colors group"
                        >
                            See Full Comparison
                            <iconify-icon icon="lucide:arrow-right" width="16" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                        </a>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00E054]/20 to-transparent blur-3xl opacity-20"></div>
                        <div className="relative bg-[#14181C] rounded-2xl border border-white/10 p-8 shadow-2xl">
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <div className="text-center flex-1 border-r border-white/5">
                                    <div className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Letterboxd</div>
                                    <div className="text-red-400 font-bold flex items-center justify-center gap-1">
                                        <iconify-icon icon="lucide:x" width="16"></iconify-icon>
                                        Manual
                                    </div>
                                </div>
                                <div className="text-center flex-1">
                                    <div className="text-xs text-[#C39EFF] mb-1 uppercase tracking-wider font-bold">Movie Rating Pro</div>
                                    <div className="text-[#00E054] font-bold flex items-center justify-center gap-1">
                                        <iconify-icon icon="lucide:check" width="16"></iconify-icon>
                                        AI Auto-Detect
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                    <span className="text-sm text-slate-400">Privacy</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-slate-500 line-through">Public</span>
                                        <iconify-icon icon="lucide:arrow-right" width="12" className="text-slate-600"></iconify-icon>
                                        <span className="text-xs text-[#00E054] font-bold">100% Private</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
                                    <span className="text-sm text-slate-400">Cost</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-slate-500 line-through">$19/yr</span>
                                        <iconify-icon icon="lucide:arrow-right" width="12" className="text-slate-600"></iconify-icon>
                                        <span className="text-xs text-[#00E054] font-bold">Free Forever</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VsLetterboxdSection;
