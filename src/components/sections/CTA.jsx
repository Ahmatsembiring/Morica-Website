import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { WHATSAPP_LINK } from '../../utils/constants';
import { fadeInUp } from '../../utils/animations';

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-morica to-morica-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Mulai Hidup Sehat Dengan Suplemen Herbal!
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Lindungi keluarga Anda dari nyamuk dengan cara yang alami, aman, dan efektif. 
            Pesan Morica sekarang dan rasakan perbedaannya!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="!bg-white !text-morica-darker hover:bg-cream-light !px-10 !py-4 !text-lg">
                <Phone size={20} />
                Pesan Sekarang
                <ArrowRight size={20} />
              </Button>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
            <p className="text-white font-semibold mb-2">📞 Hubungi Kami:</p>
            <p className="text-2xl font-display font-bold text-white">+62 823-8418-8310</p>
            <p className="text-white/80 text-sm mt-1">Tersedia di WhatsApp</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;