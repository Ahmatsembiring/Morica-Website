import { motion } from 'framer-motion';
import { Clock, Wind, Leaf } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { HOW_TO_USE } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const HowToUse = () => {
  // Gambar berada di folder public → tidak perlu import
  // Struktur saat ini: public/images/team/img1.png
  // (Jika nanti file dipindah langsung ke public/images, tinggal ganti jadi '/images/img1.png')
  const stepImages = [
    '/images/team/img1.png',
    '/images/team/img2.png',
    '/images/team/img3.png',
  ];

  return (
    <section id="how-to-use" className="section-padding bg-white relative overflow-hidden">
      {/* ===== DEKORASI BACKGROUND (Ringan, tanpa blur berat) ===== */}
      {/* Pola titik halus */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.07) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />
      {/* Ornamen cincin spiral (tema obat nyamuk bakar) */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border-[30px] border-morica/5 pointer-events-none" />
      <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full border-[18px] border-morica/5 pointer-events-none" />
      <div className="absolute -left-20 bottom-10 w-64 h-64 rounded-full border-[24px] border-forest/5 pointer-events-none" />

      <div className="container-custom px-6 relative z-10">
        <SectionTitle
          badge="Cara Penggunaan"
          title="Mudah & Praktis Digunakan"
          subtitle="Ikuti 3 langkah sederhana ini untuk mendapatkan perlindungan optimal dari nyamuk."
        />

        {/* ===== TIMELINE LANGKAH ===== */}
        <div className="relative mt-4">
          {/* Garis penghubung antar langkah (hanya desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] border-t-2 border-dashed border-morica/25 z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-10 md:gap-8 relative z-10"
          >
            {HOW_TO_USE.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative flex flex-col items-center group"
                >
                  {/* ===== LINGKARAN DENGAN GAMBAR LANGKAH ===== */}
                  <div className="relative z-10">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-morica to-forest shadow-lg shadow-morica/30 ring-8 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 overflow-hidden">
                      <img
                        src={stepImages[index]}
                        alt={`Langkah ${step.step} - ${step.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Badge nomor langkah */}
                    <span className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-400 text-forest rounded-full flex items-center justify-center text-sm font-bold border-4 border-white shadow-md">
                      {step.step}
                    </span>
                  </div>

                  {/* Kartu konten */}
                  <div className="relative mt-6 w-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 text-center overflow-hidden">
                    {/* Watermark nomor besar */}
                    <span className="absolute -top-3 -right-1 text-7xl font-display font-bold text-morica/[0.06] select-none pointer-events-none">
                      0{step.step}
                    </span>
                    <h3 className="text-lg md:text-xl font-display font-bold text-forest mb-2 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed relative z-10">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ===== BANNER INFO DURASI ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest via-forest to-morica p-8 md:p-10 text-white shadow-xl shadow-forest/20"
        >
          {/* Dekorasi cincin di banner */}
          <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full border-[14px] border-white/10 pointer-events-none" />
          <div className="absolute -right-2 -top-2 w-28 h-28 rounded-full border-[10px] border-white/10 pointer-events-none" />
          <div className="absolute -left-10 -bottom-14 w-44 h-44 rounded-full border-[12px] border-white/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Kiri: Info utama durasi */}
            <div className="flex items-center gap-5 text-center lg:text-left">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-white/10 ring-1 ring-white/20 items-center justify-center shrink-0">
                <Clock className="w-8 h-8 text-morica-light" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-morica-light text-xs font-semibold uppercase tracking-widest mb-1">
                  Durasi Perlindungan
                </p>
                <p className="text-3xl md:text-4xl font-display font-bold leading-tight">6–8 Jam</p>
                <p className="text-white/70 text-sm mt-1">Perlindungan semalaman, tidur lebih nyenyak</p>
              </div>
            </div>

            {/* Pembatas vertikal (desktop) */}
            <div className="hidden lg:block w-px self-stretch bg-white/15" />

            {/* Kanan: Tips tambahan */}
            <div className="flex flex-col gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-3 bg-white/10 ring-1 ring-white/10 rounded-xl px-4 py-3">
                <Wind className="w-4 h-4 text-morica-light shrink-0" />
                <span className="text-sm text-white/90">Gunakan di ruangan dengan ventilasi yang cukup</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 ring-1 ring-white/10 rounded-xl px-4 py-3">
                <Leaf className="w-4 h-4 text-morica-light shrink-0" />
                <span className="text-sm text-white/90">100% bahan alami, aman untuk keluarga</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;