'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('layout');

    const features = [
        {
            id: 'layout',
            title: 'Layout Logic',
            icon: 'mdi:page-layout-sidebar-right',
            description: 'How we reorganize the chaos',
        },
        {
            id: 'controls',
            title: 'Controls',
            icon: 'mdi:tune-vertical',
            description: 'Customizing your view',
        },
        {
            id: 'theater',
            title: 'Theater Mode',
            icon: 'mdi:monitor-screenshot',
            description: 'Immersive viewing',
        },
    ];

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
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            How <span className="text-[#FF0000]">It Works</span>
                        </h1>
                        <p className="text-lg text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
                            Under the hood of the most efficient YouTube layout customizer.
                        </p>
                    </div>

                    {/* Feature Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                className={`p-6 rounded-xl border transition-all duration-300 w-full sm:w-64 text-left ${activeTab === feature.id
                                    ? 'bg-[#1f1f1f] border-[#FF0000] shadow-[0_0_20px_rgba(255,0,0,0.1)]'
                                    : 'bg-[#0a0a0a] border-[#303030] hover:border-[#555]'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-lg ${activeTab === feature.id ? 'bg-[#FF0000]' : 'bg-[#303030]'} flex items-center justify-center mb-4 transition-colors`}>
                                    <iconify-icon icon={feature.icon} width="24" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                                <p className="text-sm text-[#aaaaaa]">{feature.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Layout Section */}
            {activeTab === 'layout' && (
                <section className="py-12 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    Swapping the Columns
                                </h2>
                                <p className="text-lg text-[#aaaaaa] mb-6 leading-relaxed">
                                    Standard YouTube places comments at the bottom—forcing you to scroll away from the video to read the discussion. We use a DOM manipulation script to:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#1f1f1f] border border-[#303030] flex items-center justify-center shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-white">Identify Containers</h4>
                                            <p className="text-sm text-[#aaaaaa]">We locate the main video player, secondary column (sidebar), and comment section.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#1f1f1f] border border-[#303030] flex items-center justify-center shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-white">Swap Positions</h4>
                                            <p className="text-sm text-[#aaaaaa]">Comments are moved to the right sidebar. Related videos are moved below the main player.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-[#1f1f1f] border border-[#303030] flex items-center justify-center shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-white">Adjust Styling</h4>
                                            <p className="text-sm text-[#aaaaaa]">We inject custom CSS to ensure the comments fit perfectly in the sidebar width.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-[#1f1f1f] border border-[#303030] p-8 rounded-2xl flex items-center justify-center aspect-video">
                                <iconify-icon icon="mdi:page-layout-sidebar-right" width="128" style={{ color: '#333' }}></iconify-icon>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Controls Section */}
            {activeTab === 'controls' && (
                <section className="py-12 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 bg-[#1f1f1f] border border-[#303030] p-8 rounded-2xl flex items-center justify-center aspect-video">
                                <iconify-icon icon="mdi:tune-vertical" width="128" style={{ color: '#333' }}></iconify-icon>
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl font-bold text-white mb-6">
                                    You Have Control
                                </h2>
                                <p className="text-lg text-[#aaaaaa] mb-6 leading-relaxed">
                                    Open the extension popup to toggle specific features on or off instantly.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#303030]">
                                        <iconify-icon icon="mdi:arrow-expand-horizontal" width="24" className="text-[#FF0000] mb-2"></iconify-icon>
                                        <h3 className="font-bold text-white">Resizable Columns</h3>
                                        <p className="text-xs text-[#aaaaaa] mt-1">Drag the divider to change widths.</p>
                                    </div>
                                    <div className="p-4 bg-[#0a0a0a] rounded-lg border border-[#303030]">
                                        <iconify-icon icon="mdi:grid" width="24" className="text-[#FF0000] mb-2"></iconify-icon>
                                        <h3 className="font-bold text-white">Grid View</h3>
                                        <p className="text-xs text-[#aaaaaa] mt-1">See more related videos at once.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Theater Section */}
            {activeTab === 'theater' && (
                <section className="py-12 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-6">
                                True Theater Mode
                            </h2>
                            <p className="text-lg text-[#aaaaaa] mb-8">
                                Sometimes you just want to watch the video. Our collapsible sections allow you to hide the sidebar completely, centering the video player for a cinematic experience without distractions.
                            </p>
                            <div className="bg-[#1f1f1f] border border-[#303030] p-8 rounded-2xl flex items-center justify-center h-64">
                                <iconify-icon icon="mdi:monitor-shimmer" width="64" style={{ color: '#FF0000' }}></iconify-icon>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-24 border-t border-[#303030] mt-12 bg-[#0a0a0a]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to fix YouTube?</h2>
                    <button className="h-12 px-8 rounded-full bg-[#FF0000] text-white font-bold hover:bg-[#cc0000] transition-colors">
                        Add to Chrome — It's Free
                    </button>
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

export default HowItWorks;
