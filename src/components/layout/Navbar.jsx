import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINK } from '../../utils/constants';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Keunggulan', path: '/keunggulan' },
  { name: 'Cara Pakai', path: '/cara-pakai' },
  { name: 'Tim', path: '/tim' },
];

const MobileMenu = ({ isOpen, onClose, isActive }) => {
  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] h-screen w-screen bg-cream md:hidden overflow-y-auto"
          style={{
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              aria-label="Tutup menu"
              className="p-2 text-forest hover:text-morica transition-colors"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 px-6 min-h-[70vh]">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.3 }}
                className="w-full text-center"
              >
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={`inline-flex items-center gap-2 text-3xl font-display font-bold transition-colors ${
                    isActive(link.path) ? 'text-morica' : 'text-forest'
                  }`}
                >
                  {isActive(link.path) && (
                    <span className="w-2 h-2 rounded-full bg-morica" />
                  )}
                  {link.name}
                </Link>
                {i < navLinks.length - 1 && (
                  <div className="mt-6 h-px w-16 bg-morica/10 mx-auto" />
                )}
              </motion.div>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * navLinks.length, duration: 0.3 }}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="mt-4"
            >
              <Button variant="primary" className="!px-8 !py-3">
                <ShoppingBag size={18} /> Pesan via WhatsApp
              </Button>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-10">
            <img
              src="/images/logo.png"
              alt="Morica Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-morica font-semibold'
                    : scrolled
                    ? 'text-gray-700 hover:text-morica'
                    : 'text-forest/80 hover:text-morica'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-morica rounded-full"
                  />
                )}
              </Link>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="!px-6 !py-2.5 !text-sm">
                <ShoppingBag size={16} /> Pesan Sekarang
              </Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden relative z-10 p-2 text-forest"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu rendered via portal — immune to parent transform */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} isActive={isActive} />
    </>
  );
};

export default Navbar;