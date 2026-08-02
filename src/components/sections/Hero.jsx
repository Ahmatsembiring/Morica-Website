import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Leaf } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINK } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-cream">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/backgrounds/leaf-pattern.svg')] bg-cover bg-center"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-morica-light/30 to-transparent blur-3xl"></div>

      <div className="container-custom px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-center lg:text-left"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-morica/20">
            <span className="flex h-2 w-2 rounded-full bg-morica animate-pulse"></span>
            <span className="text-sm font-semibold text-forest">100% Herbal & Low Smoke Technology</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest leading-tight">
            Bebas Nyamuk <br/>
            <span className="text-morica">Tanpa Batuk</span> & Iritasi.
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Morica adalah obat nyamuk bakar alami dari Daun Kelor & Eucalyptus Pelangi. Aman untuk keluarga, ramah lingkungan, dan efektif mengusir nyamuk.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Pesan Sekarang <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#about">
              <Button variant="secondary">
                Pelajari Lebih Lanjut
              </Button>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start pt-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                  U{i}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm text-gray-600 font-medium">Disukai Ibu Rumah Tangga</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 bg-white p-6 rounded-3xl shadow-2xl border border-morica/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/product/product-hero.png" 
              alt="Morica Obat Nyamuk Bakar Alami" 
              className="w-full h-auto object-cover rounded-2xl bg-gray-100 min-h-[400px]"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-forest text-white p-4 rounded-2xl shadow-xl">
              <p className="text-xs text-morica-light font-semibold uppercase tracking-wider">Harga Spesial</p>
              <p className="text-2xl font-display font-bold">Rp 15.000</p>
              <p className="text-xs text-gray-300">10 Keping Spiral</p>
            </div>

            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-morica/20 flex items-center gap-2">
              <div className="w-8 h-8 bg-morica-light rounded-full flex items-center justify-center text-morica-darker">
                <Leaf size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-forest">Low Smoke</p>
                <p className="text-[10px] text-gray-500">Minim Asap</p>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-morica/10 rounded-full blur-3xl -z-10 scale-90"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;