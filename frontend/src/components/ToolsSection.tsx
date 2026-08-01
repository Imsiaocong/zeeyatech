'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const tools = [
  { icon: '◧', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)', title: '图像与视频标注', desc: '包含矩形框、多边形、关键点等多种标签类型，支持图像目标检测、语义分割、OCR 及多模态视频跟踪标注。' },
  { icon: '◇', color: '#a855f7', bg: 'rgba(168,85,247,0.12)', title: '3D 点云与 4D 标注', desc: '提供自动驾驶级别的空间标注方案，支持激光雷达点云、时序穿梭以及传感器多源融合校准。' },
  { icon: '⬡', color: '#22d3ee', bg: 'rgba(34,211,238,0.12)', title: '大模型 RLHF 标注', desc: '专为大语言模型微调设计的对话收集、排序投票、多维度反馈等对齐微调工作流支撑工具。' },
  { icon: '♬', color: '#f97316', bg: 'rgba(249,115,22,0.12)', title: '音频音素标注', desc: '覆盖语音识别 ASR、TTS 发音人标注、音频情感分析等多种音频数据处理场景。' },
  { icon: '¶', color: '#ec4899', bg: 'rgba(236,72,153,0.12)', title: '文本标注工具', desc: '支持 NER 命名实体识别、文本分类、情感分析、关系抽取及文本翻译对齐等任务。' },
  { icon: '▶', color: '#10b981', bg: 'rgba(16,185,129,0.12)', title: '视频多模态标注', desc: '融合视觉、语言、音频的跨模态标注方案，满足大模型训练对多模态数据的需求。' },
];

function RevealCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn('reveal', className)}>
      {children}
    </div>
  );
}

export function ToolsSection() {
  return (
    <section id="tools" className="relative z-10 py-24 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-center mb-4 text-[2rem] font-extrabold tracking-tight reveal">专业的数据标注工具</h2>
      <p className="text-center text-slate-400 max-w-[640px] mx-auto mb-14 text-base reveal">
        针对不同场景特殊定制，易上手的同时保证专业度。涵盖从传统视觉到前沿多模态、RLHF 的完整工具链。
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {tools.map((t, i) => (
          <RevealCard key={i}>
            <div className="glass rounded-[1.25rem] p-8 relative overflow-hidden transition-transform duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] cursor-default group">
              <div
                className="absolute w-[200px] h-[200px] rounded-full blur-[80px] opacity-[0.18] pointer-events-none transition-opacity duration-400 group-hover:opacity-[0.32]"
                style={{ top: i % 2 === 0 ? '-40px' : undefined, bottom: i % 2 === 0 ? undefined : '-40px', left: i % 3 === 0 ? '-40px' : i % 3 === 1 ? '50%' : undefined, right: i % 3 === 2 ? '-40px' : undefined, background: t.color }}
              />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold mb-5" style={{ background: t.bg, color: t.color }}>
                {t.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{t.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{t.desc}</p>
            </div>
          </RevealCard>
        ))}
      </div>
    </section>
  );
}
