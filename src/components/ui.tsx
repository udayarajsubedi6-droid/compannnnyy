import { useEffect, useRef, useState, type ReactNode, type ComponentType } from 'react';
import * as Icons from 'lucide-react';

/* Fade + rise into view on scroll */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          o.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    o.observe(node);
    return () => o.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'none' : 'translateY(26px)',
        transition: `opacity .7s ease ${delay}s, transform .7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* Render a lucide icon by name */
export function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as Record<string, unknown>)[name] as
    | ComponentType<{ className?: string }>
    | undefined;
  return C ? <C className={className} /> : null;
}

/* Mono "spec" eyebrow label */
export function Eyebrow({
  index,
  children,
  dark = false,
}: {
  index: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <span className={`eyebrow ${dark ? 'on-dark' : ''}`}>
      <span className="idx">{index}</span> — {children}
    </span>
  );
}

/* Measurement tick rule */
export function Rule({ count = 15 }: { count?: number }) {
  return (
    <div className="rule">
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}
