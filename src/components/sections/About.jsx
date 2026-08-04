import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award, Users, Target, Package, ZoomIn, X,
  Leaf, ShieldCheck, Recycle
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { TEAM_MEMBERS } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const PACKAGING_HIGHLIGHTS = [
  { icon: Leaf,        text: 'Menonjolkan nilai alami & ramah lingkungan produk.' },
  { icon: ShieldCheck, text: 'Informasi transparan: komposisi, petunjuk pemakaian & penyimpanan.' },
  { icon: Recycle,     text: 'Konsep material kemasan yang berkelanjutan.' },
];

const About = () => {
  const [zoom, setZoom] = useState(false);

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom px-6">
        <SectionTitle
          badge="Tentang Kami"
          title="Tim Morica - Mahasiswa Rekayasa Kehutanan ITERA"
          subtitle="Morica adalah hasil inovasi dan kreativitas mahasiswa Fakultas Teknologi Industri Institut Teknologi Sumatera dalam Program Kreativitas Kewirausahaan Mahasiswa (PKKM) 2026."
        />

        {/* 3 Kartu Statistik */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-morica-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-morica-darker" />
            </div>
            <h3 className="text-xl font-display font-bold text-forest mb-2">Program PKKM 2026</h3>
            <p className="text-gray-600">Program Kreativitas Kewirausahaan Mahasiswa FTI ITERA</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-morica-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-morica-darker" />
            </div>
            <h3 className="text-xl font-display font-bold text-forest mb-2">5 Anggota Tim</h3>
            <p className="text-gray-600">Mahasiswa Rekayasa Kehutanan yang berinovasi</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-morica-light rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-morica-darker" />
            </div>
            <h3 className="text-xl font-display font-bold text-forest mb-2">Small Innovation, Maximum Impact!</h3>
            <p className="text-gray-600">Inovasi kecil dengan dampak besar untuk masyarakat</p>
          </motion.div>
        </div>

        {/* ================================ */}
        {/* BARU: SHOWCASE DESAIN KEMASAN    */}
        {/* ================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid lg:grid-cols-5">
            {/* Panel teks */}
            <div className="lg:col-span-2 p-8 md:p-10 bg-gradient-to-br from-forest to-forest-dark text-white flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 self-start px-4 py-1.5 mb-5 text-xs font-bold tracking-wider uppercase bg-morica/20 text-morica-light rounded-full">
                <Package className="w-3.5 h-3.5" /> Desain Kemasan
              </span>

              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Dari Ide Menjadi Karya Nyata
              </h3>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Morica tidak hanya unggul pada formula. Seluruh identitas visual — mulai dari
                logo hingga layout kemasan — dirancang mandiri oleh tim sebagai wujud
                profesionalisme produk kewirausahaan mahasiswa.
              </p>

              <ul className="space-y-3">
                {PACKAGING_HIGHLIGHTS.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                      <Icon className="w-5 h-5 text-morica-light shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Panel gambar */}
            <div className="lg:col-span-3 bg-cream-light p-6 md:p-10 flex flex-col justify-center">
              <button
                onClick={() => setZoom(true)}
                className="group relative block w-full cursor-zoom-in"
              >
                <img
                  src="/images/ingredients/desain-kemasan.jpeg"
                  alt="Desain kemasan Morica – obat nyamuk bakar alami"
                  className="w-full h-auto rounded-2xl shadow-md border border-morica/10"
                />
                <div className="absolute inset-0 rounded-2xl bg-forest/0 group-hover:bg-forest/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-flex items-center gap-2 px-4 py-2 bg-white text-forest text-sm font-semibold rounded-full">
                    <ZoomIn className="w-4 h-4" /> Klik untuk memperbesar
                  </span>
                </div>
              </button>
              <p className="text-center text-xs text-gray-500 mt-4">
                Layout kemasan resmi Morica · Pekan Kreativitas Kewirausahaan Mahasiswa FTI ITERA 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Kartu Anggota Tim */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white p-8 rounded-3xl shadow-xl"
        >
          <h3 className="text-2xl font-display font-bold text-center text-forest mb-8">
            Anggota Tim
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-4 bg-cream rounded-xl"
              >
                <div className="w-16 h-16 bg-morica rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-display font-bold text-forest text-sm mb-1">
                  {member.name}
                </h4>
                <p className="text-xs text-gray-600">{member.role}</p>
                <p className="text-xs text-morica-darker font-semibold mt-1">
                  {member.nim}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <strong>Dosen Pembimbing:</strong> Maeda Wahyuningrum, S.Hut., M.Si.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox zoom kemasan */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setZoom(false)}
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              src="/images/ingredients/desain-kemasan.jpeg"
              alt="Desain kemasan Morica"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;