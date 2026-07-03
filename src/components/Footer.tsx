import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../components/logo.jpg';
import { company } from '../data';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About us' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer({ onNavigate }: FooterProps) {
  const goto = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1926] text-slate-400 pt-16 sm:pt-[72px]">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Red Earth Construction" className="h-11 rounded" />
              <div>
                <b className="block font-display text-white text-[17px]">RED EARTH</b>
                <small className="font-mono text-[10px] tracking-[.2em] text-[#E9A79F]">CONSTRUCTION PVT. LTD</small>
              </div>
            </div>
            <p className="text-[14.5px] leading-relaxed my-5">
              Professional construction services delivering strength, reliability and precision in every
              project across Nepal — since {company.since}.
            </p>
            <div className="flex gap-1.5">
              {Array.from({ length: 12 }).map((_, i) => (
                <i key={i} className={`w-0.5 ${i % 4 === 0 ? 'h-3 bg-brick' : 'h-1.5 bg-line'}`} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-mono text-xs tracking-[.14em] uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.id}>
                  <button onClick={() => goto(l.id)} className="text-[14.5px] hover:text-[#E9A79F] hover:pl-1 transition-all">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono text-xs tracking-[.14em] uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5 text-[14.5px]">
              <li>Residential Construction</li>
              <li>Commercial Building</li>
              <li>Renovation &amp; Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-mono text-xs tracking-[.14em] uppercase mb-5">Contact</h4>
            <div className="flex flex-col gap-3.5 text-[14px]">
              <div className="flex gap-2.5 items-start">
                <Phone className="h-4 w-4 text-[#E9A79F] shrink-0 mt-0.5" />
                <span>{company.phone}</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <Mail className="h-4 w-4 text-[#E9A79F] shrink-0 mt-0.5" />
                <span className="break-all">{company.email}</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4 w-4 text-[#E9A79F] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <span><span className="text-white/70 font-semibold">Registered:</span> {company.address}</span>
                  <span><span className="text-white/70 font-semibold">Operational:</span> {company.operationa}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 py-5 flex flex-wrap justify-between gap-3.5 text-[13px] text-slate-500">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <div className="flex gap-2.5">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" className="w-[34px] h-[34px] border border-white/15 rounded-lg flex items-center justify-center hover:bg-brick hover:border-brick hover:text-white transition-colors" aria-label="Social link">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}