import { useState, type FormEvent, type ChangeEvent, type InputHTMLAttributes } from 'react';
import { Phone, Mail, MapPin, Clock, Send, AlertCircle } from 'lucide-react';
import { company } from '../data';
import { Eyebrow, Reveal, Rule } from '../components/ui';

const heroBg =
  'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920';

const empty = { name: '', email: '', phone: '', type: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState(false);

  const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setError(true);
  };

 const info: { icon: typeof Phone; label: string; value: string | { label: string; text: string }[] }[] = [
    { icon: Phone, label: 'Phone', value: company.phone },
    { icon: Mail, label: 'Email', value: company.email },
    {
      icon: MapPin,
      label: 'Address',
      value: [
        { label: 'Registered Office', text: company.address },
        { label: 'Operational Office', text: company.operationa },
      ],
    },
    { icon: Clock, label: 'Business hours', value: company.hours },
  ];

  return (
    <div>
      {/* page hero */}
      <section className="relative text-white py-[88px] bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${heroBg}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-brick-dark/55" />
        <div className="wrap relative z-10">
          <div className="font-mono text-xs tracking-[.12em] uppercase text-[#E9A79F] mb-3.5">Home / Contact</div>
          <h1 className="text-white text-[clamp(32px,5vw,56px)] font-extrabold">Let's talk about your project</h1>
          <p className="text-slate-200 max-w-[56ch] mt-4 text-[18px]">
            Get in touch to discuss your build or request a free, no-obligation quote. We reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* form */}
          <Reveal className="bg-white border border-line rounded-[14px] p-8 md:p-9 shadow-soft">
            <Eyebrow index="01">Send us a message</Eyebrow>
            <Rule />
            {error ? (
              <div className="bg-brick-tint border border-[#e6c2bb] rounded-xl p-7 text-center">
                <AlertCircle className="w-10 h-10 text-brick mx-auto mb-3" />
                <h3 className="text-xl mb-1.5">We couldn't send your message</h3>
                <p className="text-steel">
                  Sorry, something went wrong sending mail from here. Please email us directly at{' '}
                  <a href="mailto:info@redearthnepal.com" className="text-brick font-semibold underline">
                    info@redearthnepal.com
                  </a>{' '}
                  and we'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setError(false)}
                  className="mt-5 font-mono text-[11px] tracking-[.1em] uppercase text-steel underline"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="grid sm:grid-cols-2 gap-4.5" style={{ gap: '1.125rem' }}>
                  <Field label="Full name" name="name" value={form.name} onChange={change} required placeholder="Your name" />
                  <Field label="Email address" name="email" type="email" value={form.email} onChange={change} required placeholder="you@email.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4.5 mt-4" style={{ gap: '1.125rem' }}>
                  <Field label="Phone number" name="phone" value={form.phone} onChange={change} placeholder="98XXXXXXXX" />
                  <Field label="Project type" name="type" value={form.type} onChange={change} placeholder="e.g. Residential home" />
                </div>
                <div className="mt-4">
                  <label className="block font-mono text-[11px] tracking-[.1em] uppercase text-steel mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={change}
                    placeholder="Tell us about your project, site and timeline…"
                    className="w-full px-4 py-3 border border-line rounded-[10px] bg-concrete text-[15px] focus:outline-none focus:border-brick focus:bg-white focus:ring-4 focus:ring-brick/10 transition"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full justify-center mt-5">
                  Send message <Send className="w-[17px] h-[17px]" />
                </button>
              </form>
            )}
          </Reveal>

          {/* info */}
          <Reveal delay={0.1}>
            <div className="bg-white border border-line rounded-[14px] p-8 shadow-soft mb-5.5" style={{ marginBottom: '1.375rem' }}>
              <Eyebrow index="02">Reach us</Eyebrow>
              <div className="h-4" />
              {info.map(({ icon: I, label, value }) => (
                <div key={label} className="flex gap-3.5 py-4 border-b border-line last:border-b-0">
                  <span className="w-[42px] h-[42px] rounded-[10px] bg-brick-tint text-brick flex items-center justify-center shrink-0">
                    <I className="w-5 h-5" />
                  </span>
                 <div>
                    <b className="block font-display text-sm">{label}</b>
                    {Array.isArray(value) ? (
                      value.map((item, i) => (
                        <span key={i} className="text-steel text-sm break-words block mt-1 first:mt-0">
                          <span className="text-brick font-semibold">{item.label}:</span> {item.text}
                        </span>
                      ))
                    ) : (
                      <span className="text-steel text-sm break-words">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-[14px] p-8 text-white bg-gradient-to-br from-navy to-navy-light">
              <h3 className="text-white text-xl mb-2">Quick response guaranteed</h3>
              <p className="text-slate-300 text-[14.5px]">
                Send us your project details and our team will respond within 24 hours with next steps and a
                preliminary estimate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  ...props
}: {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block font-mono text-[11px] tracking-[.1em] uppercase text-steel mb-2">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 border border-line rounded-[10px] bg-concrete text-[15px] focus:outline-none focus:border-brick focus:bg-white focus:ring-4 focus:ring-brick/10 transition"
      />
    </div>
  );
}