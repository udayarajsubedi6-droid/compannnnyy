import { ArrowRight } from 'lucide-react';
import { services, serviceImages, serviceChecklist } from '../data';
import { Eyebrow, Icon, Reveal } from '../components/ui';
import { CtaBand, Process } from '../components/section';

interface Props {
  onNavigate: (page: string) => void;
}

const heroBg =
  'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Services({ onNavigate }: Props) {
  return (
    <div>
      {/* page hero */}
      <section className="relative text-white py-[88px] bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${heroBg}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-brick-dark/55" />
        <div className="wrap relative z-10">
          <div className="font-mono text-xs tracking-[.12em] uppercase text-[#E9A79F] mb-3.5">Home / Services</div>
          <h1 className="text-white text-[clamp(32px,5vw,56px)] font-extrabold">Our construction services</h1>
          <p className="text-slate-200 max-w-[56ch] mt-4 text-[18px]">
            Reliable, high-quality construction solutions delivered with professionalism, safety and trust.
          </p>
        </div>
      </section>

      {/* alternating service detail */}
      <section className="section">
        <div className="wrap space-y-20">
          {services.map((s, i) => (
            <div key={s.title} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <Reveal className={i % 2 ? 'lg:order-2' : ''}>
                <span className="w-14 h-14 rounded-[13px] bg-brick-tint text-brick flex items-center justify-center mb-5">
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <Eyebrow index={`0${i + 1}`}>Service</Eyebrow>
                <h2 className="text-[clamp(24px,3vw,34px)] font-bold my-3.5">{s.title}</h2>
                <p className="text-steel text-[16px]">{s.description}</p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 my-7">
                  {serviceChecklist.map((c) => (
                    <div key={c} className="flex gap-2.5 items-start text-[15px] font-medium">
                      <Icon name="CheckCircle2" className="w-5 h-5 text-brick shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => onNavigate('contact')} className="btn btn-dark">
                  Request a quote <ArrowRight />
                </button>
              </Reveal>

              <Reveal delay={0.1} className={`relative ${i % 2 ? 'lg:order-1' : ''}`}>
                <div className="absolute -inset-y-3.5 -right-3.5 w-32 h-32 border-2 border-brick rounded-2xl -z-10" />
                <img src={serviceImages[i]} alt={s.title} className="rounded-[14px] w-full h-[360px] object-cover shadow-soft" />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <Process index="—" />

      <CtaBand
        title="Looking for a custom construction solution?"
        text="From residential homes to commercial and civil projects, we deliver tailored solutions built around your goals."
        label="Request a quote"
        onNavigate={onNavigate}
      />
    </div>
  );
}
