import { useState, useEffect } from 'react';
import { Moon, Play, Sun } from 'lucide-react';

import { cn } from '@/lib/utils';

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-4 sm:px-8 transition-all duration-400 text-slate-900 dark:text-white',
        scrolled && 'border-b border-slate-200/80 bg-white/85 backdrop-blur-[16px] dark:border-white/10 dark:bg-black/85'
      )}
    >
      <a href="#" className="text-2xl font-extrabold tracking-tight text-slate-950 no-underline dark:text-white">
        智鸭<span className="text-blue-600">科技</span>
      </a>
      <ul className="hidden md:flex gap-8 list-none">
        {[
          ['#tools', '数据标注工具'],
          ['#ai', 'AI 赋能'],
          ['#cases', '合作单位'],
          ['#cta', '联系我们'],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="text-sm font-medium text-slate-500 no-underline transition-colors duration-300 relative dark:text-neutral-400
                hover:text-blue-600 dark:hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-500
                after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600 dark:border-white/15 dark:bg-white/5 dark:text-neutral-200 dark:hover:border-white/30 dark:hover:text-white"
          aria-label={isDark ? '切换到浅色模式' : '切换到暗色模式'}
          title={isDark ? '浅色模式' : '暗色模式'}
        >
          {isDark ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
        </button>
        <a
          href="http://127.0.0.1:10500"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-500 px-4 py-2.5 text-sm font-semibold text-white no-underline shadow-[0_0_24px_rgba(59,130,246,0.35),0_0_60px_rgba(168,85,247,0.15)] transition-transform duration-250 transition-shadow duration-350 before:absolute before:inset-[-2px] before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-cyan-400 before:opacity-50 before:blur-[12px] hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.55),0_0_80px_rgba(168,85,247,0.25)] sm:px-6"
        >
          <Play className="size-4" />
          <span className="hidden sm:inline">登录标注平台</span>
        </a>
      </div>
    </nav>
  );
}
