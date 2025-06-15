import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
        {[
          { number: '1000+', label: 'Happy Customers' },
          { number: '50+', label: 'Premium Brands' },
          { number: '4.9', label: 'Average Rating' },
          { number: '24/7', label: 'Customer Support' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-primary-600">
              {stat.number}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
