import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  index: number;
  slug?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, features, index, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // if (slug) {
      navigate(`/services/${slug}`);
    // }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer hover:border-primary-300 dark:hover:border-primary-600"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
        <div className="text-white">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
<button
  onClick={(e) => {
    e.stopPropagation(); // Prevents triggering the card's onClick
    navigate('/product-basket');  // Redirects to About page
  }}
  className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-200"
>
  Learn More
  <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
</button>

    </motion.div>
  );
};

export default ProductCard;