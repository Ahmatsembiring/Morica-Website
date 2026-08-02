import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { WHATSAPP_NUMBER, SOCIAL_MEDIA } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-forest text-white pt-16 pb-8">
      <div className="container-custom px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-morica rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-display">M</span>
              </div>
              <span className="text-2xl font-display font-bold">Morica</span>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed mb-6">
              Small Innovation with Maximum Impact! Obat nyamuk bakar alami berbasis bioteknologi dari Daun Kelor & Eucalyptus Pelangi.
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_MEDIA.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-morica rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_MEDIA.tiktok} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-morica rounded-full flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-morica-light">Hubungi Kami</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-morica mt-1 shrink-0" />
                <span>+62 {WHATSAPP_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-morica mt-1 shrink-0" />
                <span>rihan.123420028@student.itera.ac.id</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-morica mt-1 shrink-0" />
                <span>ITERA, Lampung Selatan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-display font-bold mb-4 text-morica-light">Navigasi</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-morica transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-morica transition-colors">Tentang Kami</a></li>
              <li><a href="#features" className="hover:text-morica transition-colors">Keunggulan</a></li>
              <li><a href="#how-to-use" className="hover:text-morica transition-colors">Cara Pakai</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Morica. Program Kreativitas Kewirausahaan Mahasiswa (PKKM) FTI ITERA 2026.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;