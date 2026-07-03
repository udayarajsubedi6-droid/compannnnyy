import { Menu, X, Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import logo from '../components/logo.jpg';
import { company } from '../data';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (page: string) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top utility bar - desktop */}
      <div className="hidden sm:block bg-navy text-[13px] text-slate-300">
        <div className="wrap flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href={`tel:${company.phone}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5 text-[#E9A79F]" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hidden md:inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5 text-[#E9A79F]" /> {company.email}
            </a>
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#E9A79F]" /> Sun–Fri · 9:00–17:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[.12em] font-semibold text-[#0f1b2b] bg-amber-brand px-2.5 py-0.5 rounded-full">
              EST. {company.since}
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#E9A79F]" />
              <span className="text-white font-semibold">Registered:</span>&nbsp;Thaha Municipality-9, Makwanpur
            </span>
            <span className="hidden xl:inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#E9A79F]" />
              <span className="text-white font-semibold">Office:</span>&nbsp;Bafal, Kathmandu
            </span>
          </div>
        </div>
      </div>

      {/* Address bar - mobile only, stacked and readable */}
      <div className="sm:hidden bg-navy text-[12px] text-slate-300 px-4 py-2.5 flex flex-col gap-1.5">
        <div className="flex items-start gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-[#E9A79F] mt-0.5 shrink-0" />
          <span>
            <span className="text-white font-semibold">Registered Office:</span> Thaha Municipality-9, Makwanpur, Nepal
          </span>
        </div>
        <div className="flex items-start gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-[#E9A79F] mt-0.5 shrink-0" />
          <span>
            <span className="text-white font-semibold">Operational Office:</span> Bafal, Kathmandu, Nepal
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-line transition-all ${
          shrink ? 'shadow-[0_8px_30px_-20px_rgba(0,0,0,.4)]' : ''
        }`}
      >
        <div className={`wrap flex items-center justify-between transition-all ${shrink ? 'h-16' : 'h-[74px]'}`}>
          <button onClick={() => goto('home')} className="flex items-center gap-3">
            <img src={logo} alt="Red Earth Construction" className="h-11 w-auto" />
            <span className="leading-none text-left">
              <b className="block font-display font-extrabold text-[17px] text-navy tracking-tight">RED EARTH</b>
              <small className="font-mono text-[10px] tracking-[.22em] text-brick uppercase">Construction Pvt. Ltd</small>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1.5">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => goto(item.id)}
                className={`relative font-semibold text-[15px] px-3.5 py-2 rounded-lg transition-colors ${
                  currentPage === item.id ? 'text-brick' : 'text-ink hover:text-brick'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute left-3.5 right-3.5 bottom-0.5 h-0.5 bg-brick rounded" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => goto('contact')} className="btn btn-primary hidden lg:inline-flex">
              Get a quote <ArrowRight />
            </button>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden w-11 h-11 rounded-lg border border-line text-navy flex items-center justify-center"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[70] bg-[#0f141c]/50 transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[80] w-[min(320px,86vw)] bg-white shadow-lift p-5 flex flex-col transition-transform lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <img src={logo} alt="" className="h-10" />
          <button onClick={() => setOpen(false)} className="w-11 h-11 rounded-lg border border-line text-navy flex items-center justify-center" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        {nav.map((item) => (
          <button
            key={item.id}
            onClick={() => goto(item.id)}
            className={`text-left px-3 py-3.5 font-semibold rounded-lg text-base border-b border-concrete-dark ${
              currentPage === item.id ? 'text-brick' : 'text-ink'
            }`}
          >
            {item.label}
          </button>
        ))}
        <button onClick={() => goto('contact')} className="btn btn-primary justify-center mt-5">
          Get a quote <ArrowRight />
        </button>

        <div className="mt-6 pt-4 border-t border-concrete-dark text-[13px] text-slate-500 flex flex-col gap-2">
          <div className="flex items-start gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brick mt-0.5 shrink-0" />
            <span><b className="text-ink">Registered:</b> Thaha Municipality-9, Makwanpur, Nepal</span>
          </div>
          <div className="flex items-start gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brick mt-0.5 shrink-0" />
            <span><b className="text-ink">Operational:</b> Bafal, Kathmandu, Nepal</span>
          </div>
        </div>
      </aside>
    </>
  );
}