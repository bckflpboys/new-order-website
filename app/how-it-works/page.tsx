'use client';

import React, { useState } from 'react';
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

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('detection');

    const features = [
        {
            id: 'detection',
            title: 'AI Auto-Detection',
            icon: 'lucide:sparkles',
            color: 'from-violet-500 to-purple-500',
            description: 'Smart AI-powered title & genre detection from streaming platforms',
        },
        {
            id: 'trending',
            title: 'Trending Movies',
            icon: 'lucide:trending-up',
            color: 'from-fuchsia-500 to-pink-500',
            description: 'Browse and discover trending movies with one click',
        },
        {
            id: 'rating',
            title: 'Rating System',
            icon: 'lucide:sliders-horizontal',
            color: 'from-cyan-500 to-blue-500',
            description: 'Flexible rating categories with custom fields',
        },
        {
            id: 'management',
            title: 'Data Management',
            icon: 'lucide:database',
            color: 'from-emerald-500 to-green-500',
            description: 'Search, filter, sort, and export your ratings',
        },
    ];

    const platforms = [
        { name: 'Netflix', icon: 'simple-icons:netflix' },
        { name: 'Prime Video', icon: 'simple-icons:amazonprime' },
        { name: 'Disney+', icon: 'simple-icons:disneyplus' },
        { name: 'Hulu', icon: 'simple-icons:hulu' },
        { name: 'HBO Max', icon: 'simple-icons:hbo' },
        { name: 'Apple TV+', icon: 'simple-icons:appletv' },
        { name: 'YouTube', icon: 'simple-icons:youtube' },
        { name: 'Vimeo', icon: 'simple-icons:vimeo' },
    ];

    const ratingCategories = [
        { name: 'First 30 Minutes', icon: 'lucide:play-circle', description: 'Rate the opening act' },
        { name: 'Middle Hour', icon: 'lucide:film', description: 'Evaluate the main story' },
        { name: 'Last 30 Minutes', icon: 'lucide:flag', description: 'Judge the conclusion' },
        { name: 'Sound Design', icon: 'lucide:volume-2', description: 'Audio quality and effects' },
        { name: 'Music Score', icon: 'lucide:music', description: 'Soundtrack and composition' },
        { name: 'Visual Quality', icon: 'lucide:eye', description: 'Picture quality and effects' },
        { name: 'Directing', icon: 'lucide:video', description: 'Director\'s vision' },
        { name: 'Acting', icon: 'lucide:users', description: 'Performance quality' },
        { name: 'Screenplay', icon: 'lucide:file-text', description: 'Writing and dialogue' },
        { name: 'Cinematography', icon: 'lucide:camera', description: 'Visual storytelling' },
    ];

    const customFieldTypes = [
        { type: 'Text', icon: 'lucide:type', example: 'Director name' },
        { type: 'Long Text', icon: 'lucide:align-left', example: 'Full review' },
        { type: 'Number', icon: 'lucide:hash', example: 'Budget amount' },
        { type: 'Date', icon: 'lucide:calendar', example: 'Release date' },
        { type: 'Date & Time', icon: 'lucide:calendar-clock', example: 'Watch timestamp' },
        { type: 'Dropdown', icon: 'lucide:list', example: 'Genre selection' },
        { type: 'Rating Slider', icon: 'lucide:sliders-horizontal', example: 'Rewatchability' },
    ];

    return (
        <main className="bg-black min-h-screen">
            <HeaderWrapper />

            {/* Hero Section */}
            <section className="relative pt-44 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid z-0 mask-image-gradient pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C39EFF]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B2FFD6]/10 border border-[#B2FFD6]/20 text-[10px] font-medium text-[#B2FFD6] mb-6 uppercase tracking-wider">
                            <iconify-icon icon="lucide:book-open" width="12"></iconify-icon>
                            Complete Guide
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                            How <span className="text-[#C39EFF] drop-shadow-[0_0_8px_rgba(195,158,255,0.5)]">Movie Rating Pro</span> Works
                        </h1>

                        <p className="text-lg text-[#B2FFD6] max-w-2xl mx-auto leading-relaxed">
                            A comprehensive guide to mastering every feature of the most powerful movie rating extension for Chrome.
                        </p>
                    </div>

                    {/* Feature Tabs */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
                        {features.map((feature) => (
                            <button
                                key={feature.id}
                                onClick={() => setActiveTab(feature.id)}
                                className={`p-6 rounded-xl border transition-all duration-300 ${activeTab === feature.id
                                    ? 'bg-[#111019] border-[#C39EFF]/50 shadow-lg shadow-[#C39EFF]/20'
                                    : 'bg-[#0B0A13] border-white/5 hover:border-white/10'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                                    <iconify-icon icon={feature.icon} width="24" className="text-white"></iconify-icon>
                                </div>
                                <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Auto-Detection Section */}
            {activeTab === 'detection' && (
                <section className="py-20 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-4">
                                    <iconify-icon icon="lucide:sparkles" width="12"></iconify-icon>
                                    AI-Powered Detection
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Smart AI Title Detection
                                </h2>
                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    Movie Rating Pro uses advanced AI algorithms to instantly analyze the DOM of streaming platforms, detecting movie titles and genres with near-perfect accuracy.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <iconify-icon icon="lucide:check" width="14" className="text-violet-400"></iconify-icon>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Platform-Specific Detection</h4>
                                            <p className="text-sm text-slate-400">Optimized selectors for major streaming services</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <iconify-icon icon="lucide:check" width="14" className="text-violet-400"></iconify-icon>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Meta Tag Analysis</h4>
                                            <p className="text-sm text-slate-400">Reads Open Graph and Twitter Card metadata</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <iconify-icon icon="lucide:check" width="14" className="text-violet-400"></iconify-icon>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Manual Refresh</h4>
                                            <p className="text-sm text-slate-400">Re-detect button for dynamic content</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 to-fuchsia-600/30 rounded-2xl blur opacity-30"></div>
                                <div className="relative bg-[#0F0E17] rounded-xl border border-white/10 p-6">
                                    <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                                        <iconify-icon icon="lucide:globe" width="16" className="text-violet-400"></iconify-icon>
                                        Supported Platforms
                                    </h3>
                                    <div className="grid grid-cols-4 gap-3">
                                        {platforms.map((platform) => (
                                            <div
                                                key={platform.name}
                                                className="aspect-square rounded-lg bg-[#111019] border border-white/5 flex flex-col items-center justify-center gap-2 hover:border-violet-500/30 transition-all group"
                                            >
                                                <iconify-icon icon={platform.icon} width="24" className="text-slate-400 group-hover:text-violet-400 transition-colors"></iconify-icon>
                                                <span className="text-[9px] text-slate-500 text-center px-1">{platform.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 p-4 rounded-lg bg-[#111019] border border-violet-500/20">
                                        <div className="flex items-center gap-2 mb-2">
                                            <iconify-icon icon="lucide:info" width="14" className="text-violet-400"></iconify-icon>
                                            <span className="text-xs font-semibold text-white">How It Works</span>
                                        </div>
                                        <ol className="text-xs text-slate-400 space-y-1.5 list-decimal list-inside">
                                            <li>Navigate to any supported platform</li>
                                            <li>Click the extension icon in your toolbar</li>
                                            <li>Title auto-fills instantly</li>
                                            <li>Start rating immediately</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Trending Movies Section */}
            {activeTab === 'trending' && (
                <section className="py-20 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div className="order-2 md:order-1">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600/30 to-pink-600/30 rounded-2xl blur opacity-30"></div>
                                    <div className="relative bg-[#0F0E17] rounded-xl border border-white/10 p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                                                <iconify-icon icon="lucide:trending-up" width="16" className="text-fuchsia-400"></iconify-icon>
                                                Trending This Week
                                            </h3>
                                            <div className="text-[10px] text-slate-500 bg-[#111019] px-2 py-1 rounded">TMDB API</div>
                                        </div>

                                        {/* Mock Trending Movies */}
                                        <div className="space-y-3">
                                            {[
                                                { title: 'Dune: Part Two', rating: 8.7, poster: '🏜️' },
                                                { title: 'Oppenheimer', rating: 8.9, poster: '💥' },
                                                { title: 'The Holdovers', rating: 8.2, poster: '🎓' },
                                            ].map((movie, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 p-3 rounded-lg bg-[#111019] border border-white/5 hover:border-fuchsia-500/30 transition-all cursor-pointer group"
                                                >
                                                    <div className="w-12 h-16 rounded bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-2xl">
                                                        {movie.poster}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-sm font-semibold text-white group-hover:text-fuchsia-300 transition-colors">{movie.title}</h4>
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <iconify-icon icon="lucide:star" width="10" className="text-yellow-500" fill="currentColor"></iconify-icon>
                                                            <span className="text-xs text-slate-400">{movie.rating}/10</span>
                                                        </div>
                                                    </div>
                                                    <iconify-icon icon="lucide:arrow-right" width="16" className="text-slate-600 group-hover:text-fuchsia-400 transition-colors"></iconify-icon>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-4 p-3 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20">
                                            <p className="text-xs text-fuchsia-300">
                                                <iconify-icon icon="lucide:mouse-pointer-click" width="12" className="inline mr-1"></iconify-icon>
                                                Click any movie to auto-fill the title field
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-xs font-medium text-fuchsia-300 mb-4">
                                    <iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
                                    Discover Movies
                                </div>
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Trending Movies Carousel
                                </h2>
                                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                    Browse the top 10 trending movies of the week, powered by The Movie Database (TMDB) API. Discover what&apos;s popular and rate them instantly.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <iconify-icon icon="lucide:check" width="14" className="text-fuchsia-400"></iconify-icon>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Auto-Scrolling Carousel</h4>
                                            <p className="text-sm text-slate-400">Smooth animations with pause on hover</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <iconify-icon icon="lucide:check" width="14" className="text-fuchsia-400"></iconify-icon>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">One-Click Auto-Fill</h4>
                                            <p className="text-sm text-slate-400">Click any movie to instantly fill the title</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <iconify-icon icon="lucide:check" width="14" className="text-fuchsia-400"></iconify-icon>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white mb-1">Collapsible Section</h4>
                                            <p className="text-sm text-slate-400">Save space when you don&apos;t need it</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Rating System Section */}
            {activeTab === 'rating' && (
                <section className="py-20 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300 mb-4">
                                <iconify-icon icon="lucide:sliders-horizontal" width="12"></iconify-icon>
                                Flexible & Powerful
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Advanced Rating System
                            </h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                10 default rating categories (all optional) plus unlimited custom fields to rate movies exactly how you want.
                            </p>
                        </div>

                        {/* Default Rating Categories */}
                        <div className="mb-16">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <iconify-icon icon="lucide:list-checks" width="20" className="text-cyan-400"></iconify-icon>
                                Default Rating Categories
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {ratingCategories.map((category, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 rounded-lg bg-[#0F0E17] border border-white/5 hover:border-cyan-500/30 transition-all group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                            <iconify-icon icon={category.icon} width="18" className="text-white"></iconify-icon>
                                        </div>
                                        <h4 className="text-sm font-semibold text-white mb-1">{category.name}</h4>
                                        <p className="text-xs text-slate-400">{category.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                <p className="text-sm text-cyan-300 flex items-center gap-2">
                                    <iconify-icon icon="lucide:settings" width="16"></iconify-icon>
                                    All categories can be enabled/disabled from Settings. Only enabled categories count toward the total score.
                                </p>
                            </div>
                        </div>

                        {/* Custom Fields */}
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <iconify-icon icon="lucide:plus-circle" width="20" className="text-cyan-400"></iconify-icon>
                                Custom Field Types
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {customFieldTypes.map((field, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-lg bg-[#0F0E17] border border-white/5 hover:border-cyan-500/30 transition-all"
                                    >
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 rounded bg-[#111019] flex items-center justify-center">
                                                <iconify-icon icon={field.icon} width="16" className="text-cyan-400"></iconify-icon>
                                            </div>
                                            <h4 className="text-sm font-semibold text-white">{field.type}</h4>
                                        </div>
                                        <p className="text-xs text-slate-400 italic">e.g., {field.example}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 grid md:grid-cols-2 gap-4">
                                <div className="p-4 rounded-lg bg-[#0F0E17] border border-white/5">
                                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                        <iconify-icon icon="lucide:infinity" width="14" className="text-cyan-400"></iconify-icon>
                                        Unlimited Custom Fields
                                    </h4>
                                    <p className="text-xs text-slate-400">Add as many custom fields as you need for your rating workflow</p>
                                </div>
                                <div className="p-4 rounded-lg bg-[#0F0E17] border border-white/5">
                                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                        <iconify-icon icon="lucide:calculator" width="14" className="text-cyan-400"></iconify-icon>
                                        Custom Sliders Count
                                    </h4>
                                    <p className="text-xs text-slate-400">Custom rating sliders contribute to your total movie score</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Data Management Section */}
            {activeTab === 'management' && (
                <section className="py-20 relative">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300 mb-4">
                                <iconify-icon icon="lucide:database" width="12"></iconify-icon>
                                Complete Control
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Powerful Data Management
                            </h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                Search, filter, sort, and export your entire movie rating collection with ease.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Search */}
                            <div className="p-6 rounded-xl bg-[#0F0E17] border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                                        <iconify-icon icon="lucide:search" width="24" className="text-white"></iconify-icon>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Real-Time Search</h3>
                                        <p className="text-xs text-slate-400">Find movies instantly</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Search by movie title
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Instant results as you type
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Clear search button
                                    </li>
                                </ul>
                            </div>

                            {/* Filter */}
                            <div className="p-6 rounded-xl bg-[#0F0E17] border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                                        <iconify-icon icon="lucide:filter" width="24" className="text-white"></iconify-icon>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Advanced Filters</h3>
                                        <p className="text-xs text-slate-400">Narrow down results</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Filter by score range (9-10, 7-8, 5-6, 1-4)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Filter by date range
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Shows filtered result count
                                    </li>
                                </ul>
                            </div>

                            {/* Sort */}
                            <div className="p-6 rounded-xl bg-[#0F0E17] border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                                        <iconify-icon icon="lucide:arrow-up-down" width="24" className="text-white"></iconify-icon>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Flexible Sorting</h3>
                                        <p className="text-xs text-slate-400">Organize your way</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Sort by date (Newest/Oldest)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Sort by score (Highest/Lowest)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Sort by title (A-Z / Z-A)
                                    </li>
                                </ul>
                            </div>

                            {/* Export */}
                            <div className="p-6 rounded-xl bg-[#0F0E17] border border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                                        <iconify-icon icon="lucide:download" width="24" className="text-white"></iconify-icon>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">CSV Export</h3>
                                        <p className="text-xs text-slate-400">Backup and analyze</p>
                                    </div>
                                </div>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Export all ratings to spreadsheet
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Includes all categories and custom fields
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon icon="lucide:check" width="14" className="text-emerald-400"></iconify-icon>
                                        Opens in Excel/Google Sheets
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Quick Actions Bar */}
                        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <iconify-icon icon="lucide:zap" width="20" className="text-emerald-400"></iconify-icon>
                                Quick Actions Bar
                            </h3>
                            <p className="text-sm text-slate-300 mb-4">
                                Fast access to key features right below the header:
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 rounded-lg bg-[#0F0E17] border border-white/5 text-center">
                                    <iconify-icon icon="lucide:history" width="24" className="text-emerald-400 mb-2"></iconify-icon>
                                    <div className="text-sm font-semibold text-white">History</div>
                                    <div className="text-xs text-slate-400 mt-1">View all ratings</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#0F0E17] border border-white/5 text-center">
                                    <iconify-icon icon="lucide:settings" width="24" className="text-emerald-400 mb-2"></iconify-icon>
                                    <div className="text-sm font-semibold text-white">Settings</div>
                                    <div className="text-xs text-slate-400 mt-1">Configure extension</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#0F0E17] border border-white/5 text-center">
                                    <iconify-icon icon="lucide:download" width="24" className="text-emerald-400 mb-2"></iconify-icon>
                                    <div className="text-sm font-semibold text-white">Export</div>
                                    <div className="text-xs text-slate-400 mt-1">Download CSV</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Getting Started Section */}
            <section className="py-20 relative bg-[#0B0A13]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Getting Started in 3 Steps
                        </h2>
                        <p className="text-lg text-slate-300">
                            Start rating movies in under a minute
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/50">
                                1
                            </div>
                            <div className="p-6 rounded-xl bg-[#0F0E17] border border-white/5 pt-8">
                                <h3 className="text-lg font-bold text-white mb-3">Install Extension</h3>
                                <p className="text-sm text-slate-400 mb-4">
                                    Download from Chrome Web Store or load unpacked from GitHub
                                </p>
                                <div className="flex items-center gap-2 text-xs text-violet-400">
                                    <iconify-icon icon="lucide:chrome" width="14"></iconify-icon>
                                    Works on all Chromium browsers
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-fuchsia-500/50">
                                2
                            </div>
                            <div className="p-6 rounded-xl bg-[#0F0E17] border border-white/5 pt-8">
                                <h3 className="text-lg font-bold text-white mb-3">Navigate to Movie</h3>
                                <p className="text-sm text-slate-400 mb-4">
                                    Go to any streaming platform or video website
                                </p>
                                <div className="flex items-center gap-2 text-xs text-fuchsia-400">
                                    <iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
                                    AI detects title & genre automatically
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/50">
                                3
                            </div>
                            <div className="p-6 rounded-xl bg-[#0F0E17] border border-white/5 pt-8">
                                <h3 className="text-lg font-bold text-white mb-3">Rate & Save</h3>
                                <p className="text-sm text-slate-400 mb-4">
                                    Adjust sliders, fill custom fields, and save your rating
                                </p>
                                <div className="flex items-center gap-2 text-xs text-cyan-400">
                                    <iconify-icon icon="lucide:save" width="14"></iconify-icon>
                                    Stored locally on your device
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Overview */}
            <section className="py-20 relative">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Complete Feature List
                        </h2>
                        <p className="text-lg text-slate-300">
                            Everything you need to build your movie database
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: 'lucide:sparkles', title: 'Auto-Detect Titles', desc: 'From streaming platforms' },
                            { icon: 'lucide:trending-up', title: 'Trending Movies', desc: 'TMDB API integration' },
                            { icon: 'lucide:sliders-horizontal', title: '10 Rating Categories', desc: 'All optional and customizable' },
                            { icon: 'lucide:plus-circle', title: 'Custom Fields', desc: '7 field types, unlimited fields' },
                            { icon: 'lucide:search', title: 'Real-Time Search', desc: 'Find movies instantly' },
                            { icon: 'lucide:filter', title: 'Advanced Filters', desc: 'Score and date ranges' },
                            { icon: 'lucide:arrow-up-down', title: 'Flexible Sorting', desc: 'Date, score, or title' },
                            { icon: 'lucide:download', title: 'CSV Export', desc: 'Backup to spreadsheet' },
                            { icon: 'lucide:star', title: 'Visual Star Rating', desc: '5-star display system' },
                            { icon: 'lucide:calendar', title: 'Auto-Fill Date', desc: 'Automatic timestamps' },
                            { icon: 'lucide:eye', title: 'Detailed View', desc: 'Full rating breakdown' },
                            { icon: 'lucide:shield-check', title: 'Complete Privacy', desc: 'All data stored locally' },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                className="p-5 rounded-lg bg-[#0F0E17] border border-white/5 hover:border-[#C39EFF]/30 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <iconify-icon icon={feature.icon} width="20" className="text-white"></iconify-icon>
                                </div>
                                <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                                <p className="text-xs text-slate-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section for AEO */}
            <section className="py-20 relative bg-[#0B0A13]">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-400">
                            Common questions about using Movie Rating Pro
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "Does Movie Rating Pro work on all streaming sites?",
                                a: "Yes, the extension is designed to work on major platforms like Netflix, Prime Video, and Disney+. For unsupported sites, you can manually enter the movie title."
                            },
                            {
                                q: "Is my data private?",
                                a: "Absolutely. All your ratings and data are stored locally on your device. We do not track your viewing habits or collect personal information."
                            },
                            {
                                q: "Can I export my ratings?",
                                a: "Yes, you can export your entire rating history to a CSV file, which is compatible with Excel, Google Sheets, and other spreadsheet software."
                            },
                            {
                                q: "Is the extension free?",
                                a: "Yes, Movie Rating Pro is 100% free and open-source. There are no hidden costs or premium subscriptions."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-[#0F0E17] border border-white/5 hover:border-[#C39EFF]/30 transition-all">
                                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                                <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Rating?
                    </h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                        Install Movie Rating Pro today and build your personalized movie database with uncompromising precision.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://chromewebstore.google.com/detail/movie-rating-pro/onpnnalhfpdbjfnlhgeekehfndpijbkf" target="_blank" rel="noopener noreferrer" className="h-12 px-8 rounded-full bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#C39EFF]/30">
                            <iconify-icon icon="lucide:download" width="16"></iconify-icon>
                            <span>Install Extension</span>
                        </a>
                        <a href="https://github.com/bckflpboys/movie-rating-pro" target="_blank" rel="noopener noreferrer" className="h-12 px-8 rounded-full bg-black border border-[#C39EFF]/30 text-[#B2FFD6] text-sm font-medium hover:bg-[#0a0a0a] hover:border-[#C39EFF]/50 transition-all flex items-center justify-center">
                            View on GitHub
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            <PromoPopup />
        </main>
    );
};

export default HowItWorks;
