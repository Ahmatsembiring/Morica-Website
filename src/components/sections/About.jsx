import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { TEAM_MEMBERS } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const About = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom px-6">
        <SectionTitle 
          badge="Tentang Kami"
          title="Tim Morica - Mahasiswa Rekayasa Kehutanan ITERA"
          subtitle="Morica adalah hasil inovasi dan kreativitas mahasiswa Fakultas Teknologi Industri Institut Teknologi Sumatera dalam Program Kreativitas Kewirausahaan Mahasiswa (PKKM) 2026."
        />

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
    </section>
  );
};

export default About;