import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Reveal, Eyebrow } from './ui';
import { stats, processSteps } from '../data';
import type { Project } from '../types';

/* ---------- Spec strip (animated stat counters) ---------- */

function Counter({ value, unit }: { value: string; unit: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  const end = parseInt(value, 10);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let s = 0;
          const step = end / 40;
          const t = setInterval(() => {
            s += step;
            if (s >= end) { s = end; clearInterval(t); }
            setN(Math.floor(s));
          }, 22);
          o.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    o.observe(node);
    return () => o.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="font-display font-extrabold text-[clamp(32px,4vw,46px)] tracking-tight text-white">
      {n}
      <span className="text-amber-brand">{unit}</span>
    </div>
  );
}

export function SpecStrip() {
  return (
    <div className="bg-navy text-white">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative p-10 px-6 border-white/10 ${
                i < 2 ? 'border-b md:border-b-0' : ''
              } ${i % 2 === 0 ? 'border-r' : 'md:border-r'} ${i === 3 ? 'border-r-0' : ''} ${
                i === 1 ? 'border-r-0 md:border-r' : ''
              }`}
            >
              <span className="absolute top-4 right-4 font-mono text-[10px] text-white/25">{s.code}</span>
              <Counter value={s.value} unit={s.unit} />
              <div className="font-mono text-[11px] tracking-[.16em] uppercase text-slate-400 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Work process ---------- */
export function Process({ index = '05', dark = true }: { index?: string; dark?: boolean }) {
  return (
    <div className={dark ? 'section bg-navy text-white' : 'section'}>
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <Eyebrow index={index} dark={dark}>How we work</Eyebrow>
          <h2 className={`text-[clamp(28px,3.6vw,44px)] font-extrabold mt-4 ${dark ? 'text-white' : ''}`}>
            A structured path from concept to keys.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 border-t border-white/15">
          {processSteps.map((p) => (
            <Reveal key={p.number} className="p-8 pl-0 pr-6 border-b sm:border-b-0 lg:border-r border-white/12 last:border-r-0">
              <div className="font-mono text-[13px] text-amber-brand tracking-[.1em]">{p.number}</div>
              <div className="w-8 h-0.5 bg-brick my-4" />
              <h3 className="text-white text-[19px] mb-2.5">{p.title}</h3>
              <p className="text-slate-400 text-[14.5px]">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- CTA band ---------- */
export function CtaBand({
  title,
  text,
  label,
  onNavigate,
}: {
  title: string;
  text: string;
  label: string;
  onNavigate: (p: string) => void;
}) {
  return (
    <div className="section relative overflow-hidden text-center text-white bg-gradient-to-br from-brick-dark to-brick">
      <div
        className="absolute inset-0 opacity-[.14]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="wrap relative">
        <Reveal>
          <h2 className="text-white text-[clamp(28px,4vw,46px)] font-extrabold max-w-[20ch] mx-auto">{title}</h2>
          <p className="text-[#f6ded9] my-5 max-w-[50ch] mx-auto text-[17px]">{text}</p>
          <button onClick={() => onNavigate('contact')} className="btn btn-white">
            {label} <ArrowRight />
          </button>
        </Reveal>
      </div>
    </div>
  );
}

/* ---------- Project card ---------- */
export function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative rounded-[14px] overflow-hidden bg-navy shadow-soft cursor-pointer aspect-[4/3.2]">
      <span className="absolute top-3.5 left-3.5 z-10 font-mono text-[10.5px] tracking-[.1em] uppercase bg-brick text-white px-2.5 py-1 rounded-full">
        {p.category}
      </span>
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover opacity-90 transition duration-500 group-hover:scale-110 group-hover:opacity-70"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 pt-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0 bg-gradient-to-t from-[#0b121c]/95 to-transparent">
        <h3 className="text-white text-[18px]">{p.title}</h3>
        <p className="text-slate-300 text-[13px] mt-1 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-16 group-hover:opacity-100">
          {p.description}
        </p>
        <div className="font-mono text-[11px] text-amber-brand mt-2">◈ {p.location}</div>
      </div>
    </div>
  );
}
