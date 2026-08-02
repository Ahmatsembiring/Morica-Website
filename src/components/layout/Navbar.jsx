import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINK } from '../../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keunggulan', href: '#features' },
    { name: 'Cara Pakai', href: '#how-to-use' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-morica rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl font-display">M</span>
          </div>
          <span className={`text-2xl font-display font-bold ${scrolled ? 'text-forest' : 'text-forest'}`}>
            Morica
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-morica transition-colors ${
                scrolled ? 'text-gray-700' : 'text-forest/80'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="!px-6 !py-2.5 !text-sm">
              <ShoppingBag size={16} /> Pesan Sekarang
            </Button>
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`md:hidden z-50 p-2 ${scrolled ? 'text-forest' : 'text-forest'}`}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-forest hover:text-morica"
                >
                  {link.name}
                </a>
              ))}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <Button variant="primary">Pesan via WhatsApp</Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;