import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';
import Stats from './Stats';
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-gold-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center space-x-2 text-primary-600">
            <Sparkles className="h-6 w-6" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Luxury Fragrances
            </span>
            <Sparkles className="h-6 w-6" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            Discover Your
            <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-gold-500 bg-clip-text text-transparent">
              Signature Scent
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in our curated collection of luxury perfumes. Each
            fragrance tells a unique story of elegance, sophistication, and
            personal expression.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/products">
              <Button size="lg" className="px-8 py-4 text-lg">
                Explore Collection
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products?featured=true">
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Featured Products
              </Button>
            </Link>
          </div>
        </motion.div>
        <Stats />
      </div>
    </section>
  );
};

export default HeroSection;
