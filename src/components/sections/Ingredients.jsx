import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { INGREDIENTS } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Ingredients = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-6">
        <SectionTitle 
          badge="Komposisi Alami"
          title="Kekuatan Bahan Alami Morica"
          subtitle="Setiap bahan dipilih secara teliti dan diformulasikan dengan teknologi bioteknologi untuk efektivitas maksimal."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INGREDIENTS.map((ingredient, index) => (
            <Card key={index} delay={index * 0.15} className="text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-morica-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <FlaskConical className="w-8 h-8 text-morica-darker" />
                </div>
                <div className="inline-block px-3 py-1 bg-morica text-white text-xs font-bold rounded-full mb-2">
                  {ingredient.percentage}
                </div>
              </div>
              <h3 className="text-lg font-display font-bold text-forest mb-1">
                {ingredient.title}
              </h3>
              <p className="text-xs text-gray-500 italic mb-3">
                {ingredient.scientific}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {ingredient.desc}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Ingredients;