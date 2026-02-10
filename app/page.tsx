
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen">
      {/* Background Graphic */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08),transparent_50%)]" />
        <div className="bg-grid absolute inset-0 opacity-20" />
      </div>

      {/* Navigation */}
      <nav className="border-b border-[#303030] bg-[#0f0f0f]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF0000] to-[#cc0000] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-7.6 11.31v-5.003l5.067 2.483-5.067 2.52z" fill="white" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">YouTube New Order</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium text-[#aaaaaa] hover:text-white transition-colors">Features</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-[#aaaaaa] hover:text-white transition-colors">How it Works</Link>
            <Link href="/vs-standard" className="text-sm font-medium text-[#aaaaaa] hover:text-white transition-colors">Compare</Link>
            <a href="https://github.com/yourusername/youtube-new-order" target="_blank" className="text-[#f1f1f1] hover:text-[#FF0000] transition-colors">
              <iconify-icon icon="mdi:github" width="24" height="24"></iconify-icon>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1f1f1f] border border-[#303030] text-xs font-medium text-[#aaaaaa] mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#FF0000]"></span>
            v1.0.0 Now Available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-[#aaaaaa] bg-clip-text text-transparent">
            Customize Your <br />
            <span className="text-[#FF0000]">YouTube Layout</span>
          </h1>

          <p className="text-xl text-[#aaaaaa] max-w-2xl mx-auto mb-10 leading-relaxed">
            Swap comments and related videos, resize columns, and enhance your viewing experience with our powerful configuration tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="h-12 px-8 rounded-full bg-[#f1f1f1] text-black font-semibold hover:bg-white hover:scale-105 transition-all flex items-center gap-2 justify-center">
              <iconify-icon icon="logos:chrome"></iconify-icon>
              Add to Chrome
            </a>
            <a href="https://github.com/yourusername/youtube-new-order" target="_blank" className="h-12 px-8 rounded-full bg-[#1f1f1f] border border-[#303030] text-[#f1f1f1] font-semibold hover:bg-[#272727] hover:border-[#FF0000] transition-all flex items-center justify-center">
              View on GitHub
            </a>
          </div>

          {/* Preview Image Placeholder */}
          <div className="mt-20 relative w-full max-w-5xl mx-auto rounded-xl border border-[#303030] bg-[#1f1f1f] shadow-2xl overflow-hidden aspect-video group">
            {/* Mockup of the UI */}
            <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
              <div className="text-center p-8">
                <div className="mb-4 text-4xl">📺 ➡️ 💬</div>
                <p className="text-[#aaaaaa]">Extension Preview</p>
                <p className="text-sm text-[#555]">Install to see it in action on YouTube!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-[#aaaaaa]">Everything you need to take control of your YouTube layout.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="mdi:swap-horizontal"
              title="Layout Swap"
              description="Move comments to the right sidebar and related videos to the bottom for a focused reading experience."
            />
            <FeatureCard
              icon="mdi:arrow-expand-horizontal"
              title="Resizable Columns"
              description="Drag to resize the video and sidebar columns to your perfect viewing width."
            />
            <FeatureCard
              icon="mdi:collapse-all-outline"
              title="Collapsible Sections"
              description="Hide the sidebar or description completely for a distraction-free theater mode."
            />
            <FeatureCard
              icon="mdi:picture-in-picture-bottom-right"
              title="PiP Comments"
              description="Read comments in a floating window while watching the video."
            />
            <FeatureCard
              icon="mdi:view-grid"
              title="Grid View"
              description="Display related videos in a grid layout when moved to the bottom section."
            />
            <FeatureCard
              icon="mdi:volume-high"
              title="Volume Boost"
              description="Boost the video volume beyond 100% for quiet videos."
            />
            <FeatureCard
              icon="mdi:note-text-outline"
              title="Video Notes"
              description="Take personal notes timestamped to the video for study or reference."
            />
            <FeatureCard
              icon="mdi:bookmark-outline"
              title="Bookmarks"
              description="Save specific timestamps to quickly jump back to important moments."
            />
            <FeatureCard
              icon="mdi:clock-plus-outline"
              title="Quick Watch Later"
              description="Add videos to Watch Later with a single click."
            />
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#1f1f1f] z-[-1]" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to upgrade your YouTube?</h2>
          <p className="text-xl text-[#aaaaaa] mb-10">Join thousands of users enjoying a better viewing experience.</p>
          <button className="h-14 px-10 rounded-full bg-[#FF0000] text-white font-bold text-lg hover:bg-[#cc0000] hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all">
            Get the Extension
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#303030] bg-[#0f0f0f] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#FF0000] flex items-center justify-center">
              <span className="text-xs font-bold text-white">Y</span>
            </div>
            <span className="text-sm font-semibold">YouTube New Order</span>
          </div>
          <div className="text-sm text-[#555]">
            © {currentYear} YouTube New Order. Not affiliated with YouTube or Google.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-[#aaaaaa] hover:text-white transition-colors text-sm">Privacy</Link>
            <Link href="/tos" className="text-[#aaaaaa] hover:text-white transition-colors text-sm">Terms</Link>
            <a href="mailto:support@youtubeneworder.com" className="text-[#aaaaaa] hover:text-white transition-colors text-sm">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: string, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-[#1f1f1f] border border-[#303030] hover:border-[#3ea6ff] hover:-translate-y-1 transition-all group">
      <div className="w-12 h-12 rounded-lg bg-[#0f0f0f] border border-[#303030] flex items-center justify-center mb-4 group-hover:border-[#3ea6ff]/50 transition-colors">
        <iconify-icon icon={icon} width="24" height="24" style={{ color: '#f1f1f1' }}></iconify-icon>
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#f1f1f1]">{title}</h3>
      <p className="text-[#aaaaaa] text-sm leading-relaxed">{description}</p>
    </div>
  );
}


