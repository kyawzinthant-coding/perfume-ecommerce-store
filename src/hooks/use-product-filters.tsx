import { Product } from '@/types';
import { useState, useMemo, useCallback, useEffect } from 'react';

export interface ProductFilters {
  searchQuery: string;
  selectedCategory: string;
  selectedBrand: string;
  priceRange: [number, number];
  selectedRating: number;
  showOnlyInStock: boolean;
  sortBy: string;
}

export const useProductFilters = (
  products: Product[],
  searchParams: URLSearchParams,
  setSearchParams: (params: URLSearchParams) => void
) => {
  const maxPrice = useMemo(() => {
    if (!products || products.length === 0) return 200;
    return Math.ceil(
      Math.max(...products.map((p) => parseFloat(String(p.price))))
    );
  }, [products]);

  const [isPriceFilterActive, setIsPriceFilterActive] = useState(false);
  const [isInitialRangeSet, setIsInitialRangeSet] = useState(false);

  const [filters, setFilters] = useState<ProductFilters>({
    searchQuery: searchParams.get('search') || '',
    selectedCategory: searchParams.get('category') || '',
    selectedBrand: '',
    priceRange: [0, maxPrice],
    selectedRating: 0,
    showOnlyInStock: false,
    sortBy: 'name',
  });

  const updateFilter = useCallback(
    <K extends keyof ProductFilters>(key: K, value: ProductFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
      if (key === 'priceRange' && isInitialRangeSet) {
        setIsPriceFilterActive(true);
      }
    },
    [isInitialRangeSet]
  );

  useEffect(() => {
    if (maxPrice > 0 && !isInitialRangeSet) {
      updateFilter('priceRange', [0, maxPrice]);
      setIsInitialRangeSet(true);
    }
  }, [maxPrice, isInitialRangeSet, updateFilter]);

  const clearAllFilters = useCallback(() => {
    setFilters({
      searchQuery: '',
      selectedCategory: '',
      selectedBrand: '',
      priceRange: [0, maxPrice],
      selectedRating: 0,
      showOnlyInStock: false,
      sortBy: 'name',
    });
    setIsPriceFilterActive(false);
    setSearchParams(new URLSearchParams());
  }, [setSearchParams, maxPrice]);

  const removeFilter = useCallback(
    (filterKey: keyof ProductFilters) => {
      switch (filterKey) {
        case 'selectedCategory':
          updateFilter('selectedCategory', '');
          break;
        case 'selectedBrand':
          updateFilter('selectedBrand', '');
          break;
        case 'selectedRating':
          updateFilter('selectedRating', 0);
          break;
        case 'showOnlyInStock':
          updateFilter('showOnlyInStock', false);
          break;
      }
    },
    [updateFilter]
  );

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.map((p) => ({
      ...p,
      price: parseFloat(String(p.price)),
    }));

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand_name.toLowerCase().includes(query) ||
          product.category_name.toLowerCase().includes(query) ||
          product.gender_affinity.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.top_notes.toLowerCase().includes(query) ||
          product.middle_notes.toLowerCase().includes(query) ||
          product.base_notes.toLowerCase().includes(query)
      );
    }

    if (filters.selectedCategory) {
      filtered = filtered.filter(
        (product) =>
          product.category_name.toLowerCase() ===
          filters.selectedCategory.toLowerCase()
      );
    }

    if (filters.selectedBrand) {
      filtered = filtered.filter(
        (product) => product.brand_name === filters.selectedBrand
      );
    }

    if (isPriceFilterActive) {
      filtered = filtered.filter(
        (product) =>
          product.price >= filters.priceRange[0] &&
          product.price <= filters.priceRange[1]
      );
    }

    if (filters.selectedRating > 0) {
      filtered = filtered.filter(
        (product) => product.rating >= filters.selectedRating
      );
    }

    if (filters.showOnlyInStock) {
      filtered = filtered.filter((product) => product.stock_quantity > 2);
    }

    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return b.reviewCount - a.reviewCount;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, filters, isPriceFilterActive]);

  const activeFiltersCount = useMemo(() => {
    return [
      filters.selectedCategory,
      filters.selectedBrand,
      filters.selectedRating > 0,
      filters.showOnlyInStock,
      isPriceFilterActive,
    ].filter(Boolean).length;
  }, [filters, isPriceFilterActive]);

  return {
    filters,
    filteredAndSortedProducts,
    activeFiltersCount,
    updateFilter,
    clearAllFilters,
    removeFilter,
  };
};
