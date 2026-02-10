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

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 border-t border-[#B2FFD6]/10 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#B2FFD6] mb-4">POWERFUL FEATURES, BUILT FOR CINEPHILES</h2>
          <div className="h-1 w-20 bg-[#C39EFF] mx-auto mb-6"></div>
          <p className="text-[#C39EFF]/80">From automatic detection to advanced analytics, everything you need is right here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1: Smart AI Detection */}
          <div className="group p-8 rounded-2xl border border-[#B2FFD6]/10 bg-black/50 hover:bg-[#0a0a0a] hover:border-[#C39EFF]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#B2FFD6] flex items-center justify-center mb-6 text-black shadow-lg">
              <iconify-icon icon="lucide:sparkles" width="24" stroke-width="2"></iconify-icon>
            </div>
            <h3 className="text-xl font-bold text-[#C39EFF] mb-3">SMART AI DETECTION</h3>
            <p className="text-[#B2FFD6]/80 leading-relaxed">
              Intelligent page analysis instantly captures movie titles & genres from Netflix, Prime Video, and any other streaming site.
            </p>
          </div>

          {/* Feature 2: Trending Movies */}
          <div className="group p-8 rounded-2xl border border-[#B2FFD6]/10 bg-black/50 hover:bg-[#0a0a0a] hover:border-[#C39EFF]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#FFB2E6] flex items-center justify-center mb-6 text-black shadow-lg">
              <iconify-icon icon="lucide:flame" width="24" stroke-width="2"></iconify-icon>
            </div>
            <h3 className="text-xl font-bold text-[#C39EFF] mb-3">TRENDING MOVIES</h3>
            <p className="text-[#B2FFD6]/80 leading-relaxed">
              Discover what&apos;s popular with a built-in carousel of trending movies, powered by the TMDB API.
            </p>
          </div>

          {/* Feature 3: Advanced Search */}
          <div className="group p-8 rounded-2xl border border-[#B2FFD6]/10 bg-black/50 hover:bg-[#0a0a0a] hover:border-[#C39EFF]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#FFB280] flex items-center justify-center mb-6 text-black shadow-lg">
              <iconify-icon icon="lucide:search" width="24" stroke-width="2"></iconify-icon>
            </div>
            <h3 className="text-xl font-bold text-[#C39EFF] mb-3">ADVANCED SEARCH & FILTER</h3>
            <p className="text-[#B2FFD6]/80 leading-relaxed">
              Quickly find any movie in your collection with powerful search, filter, and sort capabilities.
            </p>
          </div>

          {/* Feature 4: Flexible Scoring */}
          <div className="group p-8 rounded-2xl border border-[#B2FFD6]/10 bg-black/50 hover:bg-[#0a0a0a] hover:border-[#C39EFF]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#B2FFD6] flex items-center justify-center mb-6 text-black shadow-lg">
              <iconify-icon icon="lucide:sliders-horizontal" width="24" stroke-width="2"></iconify-icon>
            </div>
            <h3 className="text-xl font-bold text-[#C39EFF] mb-3">FLEXIBLE SCORING SYSTEM</h3>
            <p className="text-[#B2FFD6]/80 leading-relaxed">
              Rate movies on a 5-star scale or use our advanced 100-point system for more nuanced ratings.
            </p>
          </div>

          {/* Feature 5: Dark Theme */}
          <div className="group p-8 rounded-2xl border border-[#B2FFD6]/10 bg-black/50 hover:bg-[#0a0a0a] hover:border-[#C39EFF]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#C39EFF] flex items-center justify-center mb-6 text-black shadow-lg">
              <iconify-icon icon="lucide:moon" width="24" stroke-width="2"></iconify-icon>
            </div>
            <h3 className="text-xl font-bold text-[#C39EFF] mb-3">DARK THEME</h3>
            <p className="text-[#B2FFD6]/80 leading-relaxed">
              Easy on the eyes with a beautiful dark theme that reduces eye strain during long movie marathons.
            </p>
          </div>

          {/* Feature 6: Export Data */}
          <div className="group p-8 rounded-2xl border border-[#B2FFD6]/10 bg-black/50 hover:bg-[#0a0a0a] hover:border-[#C39EFF]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-[#FFB280] flex items-center justify-center mb-6 text-black shadow-lg">
              <iconify-icon icon="lucide:download" width="24" stroke-width="2"></iconify-icon>
            </div>
            <h3 className="text-xl font-bold text-[#C39EFF] mb-3">EXPORT YOUR DATA</h3>
            <p className="text-[#B2FFD6]/80 leading-relaxed">
              Export your ratings and watch history to CSV or JSON for backup or analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
