'use client';

import { useEffect, useRef } from 'react';

const steps = [
  { num: '01', color: 'text-blue-400', bg: 'rgba(59,130,246,0.1)', title: '智能预标注', desc: '基于大模型 2.0 的智能标注，零样本全场景适配，一键分割全图、点选交互式标注，提效数十倍。' },
  { num: '02', color: 'text-purple-400', bg: 'rgba(168,85,247,0.1)', title: '智能工具辅助', desc: '以最简单的交互获得最精准的标注结果，在目标检测与语义分割场景可达到 95% 以上准确率。' },
  { num: '03', color: 'text-cyan-400', bg: 'rgba(34,211,238,0.1)', title: '智能质检审核', desc: '快速定位漏标、错标等问题，筛选可疑数据人工复核，缩短 70% 传统人力审核耗时。' },
];

function RevealBlock({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className || ''}`}>{children}</div>;
}

export function AISection() {
  return (
    <section id="ai" className="relative z-10 py-24 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-center mb-4 text-[2rem] font-extrabold tracking-tight reveal">AI 赋能数据工程自动化</h2>
      <p className="text-center text-slate-400 max-w-[640px] mx-auto mb-14 text-base reveal">
        集合 N+ 前沿大模型，用智能标注助力数据生产的低成本、高精度、快产出。
      </p>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          {steps.map((s) => (
            <RevealBlock key={s.num}>
              <div className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm glass" style={{ background: s.bg, color: s.color.replace('text-', '#') }}>
                  {s.num}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1.5">{s.title}</h4>
                  <p className="text-sm text-slate-400">{s.desc}</p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock>
          <div className="relative rounded-3xl p-12 flex flex-col items-center justify-center min-h-[380px] overflow-hidden glass">
            <div className="w-[140px] h-[140px] rounded-full relative bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),rgba(168,85,247,0.15),transparent)] flex items-center justify-center animate-[orbFloat_6s_ease-in-out_infinite]">
              <span className="text-[2rem] font-black text-blue-400 tracking-tight">AI</span>
            </div>
            <style>{`
              .reveal > div > div:first-child::before {
                content: '';
                position: absolute;
                inset: -8px;
                border-radius: 50%;
                border: 1px solid rgba(59,130,246,0.15);
                animation: orbPulse 3s ease-in-out infinite;
              }
              .reveal > div > div:first-child::after {
                content: '';
                position: absolute;
                inset: -24px;
                border-radius: 50%;
                border: 1px dashed rgba(168,85,247,0.1);
                animation: orbSpin 20s linear infinite;
              }
            `}</style>
            <div className="mt-6 font-semibold text-slate-400 text-sm tracking-wider">INTELLIGENT DATA ENGINE</div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
