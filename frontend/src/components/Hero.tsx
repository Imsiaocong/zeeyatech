import { InteractiveGlobe } from '@/components/ui/interactive-globe';

export function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-24 pb-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(105,190,255,0.12),transparent_30%),linear-gradient(110deg,#ffffff_0%,#f7fbff_58%,#eef7ff_100%)] pointer-events-none" />
      <div className="relative w-full max-w-[1500px] mx-auto">
        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-sky-100/70 blur-3xl pointer-events-none" />
        <div className="relative flex flex-col lg:flex-row min-h-[min(720px,calc(100vh-9rem))]">
          <div className="flex-[0.9] flex flex-col justify-center px-8 py-14 sm:px-14 lg:px-20 xl:px-24 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-500 mb-8 w-fit shadow-sm animate-fade-up">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              数据采集与标注服务已就绪
            </div>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.02] text-slate-950 mb-6 animate-fade-up [animation-delay:100ms]">
              让每一份数据
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">都具备训练价值</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed mb-9 animate-fade-up [animation-delay:250ms]">
              从真实场景数据采集，到高质量人工标注、智能预标注与质检交付，智鸭科技为 AI 团队持续提供可靠的数据生产力。
            </p>
            <div className="flex gap-3 flex-wrap mb-12 animate-fade-up [animation-delay:400ms]">
              <a href="login.html" target="_blank" className="px-7 py-3 rounded-full text-sm font-semibold text-white bg-slate-950 no-underline shadow-lg shadow-slate-900/15 transition-all hover:-translate-y-0.5 hover:bg-blue-600">进入标注平台</a>
              <a href="#cta" className="px-7 py-3 rounded-full text-sm font-semibold text-slate-700 no-underline border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600">获取采集方案</a>
            </div>
            <div className="flex items-center gap-5 sm:gap-8">
              <div><p className="text-3xl font-extrabold text-slate-950">150+</p><p className="text-xs text-slate-500 mt-1">采集节点</p></div>
              <div className="w-px h-10 bg-slate-200" />
              <div><p className="text-3xl font-extrabold text-slate-950">99.8%</p><p className="text-xs text-slate-500 mt-1">标注准确率</p></div>
              <div className="w-px h-10 bg-slate-200" />
              <div><p className="text-3xl font-extrabold text-slate-950">6.8x</p><p className="text-xs text-slate-500 mt-1">交付效率提升</p></div>
            </div>
          </div>
          <div className="flex-[1.1] flex items-center justify-center min-h-[420px] lg:min-h-0 relative z-10 px-2 sm:px-8 lg:px-0">
            <InteractiveGlobe size={660} dotColor="rgba(66, 157, 245, ALPHA)" arcColor="rgba(66, 157, 245, 0.5)" markerColor="rgba(49, 183, 235, 1)" />
          </div>
        </div>
      </div>
    </section>
  );
}
