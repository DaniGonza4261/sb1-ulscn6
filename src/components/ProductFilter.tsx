import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface ProductFilterProps {
  onChange: (products: string[]) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const products = [
    'DON ERNESTO INTEGRAL',
    'Arroz L. Fino EL CHEFF 00000 10x1',
    'Arroz L. Fino DON ERNESTO 00000 10x1',
    'Arroz L. Fino FIN-K 00000 10x1',
    'Arroz L. Fino FIN-K 0000 10 x 1 kg',
    'ARROMAX',
    'Arroz L. Fino EL CHEFF 00000 10x1/2',
    'Arroz L. Fino DON ERNESTO 00000 10x1/2',
    'Arroz L. Fino FIN-K 00000 10x1/2',
    'Arroz L. Fino FIN-K 0000 10x1/2',
    'Arroz L. Fino - Pulido - Big Bag de 800 Kg c/u',
    'Arroz L. Fino - Pulido - Big Bag de 1.187,5 Kg c/u',
  ];

  const handleProductToggle = (product: string) => {
    const updatedProducts = selectedProducts.includes(product)
      ? selectedProducts.filter((p) => p !== product)
      : [...selectedProducts, product];
    setSelectedProducts(updatedProducts);
    onChange(updatedProducts);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 bg-white border rounded px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter className="text-gray-500" />
        <span>Filtrar productos</span>
        <ChevronDown className="text-gray-500" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-64 bg-white border rounded shadow-lg">
          {products.map((product) => (
            <label key={product} className="flex items-center px-4 py-2 hover:bg-gray-100">
              <input
                type="checkbox"
                checked={selectedProducts.includes(product)}
                onChange={() => handleProductToggle(product)}
                className="mr-2"
              />
              <span className="text-sm">{product}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFilter;