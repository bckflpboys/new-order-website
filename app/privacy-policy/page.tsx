'use client';

import React from 'react';
import Link from 'next/link';



export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen text-[#f1f1f1]">
      {/* Header */}
      <nav className="border-b border-[#303030] bg-[#0f0f0f]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF0000] to-[#cc0000] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-7.6 11.31v-5.003l5.067 2.483-5.067 2.52z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">YouTube New Order</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f1f1f] border border-[#303030] text-xs font-medium text-[#aaaaaa] mb-6 uppercase tracking-wider">
              <iconify-icon icon="mdi:shield-check" width="12"></iconify-icon>
              Your Privacy Matters
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Privacy <span className="text-[#FF0000]">Policy</span>
            </h1>

            <p className="text-lg text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
              Last Updated: February 10, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#1f1f1f] rounded-xl border border-[#303030] p-8 md:p-12 space-y-8">

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="mdi:information-outline" width="24" className="text-[#FF0000]" style={{ marginRight: '8px' }}></iconify-icon>
                Introduction
              </h2>
              <p className="text-[#aaaaaa] leading-relaxed">
                YouTube New Order ("we", "our", or "the extension") is committed to protecting your privacy.
                This Privacy Policy explains how we handle your information when you use our Chrome browser extension.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="mdi:database-off" width="24" className="text-[#FF0000]" style={{ marginRight: '8px' }}></iconify-icon>
                Data Collection
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#303030]">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    We Collect <span className="text-[#FF0000]">Nothing</span>
                  </h3>
                  <p className="text-[#aaaaaa] text-sm">
                    We do not collect, store, or transmit any personal data selected to an external server. We do not track your browsing history outside of YouTube, and we do not sell your data.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#303030]">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    Local Storage
                  </h3>
                  <ul className="space-y-2 text-[#aaaaaa] text-sm">
                    <li className="flex items-start gap-2">
                      <iconify-icon icon="mdi:circle-small" width="24" className="text-[#FF0000]"></iconify-icon>
                      <span><strong>Settings & Preferences:</strong> Your layout preferences (e.g., "Comments on Right", "Dark Mode") are stored locally on your device using `chrome.storage.local`.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Permissions */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="mdi:key-variant" width="24" className="text-[#FF0000]" style={{ marginRight: '8px' }}></iconify-icon>
                Browser Permissions
              </h2>
              <p className="text-[#aaaaaa] leading-relaxed mb-4">
                YouTube New Order requests the following permissions to function:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#303030]">
                  <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <iconify-icon icon="mdi:harddisk" width="16" className="text-[#FF0000]"></iconify-icon>
                    Storage
                  </h3>
                  <p className="text-[#555555] text-sm">Used to save your layout settings locally.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#303030]">
                  <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <iconify-icon icon="mdi:tab" width="16" className="text-[#FF0000]"></iconify-icon>
                    Active Tab & Scripting
                  </h3>
                  <p className="text-[#555555] text-sm">Used to modify the DOM of the YouTube page to rearrange elements. We solely interact with `youtube.com` pages.</p>
                </div>
                <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#303030]">
                  <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    <iconify-icon icon="mdi:web" width="16" className="text-[#FF0000]"></iconify-icon>
                    Host Permissions (youtube.com)
                  </h3>
                  <p className="text-[#555555] text-sm">Required to inject the layout scripts into YouTube.</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <iconify-icon icon="mdi:email-outline" width="24" className="text-[#FF0000]" style={{ marginRight: '8px' }}></iconify-icon>
                Contact Us
              </h2>
              <p className="text-[#aaaaaa] leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="p-4 rounded-lg bg-[#0f0f0f] border border-[#303030]">
                <a href="mailto:support@youtubeneworder.com" className="text-[#FF0000] hover:underline">support@youtubeneworder.com</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#303030] bg-[#0f0f0f] py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-[#555]">
            © {new Date().getFullYear()} YouTube New Order.
          </div>
        </div>
      </footer>
    </main>
  );
}
