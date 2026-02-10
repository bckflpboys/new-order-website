'use client';

import React, { useState, useEffect } from 'react';



const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure component only renders on client side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // Only run on client side
        if (!isMounted) return;

        console.log('PromoPopup: Will show in 7 seconds...');
        // Show popup after 7 seconds
        const timer = setTimeout(() => {
            console.log('PromoPopup: Showing now!');
            setIsVisible(true);
        }, 7000);

        return () => clearTimeout(timer);
    }, [isMounted]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    // Don't render anything during SSR or if not visible
    if (!isMounted || !isVisible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'
                    }`}
                onClick={handleClose}
            />

            {/* Popup Modal */}
            <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
                <div
                    className={`relative max-w-lg w-full transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                        }`}
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>

                    {/* Modal Content */}
                    <div className="relative bg-gradient-to-br from-[#0F0E17] to-[#111019] rounded-2xl border border-[#C39EFF]/30 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group z-10"
                            aria-label="Close popup"
                        >
                            <iconify-icon icon="lucide:x" width="18" className="text-white group-hover:scale-110 transition-transform"></iconify-icon>
                        </button>

                        {/* Header with Icon */}
                        <div className="p-6 md:p-8 pb-6 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 mb-4 shadow-lg shadow-violet-500/50">
                                <iconify-icon icon="lucide:sparkles" width="32" className="text-white"></iconify-icon>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                Want Your Own Extension?
                            </h2>

                            <p className="text-slate-300 text-base leading-relaxed max-w-md mx-auto">
                                Love Movie Rating Pro? We can build <span className="text-[#C39EFF] font-semibold">custom browser extensions</span>, <span className="text-[#B2FFD6] font-semibold">websites</span>, and <span className="text-[#C39EFF] font-semibold">web apps</span> tailored to your needs.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="px-6 md:px-8 pb-6">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="p-3 rounded-lg bg-[#1a1820] border border-white/5 text-center">
                                    <iconify-icon icon="lucide:puzzle" width="24" className="text-violet-400 mb-1"></iconify-icon>
                                    <div className="text-xs font-semibold text-white">Extensions</div>
                                </div>
                                <div className="p-3 rounded-lg bg-[#1a1820] border border-white/5 text-center">
                                    <iconify-icon icon="lucide:globe" width="24" className="text-fuchsia-400 mb-1"></iconify-icon>
                                    <div className="text-xs font-semibold text-white">Websites</div>
                                </div>
                                <div className="p-3 rounded-lg bg-[#1a1820] border border-white/5 text-center">
                                    <iconify-icon icon="lucide:smartphone" width="24" className="text-cyan-400 mb-1"></iconify-icon>
                                    <div className="text-xs font-semibold text-white">Web Apps</div>
                                </div>
                            </div>
                        </div>

                        {/* Special Offer Badge */}
                        <div className="px-6 md:px-8 pb-6">
                            <div className="p-4 rounded-xl bg-gradient-to-r from-[#C39EFF]/20 to-[#B2FFD6]/20 border border-[#C39EFF]/30">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-[#C39EFF] flex items-center justify-center flex-shrink-0">
                                        <iconify-icon icon="lucide:gift" width="20" className="text-black"></iconify-icon>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-bold text-white">Special Offer</div>
                                        <div className="text-xs text-slate-300">Get <span className="text-[#C39EFF] font-semibold">10% off</span> when you mention Movie Rating Pro!</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="px-6 md:px-8 pb-8">
                            <div className="flex flex-row gap-3">
                                <a
                                    href="https://devaura.co.za"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 h-12 px-3 md:px-6 rounded-full bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C39EFF]/30 whitespace-nowrap"
                                >
                                    <span>Explore Services</span>
                                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                                </a>
                                <a
                                    href="https://devaura.co.za/#contact"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 h-12 px-3 md:px-6 rounded-full bg-black border border-[#C39EFF]/30 text-[#B2FFD6] text-xs md:text-sm font-medium hover:bg-[#0a0a0a] hover:border-[#C39EFF]/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    <iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                                    <span>Get in Touch</span>
                                </a>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 md:px-8 pb-6 text-center">
                            <p className="text-xs text-slate-500">
                                Powered by{' '}
                                <a
                                    href="https://devaura.co.za"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#C39EFF] hover:text-[#B2FFD6] font-semibold transition-colors"
                                >
                                    Devaura
                                </a>
                                {' '}— Building apps, extensions, websites & games
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PromoPopup;
