import React from 'react';
import Image from 'next/image';



const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#B2FFD6]/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Built by Devaura Banner */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-[#C39EFF]/10 to-[#B2FFD6]/10 border border-[#C39EFF]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <iconify-icon icon="lucide:code-2" width="20" className="text-white"></iconify-icon>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Built by Devaura</div>
                <div className="text-xs text-slate-400">Expert web & app development studio</div>
              </div>
            </div>
            <a
              href="https://devaura.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-6 rounded-full bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#C39EFF]/30"
            >
              <span>Explore Our Services</span>
              <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <a href="/" className="block">
              <Image src="/mrp web logo.png" alt="Movie Rating Pro" width={128} height={32} className="h-8 w-auto" />
            </a>
            <span className="text-sm font-medium text-[#B2FFD6]/80">© 2025 MOVIE RATING PRO</span>
          </div>

          <div className="flex gap-8 text-sm font-medium">
            <a href="https://github.com/bckflpboys/movie-rating-pro#readme" target="_blank" rel="noopener noreferrer" className="text-[#C39EFF] hover:text-[#B2FFD6] transition-colors">DOCUMENTATION</a>
            <a href="/privacy-policy" className="text-[#C39EFF] hover:text-[#B2FFD6] transition-colors">PRIVACY POLICY</a>
            <a href="https://github.com/bckflpboys/movie-rating-pro/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-[#C39EFF] hover:text-[#B2FFD6] transition-colors">LICENSE (MIT)</a>
          </div>
        </div>

        {/* Devaura Credit */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            Crafted by{' '}
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
    </footer>
  );
};

export default Footer;
