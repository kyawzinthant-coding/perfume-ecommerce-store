import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

interface ProductsHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
}

export const ProductsHero: React.FC<ProductsHeroProps> = ({
  searchQuery,
  onSearchChange,
  onSearch,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="bg-gradient-to-r from-primary-600 via-purple-600 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Discover Your Perfect Scent
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Explore our curated collection of luxury fragrances from the world's
            finest perfumers
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by name, brand, or scent notes..."
                className="w-full pl-12 pr-16 py-4 text-lg text-gray-900 bg-white rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
              />
              <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
