
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  tag?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  price, 
  originalPrice, 
  image, 
  tag 
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <div className="relative">
        {tag && (
          <span className="absolute top-3 left-3 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
        <img src={image} alt={title} className="w-full h-60 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">{price}</span>
            {originalPrice && (
              <span className="text-gray-500 line-through text-sm">{originalPrice}</span>
            )}
          </div>
          <Button className="bg-brand-green hover:bg-brand-green-light">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
