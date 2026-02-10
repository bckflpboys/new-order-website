import React from 'react';



const UseCases = () => {
  return (
    <section className="py-24 border-t border-white/5 bg-[#0B0A13]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Who is it for?</h2>
          </div>
          <a href="#" className="text-xs font-medium text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors">
            Read user stories <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User 1 */}
          <div className="border-l-2 border-[#1D1C26] pl-6 py-2 hover:border-violet-500 transition-colors duration-300">
            <h4 className="font-semibold text-white text-sm mb-2">Film Students</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Track technical aspects like Cinematography and Sound Design. Use custom fields for Director notes and production year analysis.
            </p>
          </div>
          {/* User 2 */}
          <div className="border-l-2 border-[#1D1C26] pl-6 py-2 hover:border-fuchsia-500 transition-colors duration-300">
            <h4 className="font-semibold text-white text-sm mb-2">Casual Viewers</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Disable complex categories. Just track what you watched on Netflix, when you watched it, and give it a simple star rating.
            </p>
          </div>
          {/* User 3 */}
          <div className="border-l-2 border-[#1D1C26] pl-6 py-2 hover:border-indigo-500 transition-colors duration-300">
            <h4 className="font-semibold text-white text-sm mb-2">Critics</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Utilize the &quot;Long Text&quot; custom field for full reviews. Export your data to manage your personal blog content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
