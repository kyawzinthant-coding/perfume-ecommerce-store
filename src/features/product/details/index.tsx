import { fetchReviewsQuery, OneProductQuery } from '@/api/product-query';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link, useLoaderData } from 'react-router';
import BreadCrumb from './components/BreadCrumb';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Minus,
  Plus,
  RotateCcw,
  Shield,
  ShoppingCart,
  Truck,
  Star,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';
import { Rating } from '@/components/Rating';
import { Review } from '@/types';

const ProductDetailsPage = () => {
  const { productId } = useLoaderData();

  const { data: productDetails } = useSuspenseQuery(OneProductQuery(productId));
  const { data: reviewData } = useSuspenseQuery(fetchReviewsQuery(productId));

  const addToCart = useCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    'description' | 'reviews' | 'notes'
  >('description');

  const product = productDetails.data;
  const reviews = reviewData.data;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="mb-6">
        <BreadCrumb name={product.name} />
      </div>

      {/* Back Link - Mobile optimized */}
      <Link
        to="/products"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 text-sm sm:text-base"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
        {/* Product Image - Smaller and more responsive */}
        <div className="lg:col-span-5 xl:col-span-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:max-w-none bg-gray-50 rounded-xl overflow-hidden shadow-sm border">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Stock badge */}
            <div className="absolute top-4 right-4">
              {product.stock_quantity > 1 ? (
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  In Stock
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                  Out of Stock
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* Product Header */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">
                {product.brand_name}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-1 leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Rating and Reviews */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <Rating rating={Number(product.average_rating)} showValue />
                <span className="text-sm text-gray-500">
                  ({product.review_count} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                ${Number(product.price).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Stock and Quantity Section */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-50 rounded-l-lg transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-50 rounded-r-lg transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="text-sm">
                {product.stock_quantity > 1 ? (
                  <p className="text-green-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {product.stock_quantity > 2
                      ? 'In Stock'
                      : `Only ${product.stock_quantity} left`}
                  </p>
                ) : (
                  <p className="text-red-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    Out of Stock
                  </p>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={product.stock_quantity < 1}
              className="w-full"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.stock_quantity < 1 ? 'Out of Stock' : 'Add to Cart'}
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-gray-200">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="p-2 bg-primary-50 rounded-lg">
                <Truck className="h-4 w-4 text-primary-600" />
              </div>
              <span>Free shipping over $75</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="p-2 bg-primary-50 rounded-lg">
                <RotateCcw className="h-4 w-4 text-primary-600" />
              </div>
              <span>30-day returns</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="p-2 bg-primary-50 rounded-lg">
                <Shield className="h-4 w-4 text-primary-600" />
              </div>
              <span>Authentic guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="mt-12 lg:mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 overflow-x-auto">
            {[
              { id: 'description', label: 'Description' },
              { id: 'notes', label: 'Scent Notes' },
              { id: 'reviews', label: `Reviews (${reviews.length})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 whitespace-nowrap font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="py-8">
          {activeTab === 'description' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="prose max-w-none"
            >
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          )}

          {activeTab === 'notes' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-100">
                <h3 className="font-semibold text-lg mb-3 text-rose-700 flex items-center gap-2">
                  <span className="w-3 h-3 bg-rose-400 rounded-full"></span>
                  Top Notes
                </h3>
                <p className="text-gray-700">{product.top_notes}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-100">
                <h3 className="font-semibold text-lg mb-3 text-purple-700 flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                  Middle Notes
                </h3>
                <p className="text-gray-700">{product.middle_notes}</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100 sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold text-lg mb-3 text-amber-700 flex items-center gap-2">
                  <span className="w-3 h-3 bg-amber-400 rounded-full"></span>
                  Base Notes
                </h3>
                <p className="text-gray-700">{product.base_notes}</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {reviews.length > 0 ? (
                reviews.map((review: Review) => (
                  <div
                    key={review.id}
                    className="bg-gray-50 rounded-lg p-6 border"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-700 font-semibold text-lg">
                            {review.user_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h4 className="font-semibold text-gray-900">
                            {review.user_name}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {new Date(review.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="mb-3">
                          <Rating rating={review.rating} size="sm" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                          {review.review_text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-lg">
                    No reviews yet. Be the first to review this product!
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
