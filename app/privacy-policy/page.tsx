import React from 'react';
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

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black min-h-screen">
      <HeaderWrapper />

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid z-0 mask-image-gradient pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#C39EFF]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B2FFD6]/10 border border-[#B2FFD6]/20 text-xs font-medium text-[#B2FFD6] mb-6 uppercase tracking-wider">
              <iconify-icon icon="lucide:shield-check" width="12"></iconify-icon>
              Your Privacy Matters
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Privacy <span className="text-[#C39EFF] drop-shadow-[0_0_8px_rgba(195,158,255,0.5)]">Policy</span>
            </h1>

            <p className="text-lg text-[#B2FFD6] max-w-2xl mx-auto leading-relaxed">
              Last Updated: December 29, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#0F0E17] rounded-xl border border-white/10 p-8 md:p-12 space-y-8">

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:info" width="24" className="text-[#C39EFF]"></iconify-icon>
                Introduction
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Movie Rating Pro (&quot;we&quot;, &quot;our&quot;, or &quot;the extension&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we handle your information when you use our Chrome browser extension.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:database" width="24" className="text-[#C39EFF]"></iconify-icon>
                Data Collection
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#111019] border border-emerald-500/20">
                  <h3 className="text-lg font-semibold text-emerald-400 mb-2 flex items-center gap-2">
                    <iconify-icon icon="lucide:check-circle" width="18"></iconify-icon>
                    What We DO Collect
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="lucide:dot" width="16" className="text-[#B2FFD6] mt-1"></iconify-icon>
                      <span><strong>Movie ratings and reviews:</strong> All ratings, scores, and custom fields you create are stored locally on your device.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="lucide:dot" width="16" className="text-[#B2FFD6] mt-1"></iconify-icon>
                      <span><strong>Extension settings:</strong> Your preferences and configuration settings are stored locally.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="lucide:dot" width="16" className="text-[#B2FFD6] mt-1"></iconify-icon>
                      <span><strong>Movie titles:</strong> Automatically detected movie titles from supported platforms (stored locally only).</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[#111019] border border-red-500/20">
                  <h3 className="text-lg font-semibold text-red-400 mb-2 flex items-center gap-2">
                    <iconify-icon icon="lucide:x-circle" width="18"></iconify-icon>
                    What We DO NOT Collect
                  </h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="lucide:dot" width="16" className="text-red-400 mt-1"></iconify-icon>
                      <span><strong>Personal information:</strong> We do not collect names, email addresses, or any personally identifiable information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="lucide:dot" width="16" className="text-red-400 mt-1"></iconify-icon>
                      <span><strong>Browsing history:</strong> We do not track or store your browsing history.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="lucide:dot" width="16" className="text-red-400 mt-1"></iconify-icon>
                      <span><strong>Analytics or tracking:</strong> We do not use any analytics, tracking pixels, or third-party tracking services.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="lucide:dot" width="16" className="text-red-400 mt-1"></iconify-icon>
                      <span><strong>Login credentials:</strong> We do not require or store any login information.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Storage */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:hard-drive" width="24" className="text-[#C39EFF]"></iconify-icon>
                Data Storage
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                All your data is stored <strong className="text-[#B2FFD6]">locally on your device</strong> using Chrome&apos;s local storage API. This means:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span>Your data never leaves your computer</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span>We have no access to your ratings or information</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span>Your data is not transmitted to any external servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span>You have complete control over your data</span>
                </li>
              </ul>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:globe" width="24" className="text-[#C39EFF]"></iconify-icon>
                Third-Party Services
              </h2>
              <div className="p-4 rounded-lg bg-[#111019] border border-white/5">
                <h3 className="text-lg font-semibold text-white mb-2">TMDB API</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-2">
                  The extension uses The Movie Database (TMDB) API to fetch trending movies for the carousel feature. When you use this feature:
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="lucide:dot" width="16" className="text-[#B2FFD6] mt-1"></iconify-icon>
                    <span>The extension makes requests to TMDB&apos;s public API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="lucide:dot" width="16" className="text-[#B2FFD6] mt-1"></iconify-icon>
                    <span>No personal information is sent to TMDB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="lucide:dot" width="16" className="text-[#B2FFD6] mt-1"></iconify-icon>
                    <span>TMDB may collect standard web request data (IP address, user agent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <iconify-icon icon="lucide:dot" width="16" className="text-[#B2FFD6] mt-1"></iconify-icon>
                    <span>Review TMDB&apos;s privacy policy at: <a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#C39EFF] hover:text-[#B2FFD6] underline">themoviedb.org/privacy-policy</a></span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Permissions */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:key" width="24" className="text-[#C39EFF]"></iconify-icon>
                Browser Permissions
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Movie Rating Pro requests the following permissions:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-[#111019] border border-white/5">
                  <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <iconify-icon icon="lucide:hard-drive" width="16" className="text-[#B2FFD6]"></iconify-icon>
                    Storage
                  </h3>
                  <p className="text-slate-400 text-sm">Used to save your ratings and settings locally on your device.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#111019] border border-white/5">
                  <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <iconify-icon icon="lucide:tab" width="16" className="text-[#B2FFD6]"></iconify-icon>
                    Active Tab
                  </h3>
                  <p className="text-slate-400 text-sm">Used to detect movie titles from the current page you&apos;re viewing. We only read the page title and metadata—we do not access or store page content.</p>
                </div>
              </div>
            </div>

            {/* Data Control */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:settings" width="24" className="text-[#C39EFF]"></iconify-icon>
                Your Data Control
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                You have complete control over your data:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span><strong>Export:</strong> You can export all your ratings to CSV format at any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span><strong>Delete:</strong> You can delete individual ratings or all data from within the extension</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span><strong>Uninstall:</strong> Removing the extension will delete all locally stored data</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="lucide:check" width="16" className="text-emerald-400 mt-1"></iconify-icon>
                  <span><strong>Clear storage:</strong> You can manually clear Chrome&apos;s local storage for the extension</span>
                </li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:baby" width="24" className="text-[#C39EFF]"></iconify-icon>
                Children&apos;s Privacy
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Movie Rating Pro does not knowingly collect any information from children under the age of 13.
                The extension does not require any personal information and is safe for users of all ages.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:refresh-cw" width="24" className="text-[#C39EFF]"></iconify-icon>
                Changes to This Policy
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
                &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="lucide:mail" width="24" className="text-[#C39EFF]"></iconify-icon>
                Contact Us
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="p-4 rounded-lg bg-gradient-to-r from-[#C39EFF]/10 to-[#B2FFD6]/10 border border-[#C39EFF]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center flex-shrink-0">
                    <iconify-icon icon="lucide:code-2" width="20" className="text-white"></iconify-icon>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Devaura</div>
                    <a
                      href="https://devaura.co.za/#contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#C39EFF] hover:text-[#B2FFD6] transition-colors"
                    >
                      Visit devaura.co.za/contact
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Box */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <iconify-icon icon="lucide:shield-check" width="20" className="text-emerald-400"></iconify-icon>
                Privacy Summary
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                <strong className="text-emerald-400">Your privacy is our priority.</strong> Movie Rating Pro stores all data locally on your device,
                collects no personal information, uses no tracking or analytics, and gives you complete control over your data.
                The only external service used is TMDB API for trending movies, which does not receive any of your personal information.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <PromoPopup />
    </main>
  );
}
