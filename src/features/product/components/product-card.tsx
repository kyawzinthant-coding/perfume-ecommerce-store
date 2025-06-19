import { useCartStore } from '@/store/cartStore';

import { Product } from '@/types';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Eye, ShoppingCart, Sparkles, Star, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index = 0,
}) => {
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success('Added to cart!');
  };

  // const inWishlist = isInWishlist(product.id);
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const isNew = (createdTime: string) => {
    const createdDate: any = new Date(createdTime);
    const now: any = new Date();
    const diffInMs: any = now - createdDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays <= 3;
  };

  return (
    <motion.div
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative  w-full"
    >
      <div className="bg-white flex flex-col  rounded-2xl shadow-lg hover:shadow-2xl transition-all h-[450px] duration-500 overflow-hidden border border-gray-100 hover:border-primary-200">
        {/* Product Image Container */}
        <div className="relative aspect-[3/3] overflow-hidden h-[220px] w-full bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {isNew(product.created_at) && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
              >
                <Sparkles className="h-3 w-3" />
                NEW
              </motion.span>
            )}

            {product && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-gold-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
              >
                FEATURED
              </motion.span>
            )}
          </div>

          {/* Wishlist Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            // onClick={handleToggleWishlist}
            // className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10 ${
            //   inWishlist
            //     ? 'bg-rose-500 text-white shadow-lg'
            //     : 'bg-white/80 hover:bg-white text-gray-700 hover:text-rose-500 shadow-md'
            // }`}
          >
            {/* <Heart
                className={`h-4 w-4 ${inWishlist ? 'fill-current' : ''}`}
              /> */}
          </motion.button>

          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex gap-2">
              <Button
                onClick={handleAddToCart}
                disabled={product.stock_quantity < 0}
                className="flex-1 cursor-pointer backdrop-blur-sm bg-white/90 hover:bg-white text-gray-900 border-0 shadow-lg"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.stock_quantity > 1 ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button
                variant="outline"
                className="backdrop-blur-sm bg-white/90 hover:bg-white cursor-pointer border-0 shadow-lg px-3"
                size="sm"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stock Status Indicator */}
          {product.stock_quantity <= 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <Link to={`/products/${product.id}`}>
          <div className="p-6">
            {/* Brand and Rating */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-primary-600 uppercase tracking-wide">
                {product.brand_name}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-gray-700">
                  {product.rating}
                </span>
                <span className="text-xs text-gray-500">
                  ({product.reviewCount})
                </span>
              </div>
            </div>
            {/* Product Name */}
            <h3 className="font-bold  min-h-[3rem] text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors leading-tight">
              {product.name}
            </h3>
            {/* Description
            <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p> */}
            {/* Scent Notes Preview */}
            <div className="mb-2">
              <div className="flex flex-wrap gap-1">
                <span className="text-xs bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 px-2 py-1 rounded-full border border-primary-100">
                  {product.top_notes}
                </span>
                <span className="text-xs bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 px-2 py-1 rounded-full border border-primary-100">
                  {product.middle_notes}
                </span>
                <span className="text-xs bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 px-2 py-1 rounded-full border border-primary-100">
                  {product.base_notes}
                </span>
              </div>
            </div>
            {/* Price Section */}
            <div className="flex items-center justify-between mb-4 ">
              <div className="flex items-center space-x-2 me-3">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice &&
                  product.originalPrice > product.price && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
              </div>
              {discountPercentage > 0 && (
                <div className="flex items-center space-x-1 text-red-600 bg-red-50 px-2 py-1 rounded-full">
                  <Tag className="h-3 w-3" />
                  <span className="text-xs font-bold">
                    SAVE {discountPercentage}%
                  </span>
                </div>
              )}
            </div>
            {/* Stock Status */}
            <div className="flex items-center justify-between">
              {product.stock_quantity >= 1 ? (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700">
                    {product.stock_quantity > 5
                      ? 'In Stock'
                      : `Only ${product.stock_quantity} left`}
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-red-600">
                    Out of Stock
                  </span>
                </div>
              )}

              {/* Category Badge */}
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {product.category_name}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};
