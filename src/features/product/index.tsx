import { useProductFilters } from '@/hooks/use-product-filters';

import { Brand, Category, Product } from '@/types';
import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { ProductsFilters } from './components/products-filter';
import { ProductsHero } from './components/product-hero';

import { ProductGrid } from './components/products-grid';
import { EmptyState } from './components/empty-state';
import { useSuspenseQuery } from '@tanstack/react-query';
import {
  fetchCategoryAndBrandQuery,
  fetchProductsListQuery,
} from '@/api/product-query';
import { ProductsControls } from './components/product-controls';

export interface ProductsPageData {
  products: Product[];
  categories: Category[];
  brands: Brand[];
}

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const { data: product } = useSuspenseQuery(fetchProductsListQuery());

  const { data: categoryAndBrandData } = useSuspenseQuery(
    fetchCategoryAndBrandQuery()
  );

  const data: ProductsPageData = {
    products: product.data,
    categories: categoryAndBrandData.categories,
    brands: categoryAndBrandData.brands,
  };

  const {
    filters,
    filteredAndSortedProducts,
    activeFiltersCount,
    updateFilter,
    clearAllFilters,
    removeFilter,
  } = useProductFilters(data.products, searchParams, setSearchParams);

  console.log('product filter ', filteredAndSortedProducts);

  return (
    <div className="min-h-screen">
      <ProductsHero
        searchQuery={filters.searchQuery}
        onSearchChange={(query) => updateFilter('searchQuery', query)}
        onSearch={() => {
          const params = new URLSearchParams(searchParams);
          if (filters.searchQuery) {
            params.set('search', filters.searchQuery);
          } else {
            params.delete('search');
          }
          setSearchParams(params);
        }}
      />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductsFilters
            filters={filters}
            categories={data.categories}
            brands={data.brands}
            activeFiltersCount={activeFiltersCount}
            showFilters={showFilters}
            onFilterChange={updateFilter}
            onClearAll={clearAllFilters}
            onRemoveFilter={removeFilter}
          />

          <div className="flex-1">
            <ProductsControls
              viewMode={viewMode}
              sortBy={filters.sortBy}
              showFilters={showFilters}
              activeFiltersCount={activeFiltersCount}
              resultsCount={filteredAndSortedProducts.length}
              filters={filters}
              categories={data.categories}
              onViewModeChange={setViewMode}
              onSortChange={(sortBy) => updateFilter('sortBy', sortBy)}
              onToggleFilters={() => setShowFilters(!showFilters)}
              onRemoveFilter={removeFilter}
            />

            {filteredAndSortedProducts.length > 0 ? (
              <ProductGrid
                products={filteredAndSortedProducts}
                viewMode={viewMode}
                clearFilters={clearAllFilters}
              />
            ) : (
              <EmptyState onClearFilters={clearAllFilters} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
