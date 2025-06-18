import React from 'react';
import { X } from 'lucide-react';
import { Category } from '@/types';
import { ProductFilters } from '@/hooks/use-product-filters';

interface ActiveFiltersProps {
  filters: ProductFilters;
  categories: Category[];
  activeFiltersCount: number;
  onRemoveFilter: (filterKey: keyof ProductFilters) => void;
}
export const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  filters,
  categories,
  activeFiltersCount,
  onRemoveFilter,
}) => {
  if (activeFiltersCount === 0) return null;

  return (
    <div className="mt-4 pt-4 border-t border-gray-200">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-gray-700">
          Active filters:
        </span>

        {filters.selectedCategory && (
          <FilterTag
            label={`Category: ${categories.find((c) => c.name === filters.selectedCategory)?.name}`}
            onRemove={() => onRemoveFilter('selectedCategory')}
            variant="primary"
          />
        )}

        {filters.selectedBrand && (
          <FilterTag
            label={`Brand: ${filters.selectedBrand}`}
            onRemove={() => onRemoveFilter('selectedBrand')}
            variant="primary"
          />
        )}

        {filters.selectedRating > 0 && (
          <FilterTag
            label={`${filters.selectedRating}+ Stars`}
            onRemove={() => onRemoveFilter('selectedRating')}
            variant="primary"
          />
        )}

        {filters.showOnlyInStock && (
          <FilterTag
            label="In Stock"
            onRemove={() => onRemoveFilter('showOnlyInStock')}
            variant="green"
          />
        )}
      </div>
    </div>
  );
};

const FilterTag: React.FC<{
  label: string;
  onRemove: () => void;
  variant: 'primary' | 'green' | 'red';
}> = ({ label, onRemove, variant }) => {
  const variantClasses = {
    primary: 'bg-primary-100 text-primary-800 hover:text-primary-900',
    green: 'bg-green-100 text-green-800 hover:text-green-900',
    red: 'bg-red-100 text-red-800 hover:text-red-900',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${variantClasses[variant]}`}
    >
      {label}
      <button onClick={onRemove} className="ml-2">
        <X className="h-3 w-3" />
      </button>
    </span>
  );
};
