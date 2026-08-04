import { motion } from 'framer-motion';
import { Phone, ArrowRight, Zap, Shield, Heart, Star, Bug, AlertTriangle } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINK, PRODUCT_INFO } from '../../utils/constants';
import { useEffect, useState } from 'react';

// 💾 Simpan gambar MVP (orang digigit nyamuk) ke public/images, lalu sesuaikan path ini
const MOSQUITO_BITE_IMG = '/images/product/image.jpeg';

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

      <div className="container-custom px-6 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          {/* ===== HERO: Headline + Gambar MVP ===== */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
            {/* Kiri: Badge + Headline */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
                <span className="text-white font-semibold text-xs md:text-sm">
                  Best Seller Product 2026
                </span>
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                Jangan Tunggu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-morica-light via-morica to-emerald-400 animate-gradient">
                  Nyamuk Datang
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Lindungi keluarga Anda <strong className="text-morica-light">sekarang</strong> dengan perlindungan alami yang terbukti efektif.
              </p>
            </motion.div>

            {/* Kanan: Gambar MVP orang digigit nyamuk */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              {/* Glow di belakang gambar */}
              <div className="absolute inset-0 bg-morica/30 rounded-[2.5rem] blur-3xl scale-95" />

              {/* Gambar dengan animasi floating */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl shadow-black/60 aspect-[4/3] md:aspect-[16/11]">
                  <img
                    src={MOSQUITO_BITE_IMG}
                    alt="Orang digigit nyamuk - lindungi keluarga Anda sekarang"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient gelap di bawah gambar */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
                  {/* Caption di dalam gambar */}
                  <p className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full px-6 text-center text-white text-sm md:text-base font-semibold">
                    Gatal, bentol, dan risiko penyakit — jangan biarkan terjadi pada keluarga Anda.
                  </p>
                </div>

                {/* Badge peringatan berdenyut */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="absolute -top-4 -left-3 md:-left-6 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-xl shadow-red-500/40"
                >
                  <AlertTriangle className="w-4 h-4 text-white" />
                  <span className="text-white text-xs md:text-sm font-bold">Awas! Nyamuk Mengintai</span>
                </motion.div>

                {/* Nyamuk-nyamuk kecil melayang di sekitar gambar */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-morica-light/70"
                    style={{
                      top: `${18 + i * 26}%`,
                      right: i % 2 === 0 ? '-14px' : '-6px',
                    }}
                    animate={{ y: [-6, 6, -6], rotate: [0, 12, 0] }}
                    transition={{ duration: 2.5 + i, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Bug className="w-5 h-5" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {[
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
              <span className="text-white text-sm font-semibold"></span>
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