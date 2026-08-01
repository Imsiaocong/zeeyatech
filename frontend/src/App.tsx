'use client';

import { useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ToolsSection } from '@/components/ToolsSection';
import { AISection } from '@/components/AISection';
import { CasesSection } from '@/components/CasesSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function App() {
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
    <>
      <Navbar />
      <Hero />
      <Stats />
      <ToolsSection />
      <AISection />
      <CasesSection />
      <CTASection />
      <Footer />
    </>
  );
}
