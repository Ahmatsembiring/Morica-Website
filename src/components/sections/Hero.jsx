import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Leaf, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINK } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-cream">
      {/* Background texture & blobs */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/backgrounds/leaf-pattern.svg')] bg-cover bg-center" />
      <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] bg-gradient-to-br from-morica-light/40 to-morica/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-gradient-to-tr from-forest/10 to-transparent blur-[90px] rounded-full" />

      <div className="container-custom px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Copy */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-7 text-center lg:text-left"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-morica/20"
          >
            <Sparkles size={14} className="text-morica" />
            <span className="text-sm font-semibold text-forest tracking-wide">
              100% Herbal & Low Smoke Technology
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-forest leading-[1.1] tracking-tight"
          >
            Bebas Nyamuk <br className="hidden sm:block" />
            <span className="relative inline-block text-morica">
              Tanpa Batuk
              <svg
                className="absolute left-0 -bottom-2 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 6C40 2 160 2 198 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-morica-light"
                />
              </svg>
            </span>{' '}
            & Iritasi.
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Morica adalah obat nyamuk bakar alami dari{' '}
            <span className="font-semibold text-forest">Daun Kelor & Eucalyptus Pelangi</span>.
            Aman untuk keluarga, ramah lingkungan, dan efektif mengusir nyamuk.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="shadow-lg shadow-morica/20 hover:shadow-xl hover:shadow-morica/30 transition-shadow">
                Pesan Sekarang <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#about">
              <Button variant="secondary">Pelajari Lebih Lanjut</Button>
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 justify-center lg:justify-start pt-6"
          >
            <div className="flex -space-x-3">
              {['from-morica to-morica-darker', 'from-forest to-forest/70', 'from-morica-light to-morica', 'from-forest/80 to-forest'].map(
                (grad, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${grad} flex items-center justify-center text-xs font-bold text-white shadow-sm`}
                  >
                    U{i + 1}
                  </div>
                )
              )}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-400 gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600 font-medium">Disukai Ibu Rumah Tangga</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Product card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-md mx-auto lg:max-w-none"
        >
          <div className="relative z-10 bg-white p-6 rounded-[2rem] shadow-2xl shadow-forest/10 border border-morica/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="/images/product/logo1.png"
              alt="Morica Obat Nyamuk Bakar Alami"
              className="w-full h-auto object-cover rounded-2xl bg-gray-100 min-h-[380px]"
            />

            {/* Price badge */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-forest text-white px-5 py-4 rounded-2xl shadow-xl shadow-forest/30">
              <p className="text-[10px] sm:text-xs text-morica-light font-semibold uppercase tracking-wider">
                Harga Spesial
              </p>
              <p className="text-xl sm:text-2xl font-display font-bold whitespace-nowrap">Rp 15.000</p>
              <p className="text-[10px] sm:text-xs text-gray-300">10 Keping Spiral</p>
            </div>

            {/* Low smoke badge */}
            <div className="absolute -top-4 -right-3 sm:-right-4 bg-white/95 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl shadow-lg border border-morica/20 flex items-center gap-2">
              <div className="w-8 h-8 bg-morica-light rounded-full flex items-center justify-center text-morica-darker shrink-0">
                <Leaf size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-forest">Low Smoke</p>
                <p className="text-[10px] text-gray-500">Minim Asap</p>
              </div>
            </div>

            {/* Safety badge */}
            <div className="absolute top-1/2 -left-5 sm:-left-7 -translate-y-1/2 bg-white p-2.5 rounded-xl shadow-lg border border-morica/20 hidden sm:flex items-center gap-2">
              <ShieldCheck size={16} className="text-forest" />
              <span className="text-[10px] font-bold text-forest">Aman Keluarga</span>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-morica/15 to-transparent rounded-full blur-3xl -z-10 scale-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;