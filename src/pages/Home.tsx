import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { heroImages, services, whyChoose, projects, testimonials } from '../data';
import { Eyebrow, Icon, Reveal, Rule } from '../components/ui';
import { CtaBand, Process, ProjectCard, SpecStrip } from '../components/section';

interface Props {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: Props) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[88vh] flex items-center text-white overflow-hidden bg-navy">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1600ms] ${
              i === slide ? 'opacity-100 animate-kenburns' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-brick-dark/50" />

        <div className="wrap relative z-10 py-16">
          <Eyebrow index="00" dark>Kathmandu · Nepal · Since 2018</Eyebrow>
          <h1 className="text-white text-[clamp(38px,6vw,74px)] font-extrabold max-w-[16ch] mt-4">
            We build with <em className="not-italic text-[#E9A79F]">strength,</em> reliability &amp; precision.
          </h1>
          <p className="text-[clamp(16px,1.8vw,21px)] text-slate-200 max-w-[52ch] my-6">
            Red Earth Construction Pvt. Ltd delivers residential, commercial and infrastructure projects across
            Nepal — engineered to last, finished on time, and built on trust.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <button onClick={() => onNavigate('contact')} className="btn btn-primary">
              Start your project <ArrowRight />
            </button>
            <button onClick={() => onNavigate('projects')} className="btn btn-ghost">
              View our work
            </button>
          </div>
          <div className="flex gap-8 mt-11 flex-wrap items-center">
            {[
              ['200+', 'Projects delivered'],
              ['8+ yrs', 'On the ground'],
              ['99%', 'Client satisfaction'],
            ].map(([b, s], i) => (
              <div key={i} className="flex items-center gap-8">
                {i > 0 && <div className="w-px h-9 bg-white/20 -ml-4" />}
                <div>
                  <b className="font-display text-[26px] font-extrabold text-white block leading-none">{b}</b>
                  <span className="font-mono text-[11px] tracking-[.14em] uppercase text-slate-400">{s}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 inset-x-0 z-10 flex gap-2 justify-center">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-[3px] rounded transition-all ${i === slide ? 'w-9 bg-amber-brand' : 'w-6 bg-white/35'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <SpecStrip />

      {/* ---------- SERVICES ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <Eyebrow index="01">What we do</Eyebrow>
            <Rule count={20} />
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">Construction services, end to end.</h2>
            <p className="text-steel mt-4 text-[17px]">
              From the first drawing to the final handover, we cover every discipline your project needs under one
              accountable team.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-13" style={{ marginTop: '3.25rem' }}>
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <button
                  onClick={() => onNavigate('services')}
                  className="group relative w-full text-left bg-white border border-line rounded-[14px] p-7 pb-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:border-transparent overflow-hidden"
                >
                  <span className="absolute left-0 top-0 h-[3px] w-0 bg-brick transition-all duration-300 group-hover:w-full" />
                  <span className="absolute top-6 right-6 font-mono text-xs text-line">0{i + 1}</span>
                  <span className="w-[52px] h-[52px] rounded-xl bg-brick-tint text-brick flex items-center justify-center mb-5">
                    <Icon name={s.icon} className="w-[26px] h-[26px]" />
                  </span>
                  <h3 className="text-[19px] mb-2.5">{s.title}</h3>
                  <p className="text-steel text-[14.5px]">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-brick font-semibold text-sm font-display">
                    Learn more
                    <ArrowRight className="w-[15px] h-[15px] transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT SPLIT ---------- */}
      <section className="section bg-concrete">
        <div className="wrap grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow index="02">Who we are</Eyebrow>
            <Rule />
            <h2 className="text-[clamp(28px,3.6vw,42px)] font-extrabold">
              A Nepali contractor built on doing it right the first time.
            </h2>
            <p className="text-steel my-4 text-[16px] mt-5">
              Founded in 2018 in Makwanpur, Red Earth Construction has grown into a trusted name for quality-driven
              building across Nepal. We combine modern methods, certified professionals and disciplined project
              management to deliver work that stands up over decades.
            </p>
            <p className="text-steel text-[16px]">
              Whether it's a family home, a commercial complex or civil infrastructure, our clients get transparent
              pricing, clear timelines and a team that treats every site like its own.
            </p>
            <div className="flex gap-3.5 items-center mt-7">
              <div className="w-[3px] h-12 bg-brick rounded" />
              <div>
                <b className="font-display text-[30px] font-extrabold">200+</b>
                <p className="text-steel text-sm">Projects across residential, commercial &amp; infrastructure</p>
              </div>
            </div>
            <button onClick={() => onNavigate('about')} className="btn btn-dark mt-7">
              More about us <ArrowRight />
            </button>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-y-3.5 -right-3.5 w-32 h-32 border-2 border-brick rounded-2xl -z-10" />
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Red Earth Construction site"
              className="rounded-[14px] w-full shadow-soft"
            />
            <div className="absolute -left-4 bottom-6 bg-white border border-line rounded-xl px-5 py-4 shadow-soft flex gap-3.5 items-center">
              <b className="font-display text-[30px] font-extrabold text-brick leading-none">8+</b>
              <span className="text-xs text-steel max-w-[14ch]">years building Nepal</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHY ---------- */}
      <section className="section bg-concrete">
        <div className="wrap">
          <Reveal className="max-w-2xl mx-auto text-center">
            <Eyebrow index="03">Why Red Earth</Eyebrow>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold mt-4">Reasons clients keep coming back.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-13" style={{ marginTop: '3.25rem' }}>
            {whyChoose.slice(0, 3).map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="bg-white rounded-[14px] p-8 border border-line transition-all hover:shadow-soft hover:-translate-y-1">
                  <span className="w-[46px] h-[46px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
                    <Icon name={w.icon} className="w-[23px] h-[23px]" />
                  </span>
                  <h3 className="text-[18px] mb-2.5 mt-4">{w.title}</h3>
                  <p className="text-steel text-[14.5px]">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FEATURED PROJECTS ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="flex justify-between items-end gap-5 flex-wrap">
            <div>
              <Eyebrow index="04">Selected work</Eyebrow>
              <Rule />
              <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold">Featured projects.</h2>
            </div>
            <button onClick={() => onNavigate('projects')} className="btn btn-dark">
              All projects <ArrowRight />
            </button>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-11">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Process index="05" />

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="max-w-2xl mx-auto text-center">
            <Eyebrow index="06">Client voices</Eyebrow>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold mt-4">Trusted by the people we build for.</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-13" style={{ marginTop: '3.25rem' }}>
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div className="relative bg-white border border-line rounded-[14px] p-8">
                  <div className="absolute top-5 right-6 font-display text-6xl text-brick-tint leading-[.7]">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Icon key={s} name="Star" className="w-4 h-4 text-amber-brand fill-amber-brand" />
                    ))}
                  </div>
                  <p className="text-[15.5px] text-ink relative z-10">{t.content}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-[42px] h-[42px] rounded-full bg-navy text-white flex items-center justify-center font-display font-bold text-[15px]">
                      {t.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                    </div>
                    <div>
                      <b className="block text-[14.5px]">{t.name}</b>
                      <span className="text-steel text-[12.5px] font-mono">{t.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to start your project?"
        text="Get a free consultation and a clear, transparent quote from our team. No obligation — just honest advice on how to build it right."
        label="Get in touch"
        onNavigate={onNavigate}
      />
    </div>
  );
}
