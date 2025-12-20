import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div
              className="flex items-center mb-4 cursor-pointer"
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gradient-to-br from-red-700 to-red-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RE</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Red Earth</div>
                  <div className="text-xs text-red-500 -mt-1">Construction</div>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Professional construction services delivering strength, reliability,
              and precision in every project.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'contact'].map(page => (
                <li key={page}>
                  <button
                    onClick={() => {
                      onNavigate(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-sm capitalize transition-colors text-slate-400 hover:text-red-500"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Residential Construction</li>
              <li>Commercial Building</li>
              <li>Renovation & Remodeling</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span>01-5312287</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="break-all">redearth.eng@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Thaha Municipality-9 Makwanpur, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-sm text-center text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Red Earth Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
