'use client';

import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SplineHero } from '@/components/SplineHero';
import { Stats } from '@/components/Stats';
import { ToolsSection } from '@/components/ToolsSection';
import { AISection } from '@/components/AISection';
import { CasesSection } from '@/components/CasesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-slate-900 transition-colors duration-500 dark:bg-black dark:text-neutral-100">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />
      {isDark ? <SplineHero /> : <Hero />}
      <Stats />
      <ToolsSection />
      <AISection />
      <CasesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
