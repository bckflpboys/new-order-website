'use client';

import React, { useState } from 'react';
import Image from 'next/image';



interface NavbarProps {
  isBannerVisible: boolean;
}

const Navbar = ({ isBannerVisible }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#B2FFD6]/20 transition-[top] duration-300 ease-in-out"
      style={{ top: isBannerVisible ? '52px' : '0' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="block">
            <Image src="/mrp web logo.png" alt="Movie Rating Pro" width={160} height={56} className="h-14 w-auto" />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#B2FFD6]">
          <a href="/#features" className="hover:text-[#C39EFF] transition-colors">Features</a>
          <a href="/how-it-works" className="hover:text-[#C39EFF] transition-colors">How it Works</a>
          <a href="/vs-letterboxd" className="hover:text-[#C39EFF] transition-colors text-[#00E054]">vs Letterboxd</a>
          <a href="/privacy-policy" className="hover:text-[#C39EFF] transition-colors">Privacy</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/bckflpboys/movie-rating-pro" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-[#B2FFD6] hover:text-[#FFB2E6] transition-colors">
            <iconify-icon icon="lucide:github" width="22" stroke-width="1.5"></iconify-icon>
          </a>
          <a href="https://chromewebstore.google.com/detail/movie-rating-pro/onpnnalhfpdbjfnlhgeekehfndpijbkf" target="_blank" rel="noopener noreferrer" className="hidden sm:flex bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold px-5 py-2.5 rounded-full transition-all items-center gap-2">
            <iconify-icon icon="lucide:chrome" width="16" stroke-width="1.5"></iconify-icon>
            Add to Chrome
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#B2FFD6] hover:text-[#C39EFF] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <iconify-icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} width="24" stroke-width="1.5"></iconify-icon>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md border-b border-[#B2FFD6]/20 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-[#B2FFD6]">
            <a href="/#features" className="hover:text-[#C39EFF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
            <a href="/how-it-works" className="hover:text-[#C39EFF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
            <a href="/vs-letterboxd" className="hover:text-[#C39EFF] transition-colors text-[#00E054]" onClick={() => setIsMobileMenuOpen(false)}>vs Letterboxd</a>
            <a href="#privacy" className="hover:text-[#C39EFF] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Privacy</a>
          </div>

          <div className="h-px bg-white/10"></div>

          <div className="flex flex-col gap-4">
            <a href="https://github.com/bckflpboys/movie-rating-pro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#B2FFD6] hover:text-[#FFB2E6] transition-colors">
              <iconify-icon icon="lucide:github" width="20" stroke-width="1.5"></iconify-icon>
              <span>View on GitHub</span>
            </a>
            <a href="https://chromewebstore.google.com/detail/movie-rating-pro/onpnnalhfpdbjfnlhgeekehfndpijbkf" target="_blank" rel="noopener noreferrer" className="bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold px-5 py-3 rounded-full transition-all flex items-center justify-center gap-2 w-full">
              <iconify-icon icon="lucide:chrome" width="16" stroke-width="1.5"></iconify-icon>
              Add to Chrome
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
