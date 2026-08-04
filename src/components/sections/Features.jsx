import { motion } from 'framer-motion';
import { 
  Leaf, Wind, Baby, Clock, Flower2, Globe, 
  CheckCircle2, XCircle, FlaskConical, ShieldCheck,
  FileText, Award, ExternalLink, Download
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const FEATURES = [
  {
    icon: Leaf,
    title: '100% Bahan Alami',
    desc: 'Diformulasikan dari Daun Kelor & Eucalyptus Pelangi. Bebas DEET, Transfluthrin, dan Metofluthrin.',
    color: 'bg-green-100 text-green-700'
  },
  {
    icon: Wind,
    title: 'Low Smoke Technology',
    desc: 'Menggunakan serbuk tempurung kelapa organik menghasilkan asap yang sangat minimal dan tidak membuat batuk.',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    icon: Baby,
    title: 'Aman untuk Anak & Bayi',
    desc: 'Minim iritasi saluran pernapasan. Aman digunakan di kamar tidur dan ruangan tertutup dengan ventilasi cukup.',
    color: 'bg-pink-100 text-pink-700'
  },
  {
    icon: Clock,
    title: 'Tahan 6-8 Jam',
    desc: 'Perlindungan optimal sepanjang malam. Satu spiral cukup untuk tidur nyenyak tanpa gangguan nyamuk.',
    color: 'bg-orange-100 text-orange-700'
  },
  {
    icon: Flower2,
    title: 'Aroma Herbal Menenangkan',
    desc: 'Mengandung minyak atsiri Eucalyptol & Limonene yang memberikan wangi alami dan menyegarkan ruangan.',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    icon: Globe,
    title: 'Ramah Lingkungan',
    desc: 'Sisa pembakaran bersifat biodegradable (mudah terurai) dan mendukung keberlanjutan sumber daya alam.',
    color: 'bg-teal-100 text-teal-700'
  }
];

const COMPARISON_DATA = [
  { label: 'Bahan Utama', morica: 'Kelor + Eucalyptus (Alami)', regular: 'Allethrin / Transfluthrin (Kimia)' },
  { label: 'Kandungan Asap', morica: 'Sangat Minimal (Low Smoke)', regular: 'Tebal, Pekat & Menyengat' },
  { label: 'Aroma', morica: 'Herbal Natural & Menenangkan', regular: 'Bau Kimia Menyengat' },
  { label: 'Dampak Kesehatan', morica: 'Aman, Minim Iritasi', regular: 'Risiko Iritasi Pernapasan' },
  { label: 'Dampak Lingkungan', morica: 'Biodegradable & Ramah Lingkungan', regular: 'Kontaminasi Udara Ruangan' },
];

const LEGAL_DOCS = [
  {
    icon: FileText,
    tag: 'Legalitas Usaha',
    title: 'NIB (Nomor Induk Berusaha)',
    desc: 'Dokumen legalitas usaha resmi Morica sebagai bukti pendaftaran usaha yang sah.',
    url: '/docs/nib.pdf'
  },
  {
    icon: Award,
    tag: 'HAKI',
    title: 'Surat Cipta',
    desc: 'Dokumen perlindungan hak kekayaan intelektual atas inovasi dan karya Morica.',
    url: '/docs/surat-cipta.pdf'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative section-padding bg-gradient-to-b from-cream via-white to-cream-light overflow-hidden">
      {/* Background Decoration Ringan */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.06) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-morica-light/10 rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-forest/5 rounded-full"></div>
      </div>

      <div className="container-custom px-6 relative z-10">
        <SectionTitle
          badge="Keunggulan Produk"
          title="Mengapa Harus Memilih Morica?"
          subtitle="Kombinasi bioteknologi dan kekayaan alam Indonesia untuk perlindungan nyamuk yang lebih aman, sehat, dan efektif."
        />

        {/* 6 Feature Cards */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-display font-bold text-forest mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison Section: Morica vs Konvensional */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-morica-darker uppercase bg-morica-light rounded-full">
            <FlaskConical className="w-3 h-3 inline mr-1" /> Perbandingan Ilmiah
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mb-4">
            Morica vs Obat Nyamuk Biasa
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat perbedaan nyata antara inovasi alami Morica dengan obat nyamuk bakar konvensional yang beredar di pasaran.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Morica Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-forest to-forest-dark text-white p-8 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-morica/20 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-morica rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold">Morica</h3>
                  <p className="text-morica-light text-sm">Obat Nyamuk Alami</p>
                </div>
              </div>

              <ul className="space-y-4">
                {COMPARISON_DATA.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-morica-light shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-300 uppercase tracking-wide font-semibold">{item.label}</p>
                      <p className="text-sm md:text-base font-medium">{item.morica}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Konvensional Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-gray-700">Konvensional</h3>
                  <p className="text-gray-500 text-sm">Obat Nyamuk Kimia</p>
                </div>
              </div>

              <ul className="space-y-4">
                {COMPARISON_DATA.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">{item.label}</p>
                      <p className="text-sm md:text-base font-medium text-gray-600">{item.regular}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* =============================== */}
        {/* SECTION LEGALITAS / PDF DOKUMEN */}
        {/* =============================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 mb-10 text-center"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-morica-darker uppercase bg-morica-light rounded-full">
            <ShieldCheck className="w-3 h-3 inline mr-1" /> Legalitas Resmi
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-forest mb-4">
            Legalitas & Sertifikasi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Morica telah dilengkapi dokumen legal resmi yang dapat dilihat dan diunduh sebagai bentuk transparansi dan kepercayaan produk.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20"
        >
          {LEGAL_DOCS.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white p-7 rounded-3xl border border-morica/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-morica/10 text-morica rounded-2xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" strokeWidth={1.8} />
                  </div>

                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-morica-darker bg-morica-light/40 px-2.5 py-1 rounded-full">
                      {doc.tag}
                    </span>
                    <h3 className="text-lg font-display font-bold text-forest mt-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-forest text-white text-sm font-semibold rounded-xl hover:bg-morica transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat PDF
                  </a>

                  <a
                    href={doc.url}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-morica/10 text-morica-darker text-sm font-semibold rounded-xl hover:bg-morica/20 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Unduh
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-center bg-white p-6 rounded-2xl shadow-md border border-morica/10 max-w-3xl mx-auto"
        >
          <ShieldCheck className="w-10 h-10 text-morica" />
          <div>
            <h4 className="font-display font-bold text-forest text-lg">Terbukti Efektif & Aman</h4>
            <p className="text-gray-600 text-sm">
              Telah melalui uji efektivitas pengusiran nyamuk dan validasi pasar nyata di lingkungan ITERA.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;