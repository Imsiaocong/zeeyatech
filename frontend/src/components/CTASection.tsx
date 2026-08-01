export function CTASection() {
  return (
    <section id="cta" className="relative z-10 text-center py-32 px-8">
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 reveal">
        在这里，开启您 AI 工程的<br />第一步
      </h2>
      <p className="text-slate-400 max-w-[480px] mx-auto mb-10 text-base reveal">
        免费注册体验智能数据工程平台，或联系专家获取方案。
      </p>
      <div className="flex justify-center gap-4 flex-wrap reveal">
        <a
          href="login.html"
          target="_blank"
          className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full text-base font-semibold text-white no-underline
            relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500
            shadow-[0_0_24px_rgba(59,130,246,0.35),0_0_60px_rgba(168,85,247,0.15)]
            hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.55),0_0_80px_rgba(168,85,247,0.25)]
            transition-transform duration-250 transition-shadow duration-350
            before:absolute before:inset-[-2px] before:rounded-[inherit] before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-cyan-400
            before:-z-10 before:blur-[12px] before:opacity-50"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
            <path d="m10 8-3-2v4l3-2Z" />
          </svg>
          进入标注平台
        </a>
      </div>
    </section>
  );
}
