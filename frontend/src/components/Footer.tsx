export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-12 px-8 flex justify-between items-center max-w-[1200px] mx-auto flex-wrap gap-4">
      <div className="text-xs text-[#555]">&copy; 2026 智鸭科技. Your Data Partner In The AI Industry.</div>
      <div className="flex gap-6">
        <a href="#" className="text-xs text-[#555] no-underline transition-colors duration-300 hover:text-white">隐私协议</a>
        <a href="#" className="text-xs text-[#555] no-underline transition-colors duration-300 hover:text-white">服务条款</a>
      </div>
    </footer>
  );
}
