import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';

import { Brand, Category } from '@/types';
import { ProductFilters } from '@/hooks/use-product-filters';
import { Button } from '@/components/ui/button';
import { CategoryFilter } from './category-filter';
import { BrandFilter } from './brand-filter';

interface ProductsFiltersProps {
  filters: ProductFilters;
  categories: Category[];
  brands: Brand[];
  activeFiltersCount: number;
  showFilters: boolean;
  onFilterChange: <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K]
  ) => void;
  onClearAll: () => void;
  onRemoveFilter: (filterKey: keyof ProductFilters) => void;
}

export const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  filters,
  categories,
  brands,
  activeFiltersCount,
  showFilters,
  onFilterChange,
  onClearAll,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-primary-600" />
              <h3 className="text-xl font-bold text-gray-900">Filters</h3>
              {activeFiltersCount > 0 && (
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearAll}
              className="text-primary-600 hover:text-primary-700"
            >
              Clear All
            </Button>
          </div>

          <div className="space-y-8">
            <CategoryFilter
              selectedCategory={filters.selectedCategory}
              categories={categories}
              onChange={(category) =>
                onFilterChange('selectedCategory', category)
              }
            />

            <BrandFilter
              selectedBrand={filters.selectedBrand}
              brands={brands}
              onChange={(brand) => onFilterChange('selectedBrand', brand)}
            />

            {/* <PriceRangeFilter
              priceRange={filters.priceRange}
              onChange={(range) => onFilterChange('priceRange', range)}
            />

            <RatingFilter
              selectedRating={filters.selectedRating}
              onChange={(rating) => onFilterChange('selectedRating', rating)}
            />

            <QuickFilters
              showOnlyInStock={filters.showOnlyInStock}
              showOnlyOnSale={filters.showOnlyOnSale}
              onInStockChange={(value) =>
                onFilterChange('showOnlyInStock', value)
              }
              onOnSaleChange={(value) =>
                onFilterChange('showOnlyOnSale', value)
              }
            /> */}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
