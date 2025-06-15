import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Sparkles, Star } from 'lucide-react';

const WhyAura = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Choose Aura?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're committed to bringing you the finest fragrances with exceptional
          service
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: ShoppingBag,
            title: 'Premium Quality',
            description:
              'Only authentic, high-quality fragrances from renowned perfumers',
          },
          {
            icon: Star,
            title: 'Expert Curation',
            description:
              'Hand-selected scents by our fragrance experts and enthusiasts',
          },
          {
            icon: Heart,
            title: 'Customer Love',
            description:
              'Over 1000+ satisfied customers with 4.9-star average rating',
          },
          {
            icon: Sparkles,
            title: 'Unique Selection',
            description:
              "Discover rare and exclusive fragrances you won't find elsewhere",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="text-center group"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors">
              <feature.icon className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyAura;
