import React from 'react';



const DeepDive = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#0F0E17] to-[#0a0910] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gradient from-violet-900/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text text-sm font-medium mb-3">DEEP DIVE</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Advanced Analytics at Your Fingertips</h2>
          <p className="text-slate-400 text-base md:text-lg">Uncover insights and trends in your movie ratings with our powerful analytics dashboard.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
          {/* Main Analytics Card */}
          <div className="lg:col-span-8 bg-[#0B0A13] rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col overflow-hidden relative group hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-900/20">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 sm:gap-0">
                <div>
                  <h3 className="text-xl font-semibold text-white">Rating Analytics</h3>
                  <p className="text-sm text-slate-400 mt-1">Your personalized movie rating statistics</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium flex items-center">
                  <span className="w-2 h-2 rounded-full bg-violet-400 mr-2 animate-pulse"></span>
                  Live Data
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#111019] p-4 rounded-xl border border-white/5">
                  <p className="text-slate-400 text-sm mb-1">Total Rated</p>
                  <p className="text-3xl font-bold text-white">247 <span className="text-sm text-green-400 ml-1">+12%</span></p>
                </div>
                <div className="bg-[#111019] p-4 rounded-xl border border-white/5">
                  <p className="text-slate-400 text-sm mb-1">Avg. Rating</p>
                  <p className="text-3xl font-bold text-white">7.8 <span className="text-sm text-amber-400 ml-1">/10</span></p>
                </div>
                <div className="bg-[#111019] p-4 rounded-xl border border-white/5">
                  <p className="text-slate-400 text-sm mb-1">Favorite Genre</p>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-500 mr-2"></div>
                    <p className="text-lg font-semibold text-white">Sci-Fi</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { name: 'Action', value: 75, color: 'bg-violet-500', shadow: 'shadow-[0_0_15px_rgba(139,92,246,0.4)]' },
                  { name: 'Drama', value: 45, color: 'bg-fuchsia-500', shadow: 'shadow-[0_0_15px_rgba(236,72,153,0.4)]' },
                  { name: 'Sci-Fi', value: 90, color: 'bg-indigo-500', shadow: 'shadow-[0_0_15px_rgba(99,102,241,0.4)]' },
                  { name: 'Comedy', value: 60, color: 'bg-blue-500', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.4)]' },
                  { name: 'Documentary', value: 30, color: 'bg-cyan-500', shadow: 'shadow-[0_0_15px_rgba(6,182,212,0.4)]' }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-slate-400">{item.name}</span>
                      <span className="text-xs font-mono text-slate-500">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-[#1D1C26] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color} ${item.shadow} transition-all duration-1000 ease-out`}
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <iconify-icon icon="lucide:bar-chart-2" width="180"></iconify-icon>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Data Privacy Card */}
            <div className="bg-[#0B0A13] rounded-2xl border border-white/5 p-6 relative overflow-hidden group hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4">
                    <iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#1D1C26] flex items-center justify-center text-slate-500 group-hover:text-violet-400 transition-colors">
                    <iconify-icon icon="lucide:arrow-up-right" width="14"></iconify-icon>
                  </div>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Your Data, Your Control</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  All your ratings are stored locally in your browser. No cloud, no accounts, no tracking. 100% private.
                </p>
              </div>
            </div>

            {/* Export Card */}
            <div className="bg-[#0B0A13] rounded-2xl border border-white/5 p-6 relative overflow-hidden group hover:border-fuchsia-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-900/10">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 mb-4">
                  <iconify-icon icon="lucide:file-json" width="18"></iconify-icon>
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">Export & Backup</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Export your entire collection to JSON or CSV for backup or analysis.
                </p>
                <button className="inline-flex items-center text-sm font-medium text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Export Data
                  <iconify-icon icon="lucide:arrow-right" width="14" className="ml-1"></iconify-icon>
                </button>
              </div>
            </div>

            {/* Custom Fields Card */}
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
              <div className="relative z-10 p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-3">
                      <iconify-icon icon="lucide:sliders" width="18"></iconify-icon>
                    </div>
                    <h3 className="font-semibold text-white text-lg mb-1">Custom Fields</h3>
                    <p className="text-sm text-white/80">Tailor your rating experience</p>
                  </div>
                  <div className="px-2 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                    New
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Text', 'Number', 'Date', 'Dropdown', 'Rating', '+ More'].map((field, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-sm rounded-lg p-2 text-center text-xs font-medium text-white/80 hover:bg-white/10 transition-colors cursor-pointer">
                      {field}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
