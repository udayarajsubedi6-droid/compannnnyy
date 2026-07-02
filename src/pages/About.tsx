import { CtaBand, SpecStrip } from '../components/section';
import { Eyebrow, Icon, Reveal, Rule } from '../components/ui';
import { whyChoose } from '../data';

interface Props {
  onNavigate: (page: string) => void;
}

const heroBg =
  'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function About({ onNavigate }: Props) {
  return (
    <div>
      {/* page hero */}
      <section className="relative text-white py-[88px] bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${heroBg}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-brick-dark/55" />
        <div className="wrap relative z-10">
          <div className="font-mono text-xs tracking-[.12em] uppercase text-[#E9A79F] mb-3.5">Home / About</div>
          <h1 className="text-white text-[clamp(32px,5vw,56px)] font-extrabold">About Red Earth Construction</h1>
          <p className="text-slate-200 max-w-[56ch] mt-4 text-[18px]">
            Building excellence with dedication, expertise and integrity across Nepal since 2018.
          </p>
        </div>
      </section>

      {/* story */}
      <section className="section">
        <div className="wrap grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow index="01">Our story</Eyebrow>
            <Rule />
            <h2 className="text-[clamp(28px,3.6vw,42px)] font-extrabold">
              From a small Makwanpur team to a name Nepal trusts.
            </h2>
            <p className="text-steel my-4 mt-5 text-[16px]">
              Established in 2018, Red Earth Construction Pvt. Ltd set out with one goal — to build reliable,
              high-quality structures without cutting corners. That discipline has carried us through more than 200
              projects, from private homes to large commercial and infrastructure ventures.
            </p>
            <p className="text-steel text-[16px]">
              Our team pairs modern construction techniques with hands-on craftsmanship and a results-driven approach.
              Every project is delivered with the precision, safety and transparency our clients have come to expect.
            </p>
            <div className="flex gap-3.5 items-center mt-7">
              <div className="w-[3px] h-12 bg-brick rounded" />
              <div>
                <b className="font-display text-[30px] font-extrabold">200+</b>
                <p className="text-steel text-sm">Projects completed since 2018</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="absolute -inset-y-3.5 -right-3.5 w-32 h-32 border-2 border-brick rounded-2xl -z-10" />
            <img src={heroBg} alt="Construction project" className="rounded-[14px] w-full shadow-soft" />
            <div className="absolute -left-4 bottom-6 bg-white border border-line rounded-xl px-5 py-4 shadow-soft flex gap-3.5 items-center">
              <b className="font-display text-[30px] font-extrabold text-brick leading-none">99%</b>
              <span className="text-xs text-steel max-w-[14ch]">client satisfaction</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* mission / vision */}
      <section className="section bg-concrete">
        <div className="wrap">
          <Reveal className="max-w-2xl mx-auto text-center">
            <Eyebrow index="02">Mission &amp; Vision</Eyebrow>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold mt-4">What drives every build.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-13" style={{ marginTop: '3.25rem' }}>
            {[
              { icon: 'Target', title: 'Our mission', text: 'To deliver exceptional construction that exceeds expectations through innovative solutions, superior craftsmanship and an unwavering commitment to quality.' },
              { icon: 'Gem', title: 'Our vision', text: 'To be the most trusted and respected construction company in the region — known for integrity, innovation and building a better future for Nepal.' },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="bg-white rounded-[14px] p-8 border border-line h-full transition-all hover:shadow-soft hover:-translate-y-1">
                  <span className="w-[46px] h-[46px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
                    <Icon name={m.icon} className="w-[23px] h-[23px]" />
                  </span>
                  <h3 className="text-[20px] mb-2.5">{m.title}</h3>
                  <p className="text-steel text-[15px]">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="section">
        <div className="wrap">
          <Reveal className="max-w-2xl mx-auto text-center">
            <Eyebrow index="03">Why choose us</Eyebrow>
            <h2 className="text-[clamp(28px,3.6vw,44px)] font-extrabold mt-4">Six reasons the work speaks for itself.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-13" style={{ marginTop: '3.25rem' }}>
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="bg-white rounded-[14px] p-8 border border-line transition-all hover:shadow-soft hover:-translate-y-1">
                  <span className="w-[46px] h-[46px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
                    <Icon name={w.icon} className="w-[23px] h-[23px]" />
                  </span>
                  <h3 className="text-[18px] mb-2.5">{w.title}</h3>
                  <p className="text-steel text-[14.5px]">{w.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SpecStrip />

      <CtaBand
        title="Let's build something that lasts."
        text="Tell us about your project and we'll show you how Red Earth can bring it to life — on budget and on time."
        label="Contact our team"
        onNavigate={onNavigate}
      />
    </div>
  );
}
