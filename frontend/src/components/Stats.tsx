'use client';

import { useEffect, useRef, useState } from 'react';

const statsData = [
  { value: 6.8, suffix: ' 倍', label: '节省数据工程时长', decimals: 1 },
  { value: 99.8, suffix: ' %', label: '最高实现准确率', decimals: 1 },
  { value: 70, suffix: ' %', label: '缩短审核耗时', decimals: 0 },
];

function AnimatedStat({ target, suffix, label, decimals }: { target: number; suffix: string; label: string; decimals: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(target * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center animate-fade-up [animation-delay:500ms]">
      <div className="text-[3rem] font-extrabold tracking-tight">
        {val.toFixed(decimals)}
        <span className="text-[1.2rem] text-slate-400 font-medium">{suffix}</span>
      </div>
      <div className="text-sm text-slate-400 mt-1">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="relative z-10 flex justify-center gap-16 px-8 py-16 flex-wrap">
      {statsData.map((s) => (
        <AnimatedStat key={s.label} target={s.value} suffix={s.suffix} label={s.label} decimals={s.decimals} />
      ))}
    </div>
  );
}
