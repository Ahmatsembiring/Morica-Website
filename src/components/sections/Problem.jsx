import { motion } from 'framer-motion';
import { AlertTriangle, Bug, Wind } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Problem = () => {
  const problems = [
    {
      icon: <Bug className="w-12 h-12 text-red-500" />,
      title: "Nyamuk Membawa Penyakit Berbahaya",
      desc: "Demam Berdarah Dengue (DBD), malaria, dan chikungunya mengancam keluarga Anda setiap hari."
    },
    {
      icon: <Wind className="w-12 h-12 text-orange-500" />,
      title: "Asap Obat Nyamuk Kimia Berbahaya",
      desc: "Iritasi saluran pernapasan, batuk-batuk, dan alergi akibat bahan kimia sintetis seperti DEET dan Transfluthrin."
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
      title: "Dampak Jangka Panjang",
      desc: "Paparan bahan kimia obat nyamuk konvensional dalam jangka panjang berisiko bagi kesehatan anak dan lingkungan."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-6">
        <SectionTitle 
          badge="Masalah Nyamuk"
          title="Ancaman Nyamuk di Sekitar Kita"
          subtitle="Tahukah Anda? Indonesia mencatat puluhan ribu kasus DBD setiap tahunnya. Obat nyamuk kimia yang biasa digunakan justru menimbulkan masalah kesehatan baru."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <Card key={index} delay={index * 0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-forest mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.desc}
                </p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;