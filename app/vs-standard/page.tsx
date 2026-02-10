'use client';

import React from 'react';
import Link from 'next/link';

const ComparisonPage = () => {
    return (
        <main className="bg-[#0f0f0f] min-h-screen text-[#f1f1f1]">
            <nav className="border-b border-[#303030] bg-[#0f0f0f]/80 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF0000] to-[#cc0000] flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-7.6 11.31v-5.003l5.067 2.483-5.067 2.52z" fill="white" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg tracking-tight">YouTube New Order</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f1f1f] border border-[#303030] text-xs font-medium text-[#FF0000] mb-6 uppercase tracking-wider">
                            <iconify-icon icon="mdi:compare" width="12"></iconify-icon>
                            The Breakdown
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            YouTube New Order <span className="text-[#555] mx-4">vs</span> Standard
                        </h1>

                        <p className="text-lg text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
                            Why settle for the default layout when you can have a tailored viewing experience?
                        </p>
                    </div>

                    {/* Comparison Table */}
                    <div className="relative rounded-2xl border border-[#303030] bg-[#0a0a0a] overflow-hidden shadow-2xl">
                        <div className="grid grid-cols-3 border-b border-[#303030] bg-[#1f1f1f]">
                            <div className="p-6 text-sm font-semibold text-[#aaaaaa] flex items-center">Feature</div>
                            <div className="p-6 text-lg font-bold text-white flex items-center gap-3 border-l border-[#303030] bg-[#1a1a1a]">
                                <div className="w-6 h-6 rounded bg-[#FF0000] flex items-center justify-center">
                                    <span className="text-xs font-bold text-white">Y</span>
                                </div>
                                YouTube New Order
                            </div>
                            <div className="p-6 text-lg font-bold text-[#aaaaaa] flex items-center gap-3 border-l border-[#303030] bg-[#0f0f0f]">
                                <iconify-icon icon="logos:youtube-icon" width="24"></iconify-icon>
                                Standard YouTube
                            </div>
                        </div>

                        {/* Row 1: Comments */}
                        <div className="grid grid-cols-3 border-b border-[#303030] hover:bg-[#1f1f1f]/30 transition-colors">
                            <div className="p-6 text-sm font-medium text-[#dddddd] flex items-center gap-2">
                                <iconify-icon icon="mdi:comment-text-outline" width="16" className="text-[#FF0000]"></iconify-icon>
                                Comments Location
                            </div>
                            <div className="p-6 border-l border-[#303030]">
                                <div className="inline-flex items-center gap-2 text-white font-bold">
                                    Sidebar (Right)
                                </div>
                                <p className="text-xs text-[#aaaaaa] mt-1">Read while watching without scrolling.</p>
                            </div>
                            <div className="p-6 border-l border-[#303030] text-[#777]">
                                Bottom of Page <br />
                                <span className="text-xs p-1">(Must scroll away from video)</span>
                            </div>
                        </div>

                        {/* Row 2: Related Videos */}
                        <div className="grid grid-cols-3 border-b border-[#303030] hover:bg-[#1f1f1f]/30 transition-colors">
                            <div className="p-6 text-sm font-medium text-[#dddddd] flex items-center gap-2">
                                <iconify-icon icon="mdi:youtube-subscription" width="16" className="text-[#FF0000]"></iconify-icon>
                                Related Videos
                            </div>
                            <div className="p-6 border-l border-[#303030]">
                                <div className="inline-flex items-center gap-2 text-white font-bold">
                                    Bottom / Grid View
                                </div>
                                <p className="text-xs text-[#aaaaaa] mt-1">Out of sight, or organized in a grid.</p>
                            </div>
                            <div className="p-6 border-l border-[#303030] text-[#777]">
                                Sidebar (Right) <br />
                                <span className="text-xs p-1">(Distracting thumbnails)</span>
                            </div>
                        </div>

                        {/* Row 3: Customization */}
                        <div className="grid grid-cols-3 border-b border-[#303030] hover:bg-[#1f1f1f]/30 transition-colors">
                            <div className="p-6 text-sm font-medium text-[#dddddd] flex items-center gap-2">
                                <iconify-icon icon="mdi:resize" width="16" className="text-[#FF0000]"></iconify-icon>
                                Layout Control
                            </div>
                            <div className="p-6 border-l border-[#303030]">
                                <div className="inline-flex items-center gap-2 text-white font-bold">
                                    Fully Resizable
                                </div>
                                <p className="text-xs text-[#aaaaaa] mt-1">Drag to resize columns instantly.</p>
                            </div>
                            <div className="p-6 border-l border-[#303030] text-[#777]">
                                Fixed Width <br />
                                <span className="text-xs p-1">(No adjustment possible)</span>
                            </div>
                        </div>

                        {/* Row 4: Immersion */}
                        <div className="grid grid-cols-3 hover:bg-[#1f1f1f]/30 transition-colors">
                            <div className="p-6 text-sm font-medium text-[#dddddd] flex items-center gap-2">
                                <iconify-icon icon="mdi:monitor-star" width="16" className="text-[#FF0000]"></iconify-icon>
                                Viewing Experience
                            </div>
                            <div className="p-6 border-l border-[#303030]">
                                <div className="inline-flex items-center gap-2 text-white font-bold">
                                    Theater Mode
                                </div>
                                <p className="text-xs text-[#aaaaaa] mt-1">Collapse sidebar for pure video focus.</p>
                            </div>
                            <div className="p-6 border-l border-[#303030] text-[#777]">
                                Cluttered Interface
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold text-white mb-6">The Verdict?</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-6 rounded-xl bg-[#1f1f1f] border border-[#303030] text-left opacity-60">
                                <h3 className="text-[#aaaaaa] font-bold mb-2 flex items-center gap-2">
                                    Standard YouTube is for...
                                </h3>
                                <p className="text-[#777] text-sm">Casual viewers who don't mind scrolling and distractions.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-[#1f1f1f] border border-[#FF0000] text-left relative overflow-hidden shadow-[0_0_30px_rgba(255,0,0,0.1)]">
                                <h3 className="text-[#FF0000] font-bold mb-2 flex items-center gap-2">
                                    YouTube New Order is for...
                                </h3>
                                <p className="text-white text-sm">Power users who want to read comments while watching, customize their workspace, and focus on the content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-[#303030] bg-[#0f0f0f] py-12">
                <div className="max-w-7xl mx-auto px-6 text-center text-sm text-[#555]">
                    © {new Date().getFullYear()} YouTube New Order.
                </div>
            </footer>
        </main>
    );
};

export default ComparisonPage;
