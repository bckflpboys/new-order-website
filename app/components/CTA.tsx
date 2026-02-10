import React from 'react';

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

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C39EFF]/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold tracking-tight text-[#B2FFD6] mb-6">
          START YOUR COLLECTION TODAY
        </h2>
        <div className="h-1 w-16 bg-[#C39EFF] mx-auto mb-8"></div>
        <p className="text-[#C39EFF]/80 mb-12 max-w-md mx-auto text-lg">
          Join thousands of users rating movies with precision. Open source, private, and free.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="https://chromewebstore.google.com/detail/movie-rating-pro/onpnnalhfpdbjfnlhgeekehfndpijbkf" target="_blank" rel="noopener noreferrer" className="h-12 px-8 rounded-full bg-[#C39EFF] hover:bg-[#9b7ecc] text-black text-sm font-bold transition-all flex items-center gap-2 shadow-lg shadow-[#C39EFF]/30 transform hover:scale-105">
            <iconify-icon icon="lucide:download" width="18" stroke-width="2"></iconify-icon>
            DOWNLOAD FOR CHROME
          </a>
          <a href="https://github.com/bckflpboys/movie-rating-pro" target="_blank" rel="noopener noreferrer" className="h-12 px-8 rounded-full bg-transparent border border-[#C39EFF]/30 text-[#B2FFD6] text-sm font-medium hover:bg-[#C39EFF]/10 hover:border-[#C39EFF]/50 transition-all flex items-center gap-2">
            <iconify-icon icon="lucide:github" width="18" stroke-width="2"></iconify-icon>
            STAR ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
