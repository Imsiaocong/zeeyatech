import { InteractiveGlobe } from '@/components/ui/interactive-globe';

export function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-8 pt-32 pb-24">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,rgba(168,85,247,0.06)_40%,transparent_70%)] pointer-events-none" />

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-400 tracking-wider uppercase mb-8 animate-fade-up glass">
        <span className="text-blue-400">◆</span> 智能数据工程平台
      </div>

      <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.05] tracking-tight max-w-[900px] animate-fade-up [animation-delay:100ms]">
        以数据定义<br />
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          智能边界
        </span>
      </h1>

      <p className="mt-6 text-lg text-slate-400 max-w-[560px] font-normal animate-fade-up [animation-delay:250ms]">
        使用最新、最快、最准的工具，构建 99% 的高质量数据集。助力数据生产低成本、高精度、快产出。
      </p>

      <div className="mt-10 flex gap-4 flex-wrap justify-center animate-fade-up [animation-delay:400ms]">
        <a
          href="login.html"
          target="_blank"
          className="px-8 py-3 rounded-full text-sm font-semibold text-white no-underline border border-white/10 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/15 glass"
        >
          免费试用平台
        </a>
        <a
          href="#cta"
          className="px-8 py-3 rounded-full text-sm font-semibold text-black bg-white no-underline transition-all duration-300 hover:bg-[#e2e8f0] hover:-translate-y-px"
        >
          预约专家演示
        </a>
      </div>

      {/* Globe showcase */}
      <div className="mt-16 w-full max-w-5xl rounded-2xl border border-white/[0.06] bg-black/20 overflow-hidden relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row min-h-[480px]">
          <div className="flex-1 flex flex-col justify-center p-10 md:p-14 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400 mb-6 w-fit">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
              Global Edge
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Network
              </span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-md leading-relaxed mb-8">
              Deployed across 150+ points of presence worldwide. Your data served from the nearest node in under 50ms. Drag the globe to explore.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-white">150+</p>
                <p className="text-xs text-slate-400">Edge Nodes</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">&lt;50ms</p>
                <p className="text-xs text-slate-400">Avg Latency</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">99.99%</p>
                <p className="text-xs text-slate-400">Uptime</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-4 md:p-0 min-h-[400px]">
            <InteractiveGlobe size={420} />
          </div>
        </div>
      </div>
    </section>
  );
}
