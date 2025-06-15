import React from 'react';
import { Link } from 'react-router';
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-gold-400 bg-clip-text text-transparent">
                Aura
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Discover your signature scent with our curated collection of
              luxury perfumes. Each fragrance tells a unique story of elegance
              and sophistication.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/products"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                All Products
              </Link>
              <Link
                to="/products?category=women"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Women's Fragrances
              </Link>
              <Link
                to="/products?category=men"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Men's Fragrances
              </Link>
              <Link
                to="/products?category=unisex"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Unisex Collection
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <div className="space-y-2">
              <Link
                to="/shipping"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Shipping Info
              </Link>
              <Link
                to="/returns"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Returns & Exchanges
              </Link>
              <Link
                to="/faq"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">hello@aura.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Aura. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>for fragrance lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
