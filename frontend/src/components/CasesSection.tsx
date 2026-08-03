'use client';

import { useEffect, useRef } from 'react';

const partners = [
  { name: '加州伯克利大学', type: '院校' },
  { name: '清华大学', type: '院校' },
  { name: '香港科技大学', type: '院校' },
  { name: '浙江大学', type: '院校' },
  { name: '复旦大学', type: '院校' },
  { name: '北京理工学院', type: '院校' },
  { name: '中国林业科学研究院', type: '科研院所' },
  { name: '深圳大学', type: '院校' },
  { name: '中山大学', type: '院校' },
  { name: '腾讯', type: '企业' },
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
      <h2 className="text-center mb-4 text-[2rem] font-extrabold tracking-tight reveal">合作单位与院校</h2>
      <p className="text-center text-slate-400 max-w-[640px] mx-auto mb-14 text-base reveal">
        与知名高校、科研院所及科技企业建立长期合作关系。
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
        {partners.map((partner) => (
          <RevealCase key={partner.name}>
            <div className="glass min-h-36 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 cursor-default">
              <span className="text-xs font-semibold tracking-wider text-blue-600">
                {partner.type}
              </span>
              <h4 className="text-lg font-bold leading-snug text-slate-900">{partner.name}</h4>
            </div>
          </RevealCase>
        ))}
      </div>
    </section>
  );
}
