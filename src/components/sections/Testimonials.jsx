import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { TESTIMONIALS } from '../../utils/constants';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-forest text-white">
      <div className="container-custom px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-morica-light uppercase bg-white/10 rounded-full">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Kata Mereka Tentang Morica
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ribuan pelanggan telah merasakan manfaat suplemen herbal alami dari Morica
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card delay={index * 0.2} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <Quote className="w-10 h-10 text-morica mb-4 opacity-50" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-morica rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;