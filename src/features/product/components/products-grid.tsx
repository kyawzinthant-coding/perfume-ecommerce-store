import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types';
import { ProductCard } from './product-card';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'list';
  clearFilters: () => void;
}

export const ProductGrid = ({ products, viewMode }: ProductGridProps) => {
  return (
    <motion.div
      className={`grid gap-8 ${
        viewMode === 'grid'
          ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
          : 'grid-cols-1'
      }`}
    >
      <AnimatePresence>
        {products.map((product, index) => (
          <motion.div>
            <ProductCard product={product} index={index} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
