import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/features/product/components/product-card';
import { mockProducts } from '@/lib/mockProducts';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Suspense } from 'react';
import { Link } from 'react-router';

const FeaturedProducts = () => {
  const featuredProducts = mockProducts
    .filter((product) => product.featured)
    .slice(0, 4);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Featured Collection
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Handpicked fragrances that represent the pinnacle of perfumery
          artistry
        </p>
      </motion.div>

      <Suspense fallback={<LoadingSpinner size="lg" className="py-20" />}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </Suspense>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link to="/products">
          <Button className="cursor-pointer" variant="outline" size="lg">
            View All Products
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;
