import { useState } from 'react';
import { projects } from '../data';
import { Reveal } from '../components/ui';
import { CtaBand, ProjectCard, SpecStrip } from '../components/section';

interface Props {
  onNavigate: (page: string) => void;
}

const heroBg =
  'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Projects({ onNavigate }: Props) {
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div>
      {/* page hero */}
      <section className="relative text-white py-[88px] bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${heroBg}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-brick-dark/55" />
        <div className="wrap relative z-10">
          <div className="font-mono text-xs tracking-[.12em] uppercase text-[#E9A79F] mb-3.5">Home / Projects</div>
          <h1 className="text-white text-[clamp(32px,5vw,56px)] font-extrabold">Our portfolio</h1>
          <p className="text-slate-200 max-w-[56ch] mt-4 text-[18px]">
            A selection of completed and ongoing work — explore the quality and range of what we build.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="flex gap-2.5 flex-wrap mb-10">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-mono text-[12.5px] tracking-[.06em] uppercase px-4.5 py-2.5 rounded-full border transition-colors ${
                  filter === c
                    ? 'bg-navy text-white border-navy'
                    : 'bg-white text-steel border-line hover:bg-navy hover:text-white hover:border-navy'
                }`}
                style={{ paddingLeft: '1.125rem', paddingRight: '1.125rem' }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>

          {shown.length === 0 && (
            <p className="text-center text-steel py-10">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <SpecStrip />

      <CtaBand
        title="Your project could be next."
        text="Join the growing list of clients who trusted Red Earth to build it right."
        label="Start a conversation"
        onNavigate={onNavigate}
      />
    </div>
  );
}
