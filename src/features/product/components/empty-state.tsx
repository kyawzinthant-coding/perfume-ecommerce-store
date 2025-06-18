import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  onClearFilters: () => void;
}

export const EmptyState = ({ onClearFilters }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20 bg-white rounded-2xl shadow-lg"
      data-testid="empty-state"
    >
      <div className="text-8xl mb-6">🔍</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        No products found
      </h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        We couldn't find any products matching your criteria. Try adjusting your
        filters or search terms.
      </p>
      <Button onClick={onClearFilters} size="lg" variant="outline">
        Clear All Filters
      </Button>
    </motion.div>
  );
};
