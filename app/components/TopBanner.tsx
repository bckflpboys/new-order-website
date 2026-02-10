'use client';

import React, { useState } from 'react';

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

interface TopBannerProps {
    isVisible: boolean;
    onClose: () => void;
}

const TopBanner = ({ isVisible, onClose }: TopBannerProps) => {
    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Left side - Icon */}
                    <div className="hidden sm:flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <iconify-icon icon="lucide:sparkles" width="16" className="text-white"></iconify-icon>
                        </div>
                    </div>

                    {/* Center - Message */}
                    <div className="flex-1 flex items-center justify-center gap-3 text-center">
                        <p className="text-sm font-medium">
                            <span className="hidden md:inline">Love this extension? </span>
                            <span className="font-bold hidden sm:inline">Contact us to create your website & browser extensions</span>
                            <span className="font-bold sm:hidden">Build your own extension!</span>
                            <span className="hidden lg:inline"> — Professional development by Devaura</span>
                        </p>
                        <a
                            href="https://devaura.co.za/#contact"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-1.5 rounded-full bg-white text-violet-600 text-xs font-bold hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow-lg whitespace-nowrap"
                        >
                            <span>Get Started</span>
                            <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
                        </a>
                    </div>

                    {/* Right side - Close button */}
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-lg hover:bg-white/20 flex items-center justify-center transition-colors group"
                        aria-label="Close banner"
                    >
                        <iconify-icon icon="lucide:x" width="16" className="text-white group-hover:scale-110 transition-transform"></iconify-icon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
