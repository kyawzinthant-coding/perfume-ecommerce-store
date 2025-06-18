import { Brand } from '@/types';
import { Sparkles } from 'lucide-react';

export const BrandFilter: React.FC<{
  selectedBrand: string;
  brands: Brand[];
  onChange: (brand: string) => void;
}> = ({ selectedBrand, brands, onChange }) => (
  <div>
    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
      <Sparkles className="h-4 w-4 mr-2 text-primary-600" />
      Brand
    </h4>
    <select
      value={selectedBrand}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
    >
      <option value="">All Brands</option>
      {brands.map((brand) => (
        <option key={brand.id} value={brand.name}>
          {brand.name}
        </option>
      ))}
    </select>
  </div>
);
