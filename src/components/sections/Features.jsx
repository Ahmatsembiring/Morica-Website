import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { FEATURES } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Features = () => {
  return (
    <section id="features" className="section-padding bg-cream-light">
      <div className="container-custom px-6">
        <SectionTitle 
          badge="Keunggulan Produk"
          title="Mengapa Memilih Morica?"
          subtitle="Morica hadir dengan berbagai keunggulan yang membuat perlindungan dari nyamuk menjadi lebih aman, nyaman, dan efektif."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-bold text-forest mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;