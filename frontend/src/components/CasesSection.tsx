'use client';

import { useEffect, useRef } from 'react';

const cases = [
  { tag: '自动驾驶', tagColor: 'rgba(59,130,246,0.12)', textColor: '#3b82f6', title: '自动驾驶数据标注', desc: '采用成熟的 Docker 私有化部署方案，一周内完成从部署到调通应用的全流程，兼顾数据安全和生产效率。' },
  { tag: 'NLP', tagColor: 'rgba(168,85,247,0.12)', textColor: '#a855f7', title: '推特评论情感分析', desc: '针对业务场景使用 SOTA 算法模型进行多语种文本标注，快速补足中英文 OCR 识别能力。' },
  { tag: 'OCR', tagColor: 'rgba(34,211,238,0.12)', textColor: '#22d3ee', title: '街景多语种 OCR', desc: '调度成品数据集匹配韩语、日语等语种 OCR 需求，原本数月的工作两周内完成交付。' },
  { tag: '多模态', tagColor: 'rgba(16,185,129,0.12)', textColor: '#10b981', title: '多模态数据集建设', desc: '实景采集拍摄后使用智能化标注工具进行连续帧的多模态标注，数据生产效率提升数倍。' },
];

function RevealCase({ children }: { children: React.ReactNode }) {
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
  return <div ref={ref} className="reveal">{children}</div>;
}

export function CasesSection() {
  return (
    <section id="cases" className="relative z-10 py-24 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-center mb-4 text-[2rem] font-extrabold tracking-tight reveal">合作案例</h2>
      <p className="text-center text-slate-400 max-w-[640px] mx-auto mb-14 text-base reveal">
        覆盖自动驾驶、多模态大模型、NLP 等前沿领域的落地实践。
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {cases.map((c, i) => (
          <RevealCase key={i}>
            <div className="glass rounded-[1.25rem] p-8 relative overflow-hidden transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 cursor-default">
              <span
                className="inline-block px-3 py-1 rounded-full text-[0.7rem] font-semibold tracking-wider mb-4"
                style={{ background: c.tagColor, color: c.textColor }}
              >
                {c.tag}
              </span>
              <h4 className="text-lg font-bold mb-2">{c.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
            </div>
          </RevealCase>
        ))}
      </div>
    </section>
  );
}
