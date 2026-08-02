import { motion } from 'framer-motion';
import { CheckCircle, Leaf, Droplets, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { WHATSAPP_LINK } from '../../utils/constants';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations';

const Solution = () => {
  const benefits = [
    { icon: <Leaf className="w-6 h-6" />, text: "100% Bahan Alami dari Daun Kelor & Eucalyptus" },
    { icon: <Droplets className="w-6 h-6" />, text: "Low Smoke Technology - Minim Asap" },
    { icon: <Shield className="w-6 h-6" />, text: "Aman untuk Anak & Bayi" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Efektif Usir Nyamuk 6-8 Jam" }
  ];

  return (
    <section id="about" className="section-padding bg-cream-light">
      <div className="container-custom px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
          >
            <SectionTitle 
              badge="Solusi Alami"
              title="Morica: Inovasi Bioteknologi dari Mahasiswa ITERA"
              subtitle="Obat nyamuk bakar alami yang menggabungkan kekuatan Daun Kelor (Moringa oleifera) dan Eucalyptus Pelangi (Eucalyptus deglupta) untuk perlindungan optimal tanpa bahan kimia berbahaya."
              center={false}
            />

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-morica-light rounded-full flex items-center justify-center text-morica-darker">
                    {benefit.icon}
                  </div>
                  <span className="text-forest font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Pesan Sekarang via WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
            className="relative"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-morica/10">
              <img 
                src="/images/product/product-hero.png" 
                alt="Morica Product" 
                className="w-full rounded-2xl"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-cream p-4 rounded-xl text-center">
                  <p className="text-3xl font-bold text-morica">50%</p>
                  <p className="text-sm text-gray-600">Daun Kelor</p>
                </div>
                <div className="bg-cream p-4 rounded-xl text-center">
                  <p className="text-3xl font-bold text-morica">10%</p>
                  <p className="text-sm text-gray-600">Eucalyptus</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;