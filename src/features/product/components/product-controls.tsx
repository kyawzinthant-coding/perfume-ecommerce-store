import React from 'react';
import { SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';

import { Category } from '@/types';
import { ProductFilters } from '@/hooks/use-product-filters';
import { ActiveFilters } from './products-filter/active-filter';
import { Button } from '@/components/ui/button';

interface ProductsControlsProps {
  viewMode: 'grid' | 'list';
  sortBy: string;
  showFilters: boolean;
  activeFiltersCount: number;
  resultsCount: number;
  filters: ProductFilters;
  categories: Category[];
  onViewModeChange: (mode: 'grid' | 'list') => void;
  onSortChange: (sortBy: string) => void;
  onToggleFilters: () => void;
  onRemoveFilter: (filterKey: keyof ProductFilters) => void;
}

export const ProductsControls: React.FC<ProductsControlsProps> = ({
  viewMode,
  sortBy,
  activeFiltersCount,
  resultsCount,
  filters,
  categories,
  onViewModeChange,
  onSortChange,
  onToggleFilters,
  onRemoveFilter,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={onToggleFilters}
            className="lg:hidden flex items-center space-x-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900">
              {resultsCount}
            </span>
            <span className="text-gray-600">
              {resultsCount === 1 ? 'product' : 'products'} found
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex items-center space-x-1 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => onViewModeChange('grid')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`p-2 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <ActiveFilters
        filters={filters}
        categories={categories}
        activeFiltersCount={activeFiltersCount}
        onRemoveFilter={onRemoveFilter}
      />
    </div>
  );
};
