'use client';

import { useEffect, useRef } from 'react';

import academyOfForestryLogo from '../../../assets/ACADAMYOFFORESTRY.jpg';
import beijingPolyLogo from '../../../assets/BEIJINGPOLY.png';
import fudanLogo from '../../../assets/FUDAN.png';
import hkustLogo from '../../../assets/HKSTU.png';
import shenzhenUniversityLogo from '../../../assets/SHENZHENU.png';
import tencentLogo from '../../../assets/TENCENT.png';
import tsinghuaLogo from '../../../assets/TSINGHUA.png';
import ucbLogo from '../../../assets/UCB.png';
import zhejiangUniversityLogo from '../../../assets/ZJU.png';
import sunYatSenUniversityLogo from '../../../assets/中山大学.jpg';
import { LogoCloud } from '@/components/ui/logo-cloud-2';

const partnerLogos = [
  { src: ucbLogo, alt: '加州伯克利大学' },
  { src: tsinghuaLogo, alt: '清华大学' },
  { src: hkustLogo, alt: '香港科技大学' },
  { src: zhejiangUniversityLogo, alt: '浙江大学' },
  { src: fudanLogo, alt: '复旦大学' },
  { src: beijingPolyLogo, alt: '北京理工学院' },
  { src: academyOfForestryLogo, alt: '中国林业科学研究院' },
  { src: shenzhenUniversityLogo, alt: '深圳大学' },
  { src: sunYatSenUniversityLogo, alt: '中山大学' },
  { src: tencentLogo, alt: '腾讯' },
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

      <RevealCase>
        <LogoCloud logos={partnerLogos} />
      </RevealCase>
    </section>
  );
}
