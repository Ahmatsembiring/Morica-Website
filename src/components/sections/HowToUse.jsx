import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { HOW_TO_USE } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const HowToUse = () => {
  return (
    <section id="how-to-use" className="section-padding bg-white">
      <div className="container-custom px-6">
        <SectionTitle 
          badge="Cara Penggunaan"
          title="Mudah & Praktis Digunakan"
          subtitle="Ikuti 3 langkah sederhana ini untuk mendapatkan perlindungan optimal dari nyamuk."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {HOW_TO_USE.map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card delay={index * 0.2} className="relative overflow-hidden">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-morica text-white rounded-full flex items-center justify-center text-xl font-bold font-display">
                  {step.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-display font-bold text-forest mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {index < HOW_TO_USE.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-12 h-12 text-morica/30" />
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-forest text-white p-8 rounded-2xl text-center"
        >
          <p className="text-lg mb-2"><strong> Durasi Perlindungan:</strong> 6-8 jam per spiral</p>
          <p className="text-sm text-gray-300">Gunakan di ruangan dengan ventilasi yang cukup</p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;