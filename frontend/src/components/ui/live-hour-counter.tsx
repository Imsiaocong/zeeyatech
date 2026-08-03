'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const STARTING_HOURS = 128_640;
const STORAGE_KEY = 'zeeyatech-embodied-hours';

type StoredCounter = {
  value: number;
  updatedAt: number;
};

function readStoredHours() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return STARTING_HOURS;

    const parsed = JSON.parse(stored) as StoredCounter;
    if (!Number.isFinite(parsed.value) || !Number.isFinite(parsed.updatedAt)) return STARTING_HOURS;

    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - parsed.updatedAt) / 1000));
    return Math.max(STARTING_HOURS, parsed.value + elapsedSeconds * 5);
  } catch {
    return STARTING_HOURS;
  }
}

function CounterCharacter({ character, index }: { character: string; index: number }) {
  if (character === ',') {
    return <span className="px-0.5 text-neutral-500">,</span>;
  }

  return (
    <span className="relative inline-flex h-[1.2em] w-[0.7em] overflow-hidden rounded-[0.12em] border border-white/10 bg-white/[0.06] align-middle shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.28)] [perspective:160px]">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={`${index}-${character}`}
          initial={{ y: '-72%', rotateX: -70, opacity: 0 }}
          animate={{ y: '0%', rotateX: 0, opacity: 1 }}
          exit={{ y: '72%', rotateX: 70, opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]"
        >
          {character}
        </motion.span>
      </AnimatePresence>
      <span className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-black/35" />
    </span>
  );
}

export function LiveHourCounter() {
  const [hours, setHours] = useState(readStoredHours);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHours((current) => {
        const next = current + Math.floor(Math.random() * 9) + 1;
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ value: next, updatedAt: Date.now() }));
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex items-center font-mono text-[1.05em] font-semibold tabular-nums text-white" aria-label={`${hours.toLocaleString('en-US')} 小时`}>
      <span aria-hidden="true" className="inline-flex items-center">
        {hours.toLocaleString('en-US').split('').map((character, index) => (
          <CounterCharacter key={index} character={character} index={index} />
        ))}
      </span>
    </span>
  );
}
