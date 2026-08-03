import { motion } from 'framer-motion';
import { Crown, GraduationCap, Sparkles, Mail, Phone, Leaf, Target } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { TEAM_MEMBERS } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Team = () => {
  const ketua = TEAM_MEMBERS.find(m => m.role === 'Ketua Tim');
  const anggota = TEAM_MEMBERS.filter(m => m.role !== 'Ketua Tim');

  return (
    <section id="team" className="relative section-padding bg-cream overflow-hidden">
      {/* 1. Background Pattern & Blobs (Memberi kesan tidak kosong) */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern Halus */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#84CC1610_1px,transparent_1px),linear-gradient(to_bottom,#84CC1610_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Animated Blobs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-morica-light/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-forest/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="container-custom px-6 relative z-10">
        <SectionTitle
          badge="Tim Kami"
          title="Dibalik Inovasi Morica"
          subtitle="Dipersembahkan oleh mahasiswa Rekayasa Kehutanan FTI ITERA yang berdedikasi menciptakan solusi alami bagi masyarakat."
        />

        {/* 2. Ketua Tim Section (Leadership Profile) */}
        {ketua && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-3xl mx-auto"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-morica to-forest rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-morica/10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="relative shrink-0">
                  <div className="w-28 h-28 bg-gradient-to-br from-morica to-forest rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <span className="text-white font-bold text-4xl font-display">{ketua.name.charAt(0)}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-white p-2 rounded-full shadow-md border-2 border-white">
                    <Crown size={20} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-3">
                    <h3 className="text-3xl font-display font-bold text-forest">{ketua.name}</h3>
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-morica-light/30 text-morica-darker text-xs font-bold rounded-full w-fit mx-auto md:mx-0 border border-morica/20">
                      <Target size={14} /> {ketua.division}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-mono mb-4">NIM: {ketua.nim}</p>
                  <div className="bg-cream/50 p-4 rounded-xl border-l-4 border-morica">
                    <p className="text-forest italic text-sm leading-relaxed">
                      "{ketua.quote}"
                    </p>
                  </div>
                </div>
                <div className="hidden md:flex flex-col gap-3">
                  <a href={`mailto:${ketua.email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-morica transition-colors">
                    <Mail size={16} /> {ketua.email}
                  </a>
                  <a href={`https://wa.me/${ketua.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-morica transition-colors">
                    <Phone size={16} /> {ketua.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. Anggota Tim Grid (Rich Cards) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {anggota.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group relative bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-morica/30 overflow-hidden"
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-morica-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Avatar & Role */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-forest to-morica rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                    <span className="text-white font-bold text-2xl font-display">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-display font-bold text-forest text-lg text-center leading-tight mb-1">
                    {member.name}
                  </h4>
                  <span className="text-morica-darker text-xs font-bold uppercase tracking-wide mb-2">
                    {member.role}
                  </span>
                  <span className="inline-block px-3 py-1 bg-cream text-forest text-[10px] font-semibold rounded-full border border-morica/20">
                    {member.division}
                  </span>
                </div>

                {/* Quote (Mini) */}
                <div className="flex-1 flex items-center justify-center mb-4">
                  <p className="text-gray-500 text-xs text-center italic leading-relaxed line-clamp-3">
                    "{member.quote}"
                  </p>
                </div>

                {/* Contact Info (Revealed on Hover) */}
                <div className="pt-4 border-t border-gray-100 space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-morica transition-colors truncate">
                    <Mail size={12} className="shrink-0" /> 
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 text-xs text-gray-600 hover:text-morica transition-colors">
                    <Phone size={12} className="shrink-0" /> 
                    {member.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. Dosen Pembimbing Section (Academic Credibility) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest/10 text-forest text-xs font-bold uppercase tracking-wider rounded-full border border-forest/20">
              <GraduationCap size={14} /> Dosen Pembimbing Akademik
            </span>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-forest to-morica rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-forest to-forest-dark text-white p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 border border-white/10">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-full flex items-center justify-center shrink-0">
                <Leaf className="w-10 h-10 text-morica-light" />
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  Maeda Wahyuningrum, S.Hut., M.Si.
                </h3>
                <p className="text-morica-light text-sm md:text-base mb-4 font-mono">
                  NIP. 199609072024212053 • Program Studi Rekayasa Kehutanan
                </p>
                
                {/* Detail dari PDF untuk membuatnya "berisi" */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
                  <p className="text-xs text-morica-light/70 uppercase tracking-wider font-semibold mb-1">Bidang Keahlian</p>
                  <p className="text-sm text-gray-200">Teknologi Hasil Hutan, Bioenergi, dan Pengembangan Produk Berkelanjutan.</p>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "Terima kasih atas bimbingan dan arahan ilmiahnya dalam mengembangkan formulasi bioteknologi Morica, memastikan produk tidak hanya inovatif tetapi juga teruji secara empiris dan layak secara komersial."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5. Footer Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center pt-8 border-t border-morica/10"
        >
          <p className="text-forest/60 text-sm flex items-center justify-center gap-2 font-medium">
            <Sparkles size={14} className="text-morica" />
            Small Innovation with Maximum Impact!
            <Sparkles size={14} className="text-morica" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;