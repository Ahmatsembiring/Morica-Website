import { Phone, Mail, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { WHATSAPP_NUMBER, SOCIAL_MEDIA } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ Path disesuaikan dengan Routes di App.jsx
  const navLinks = [
    { label: 'Beranda', to: '/' },
    { label: 'Tentang Kami', to: '/tentang' },
    { label: 'Keunggulan', to: '/keunggulan' },
    { label: 'Cara Pakai', to: '/cara-pakai' },
    { label: 'Tim Kami', to: '/tim' },
  ];

  return (
    <footer className="bg-forest text-white relative border-t border-white/5">
      {/* Background Glow Ringan (Tanpa Blur Berat) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-morica/5 rounded-full pointer-events-none" />

      <div className="container-custom px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="Morica Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain bg-white rounded-full p-0.5 shadow-md"
                loading="lazy"
              />
              <span className="text-xl font-display font-bold tracking-tight">Morica</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm text-sm">
              Inovasi obat nyamuk bakar alami berbasis bioteknologi dari 
              <span className="text-morica-light font-medium"> Daun Kelor & Eucalyptus Pelangi</span>. 
              Solusi aman dan ramah lingkungan untuk keluarga Indonesia.
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <a
                href={SOCIAL_MEDIA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-morica/20 border border-white/10 hover:border-morica/30 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              
              <a
                href={SOCIAL_MEDIA.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/5 hover:bg-black border border-white/10 hover:border-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ✅ Navigation Links - Menggunakan NavLink */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-morica-light mb-5">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink 
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `text-sm block py-0.5 transition-all duration-200 ${
                        isActive 
                          ? 'text-morica-light pl-1 font-medium' 
                          : 'text-gray-400 hover:text-white hover:pl-1'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-morica-light mb-5">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 text-morica shrink-0">
                  <Phone size={16} strokeWidth={2} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wide">WhatsApp</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-white transition-colors truncate"
                  >
                    +62 {WHATSAPP_NUMBER}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 text-morica shrink-0">
                  <Mail size={16} strokeWidth={2} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wide">Email</span>
                  <a
                    href="mailto:rihan.123420028@student.itera.ac.id"
                    className="text-sm text-gray-300 hover:text-white transition-colors truncate"
                    title="rihan.123420028@student.itera.ac.id"
                  >
                    rihan.123420028@student.itera.ac.id
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="mt-0.5 text-morica shrink-0">
                  <MapPin size={16} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 uppercase tracking-wide">Lokasi</span>
                  <span className="text-sm text-gray-300">ITERA, Lampung Selatan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-gray-500">
          <p>
            &copy; {currentYear} Morica. PKKM FTI ITERA 2026.
          </p>
          
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-gray-400 font-medium">Alami • Aman • Efektif 🌿</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;