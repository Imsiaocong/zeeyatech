export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 py-12 px-8 flex justify-between items-center max-w-[1200px] mx-auto flex-wrap gap-4 dark:border-white/[0.08]">
      <div className="text-xs text-slate-500 dark:text-neutral-600">&copy; 2026 智鸭科技. Your Data Partner In The AI Industry.</div>
      <div className="flex gap-6">
        <a href="#" className="text-xs text-slate-500 no-underline transition-colors duration-300 hover:text-slate-900 dark:text-neutral-600 dark:hover:text-white">隐私协议</a>
        <a href="#" className="text-xs text-slate-500 no-underline transition-colors duration-300 hover:text-slate-900 dark:text-neutral-600 dark:hover:text-white">服务条款</a>
      </div>
    </footer>
  );
}
