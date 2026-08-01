import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-8 transition-all duration-400',
        scrolled && 'bg-[rgba(6,8,13,0.85)] backdrop-blur-[16px] border-b border-white/10'
      )}
    >
      <a href="#" className="text-2xl font-extrabold tracking-tight text-white no-underline">
        智鸭<span className="text-blue-500">科技</span>
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        {[
          ['#tools', '数据标注工具'],
          ['#ai', 'AI 赋能'],
          ['#cases', '合作案例'],
          ['#cta', '联系我们'],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="text-sm font-medium text-slate-400 no-underline transition-colors duration-300 relative
                hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500
                after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="http://127.0.0.1:10500"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white no-underline
          relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-500
          shadow-[0_0_24px_rgba(59,130,246,0.35),0_0_60px_rgba(168,85,247,0.15)]
          hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.55),0_0_80px_rgba(168,85,247,0.25)]
          transition-transform duration-250 transition-shadow duration-350
          before:absolute before:inset-[-2px] before:rounded-[inherit] before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-cyan-400
          before:-z-10 before:blur-[12px] before:opacity-50"
      >
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          <path d="m10 8-3-2v4l3-2Z" />
        </svg>
        登录标注平台
      </a>
    </nav>
  );
}
