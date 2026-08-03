import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, Zap, Shield, Heart, Star } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINK, PRODUCT_INFO } from '../../utils/constants';
import { useEffect, useState } from 'react';

const CTA = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-forest via-morica-darker to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following glow */}
        <motion.div
          className="absolute w-96 h-96 bg-morica/30 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-morica-light/40 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}

        {/* Rotating rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-morica/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-morica-light/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">
                Best Seller Product 2026
              </span>
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 animate-pulse" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Jangan Tunggu <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-morica-light via-morica to-emerald-400 animate-gradient">
                Nyamuk Datang
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Lindungi keluarga Anda <strong className="text-morica-light">sekarang</strong> dengan perlindungan alami yang terbukti efektif.
            </p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
              { icon: Shield, text: "Teruji Klinis" },
              { icon: Heart, text: "Aman untuk Bayi" },
              { icon: Zap, text: "Efektif 8 Jam" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-2 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-morica/50 hover:bg-white/10 transition-all cursor-pointer"
              >
                <item.icon className="w-5 h-5 text-morica-light" />
                <span className="text-white font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl mb-10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm mb-2">Harga Spesial Promo</p>
                <div className="flex items-baseline gap-4 justify-center md:justify-start">
                  <p className="text-2xl text-gray-500 line-through">{PRODUCT_INFO.originalPrice}</p>
                  <p className="text-5xl md:text-6xl font-display font-bold text-white">{PRODUCT_INFO.price}</p>
                </div>
                <p className="text-morica-light text-sm mt-2 font-semibold">
                  Hemat Rp 5.000! • {PRODUCT_INFO.quantity}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="!bg-gradient-to-r !from-morica !to-emerald-500 !text-white hover:!from-morica-light hover:!to-morica !px-10 !py-5 !text-lg shadow-2xl shadow-morica/40 !rounded-full group">
                      <Phone size={22} />
                      Pesan Sekarang
                      <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </a>
                <p className="text-gray-400 text-xs text-center">
                  ⚡ Respon cepat dalam 5 menit
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Shield, text: "Garansi Uang Kembali", subtext: "Jika tidak efektif" },
              { icon: Zap, text: "Pengiriman Cepat", subtext: "Same day delivery" },
              { icon: Heart, text: "100% Alami", subtext: "Tanpa bahan kimia" },
              { icon: Star, text: "500+ Ulasan", subtext: "Rating 4.9/5" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-morica/30 hover:bg-white/10 transition-all"
              >
                <item.icon className="w-8 h-8 text-morica-light mx-auto mb-2" />
                <p className="text-white font-semibold text-sm mb-1">{item.text}</p>
                <p className="text-gray-400 text-xs">{item.subtext}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 bg-red-500 rounded-full"
              />
              <span className="text-white text-sm font-semibold">
                Stok terbatas! Hanya tersisa 47 kotak hari ini
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default CTA;