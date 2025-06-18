import { Category } from '@/types';
import { Package } from 'lucide-react';

export const CategoryFilter: React.FC<{
  selectedCategory: string;
  categories: Category[];
  onChange: (category: string) => void;
}> = ({ selectedCategory, categories, onChange }) => (
  <div>
    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
      <Package className="h-4 w-4 mr-2 text-primary-600" />
      Category
    </h4>
    <div className="space-y-3">
      <label className="flex items-center group cursor-pointer">
        <input
          type="radio"
          name="category"
          value=""
          checked={selectedCategory === ''}
          onChange={(e) => onChange(e.target.value)}
          className="mr-3 text-primary-600 focus:ring-primary-500"
        />
        <span className="group-hover:text-primary-600 transition-colors">
          All Categories
        </span>
      </label>
      {categories.map((category) => (
        <label
          key={category.id}
          className="flex items-center group cursor-pointer"
        >
          <input
            type="radio"
            name="category"
            value={category.name}
            checked={selectedCategory === category.name}
            onChange={(e) => onChange(e.target.value)}
            className="mr-3 text-primary-600 focus:ring-primary-500"
          />
          <span className="group-hover:text-primary-600 transition-colors">
            {category.name}
          </span>
        </label>
      ))}
    </div>
  </div>
);
